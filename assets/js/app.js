(() => {
  const content = document.getElementById("guideContent");
  const sideNav = document.getElementById("sideNav");
  const toc = document.getElementById("toc");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const crumb = document.getElementById("crumbCurrent");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const menuBtn = document.getElementById("menuBtn");
  const themeBtn = document.getElementById("themeToggle");
  const themeIcon = themeBtn ? themeBtn.querySelector(".theme-icon") : null;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const THEME_KEY = "warungwiki-theme";
  const lightQuery = window.matchMedia("(prefers-color-scheme: light)");

  function storedTheme() {
    try { const v = localStorage.getItem(THEME_KEY); return v === "light" || v === "dark" ? v : null; }
    catch (_) { return null; }
  }
  function systemTheme() { return lightQuery.matches ? "light" : "dark"; }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", String(theme === "light"));
      themeBtn.setAttribute("aria-label", theme === "light" ? "Ganti ke tema gelap" : "Ganti ke tema terang");
      if (themeIcon) themeIcon.textContent = theme === "light" ? "☾" : "☀";
    }
    if (themeMeta) themeMeta.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue("--bg").trim());
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = (document.documentElement.getAttribute("data-theme") || systemTheme()) === "light" ? "dark" : "light";
      try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
      applyTheme(next);
    });
    lightQuery.addEventListener("change", () => { if (!storedTheme()) applyTheme(systemTheme()); });
    applyTheme(storedTheme() || systemTheme());
  }

  const slugify = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
  const plain = (el) => (el.textContent || "").replace(/\s+/g, " ").trim();

  const PAGE_FILES = {
    "beranda": "index.html",
    "daftar-npc-pelanggan": "daftar-npc-pelanggan.html",
    "quest-level": "quest-level.html",
    "cerita-utama": "cerita-utama.html",
    "quest-warga": "quest-warga.html",
    "daftar-kejadian-acak": "daftar-kejadian-acak.html",
    "daftar-harga": "daftar-harga.html",
    "daftar-upgrade": "daftar-upgrade.html",
    "panduan-mini-game": "panduan-mini-game.html",
    "kalender": "kalender.html",
    "tips-trik": "tips-trik.html",
    "papan-peringkat": "leaderboard.html",
    "change-log": "change-log.html"
  };
  const PAGE_MATCH = {
    "beranda": (h) => /^Isi$/i.test(plain(h)),
    "daftar-npc-pelanggan": (h) => /^1\.\s*Daftar NPC/i.test(plain(h)),
    "quest-level": (h) => /^2\.\s*Quest Level/i.test(plain(h)),
    "cerita-utama": (h) => /^3\.\s*Cerita Utama/i.test(plain(h)),
    "quest-warga": (h) => /^4\.\s*Quest Warga/i.test(plain(h)),
    "daftar-kejadian-acak": (h) => /^5\.\s*Daftar Kejadian/i.test(plain(h)),
    "daftar-harga": (h) => /^6\.\s*Daftar Harga/i.test(plain(h)),
    "daftar-upgrade": (h) => /^7\.\s*Daftar Upgrade/i.test(plain(h)),
    "panduan-mini-game": (h) => /^8\.\s*Panduan Mini/i.test(plain(h)),
    "kalender": (h) => /^9\.\s*Kalender/i.test(plain(h)),
    "tips-trik": (h) => /^10\.\s*Tips/i.test(plain(h)),
    "papan-peringkat": (h) => /^11\.\s*Papan Peringkat/i.test(plain(h)),
    "change-log": (h) => /^12\.\s*Change Log/i.test(plain(h))
  };
  const SLUG_TO_PAGE = {
    "isi": "index.html",
    "1-daftar-npc-pelanggan": "daftar-npc-pelanggan.html",
    "2-quest-level": "quest-level.html",
    "3-cerita-utama": "cerita-utama.html",
    "4-quest-warga": "quest-warga.html",
    "5-daftar-kejadian-acak": "daftar-kejadian-acak.html",
    "6-daftar-harga": "daftar-harga.html",
    "7-daftar-upgrade": "daftar-upgrade.html",
    "8-panduan-mini-game": "panduan-mini-game.html",
    "9-kalender": "kalender.html",
    "10-tips-trik": "tips-trik.html",
    "11-papan-peringkat": "leaderboard.html",
    "12-change-log": "change-log.html"
  };
  const currentPageKey = () => {
    if (window.GUIDE_PAGE) return window.GUIDE_PAGE;
    const name = (location.pathname.split("/").pop() || "index.html").toLowerCase().split("?")[0];
    for (const key in PAGE_FILES) if (PAGE_FILES[key] === name) return key;
    return "beranda";
  };
  const pageFile = (key) => PAGE_FILES[key] || "index.html";
  const sectionPageOf = (el) => {
    const h2 = (el && el.tagName === "H2") ? el : (el ? el.previousElementSibling : null);
    let node = el;
    while (node && node.tagName !== "H2") node = node.previousElementSibling;
    if (!node) {
      node = el && el.parentElement ? el.parentElement.previousElementSibling : null;
      while (node && node.tagName !== "H2") node = node && node.previousElementSibling;
    }
    for (const key in PAGE_MATCH) if (node && PAGE_MATCH[key](node)) return pageFile(key);
    return pageFile(currentPageKey());
  };

  function escapeHtml(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

  let searchIndex = [];

  async function init() {
    try {
      const response = await fetch("data/guide.md", { cache: "no-store" });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const markdown = await response.text();
      if (!window.marked) throw new Error("Library Markdown tidak berhasil dimuat. Periksa koneksi internet lalu muat ulang.");
      marked.setOptions({ gfm: true, breaks: false });
      const raw = marked.parse(markdown);
      const doc = new DOMParser().parseFromString(raw, "text/html");
      content.innerHTML = doc.body.innerHTML;
      formatOutcomeColumns();
      formatDialogues();
      formatPlaceholders();
      formatQuestAccordions();
      buildNavigation();
      bindAnchors();
      buildSearchIndex();
      watchHeadings();
      rewriteSectionLinks();
      showOnlyCurrentSection();
      setupSearch();
      setupMobileNav();
      updateCrumb();
      initPapanWidget();
      goToHash();
    } catch (e) {
      content.innerHTML = `<p>Error loading guide: ${e.message}</p>`;
    }
  }

  function formatOutcomeColumns() {
    // Group HASIL - BANTU and HASIL - TOLAK into outcome-grid
    const labels = [...content.querySelectorAll("p")];
    const bantuLabels = labels.filter((el) => {
      const st = el.querySelector("strong");
      return st && /HASIL\s*-\s*BANTU/i.test(st.textContent || "");
    });
    bantuLabels.forEach((bantuLabel) => {
      if (bantuLabel.closest(".outcome-card")) return;
      // Find the tolak label
      let tolakLabel = null;
      let n = bantuLabel.nextElementSibling;
      while (n) {
        if (n.tagName === "P") {
          const st = n.querySelector("strong");
          if (st && /HASIL\s*-\s*TOLAK/i.test(st.textContent || "")) {
            tolakLabel = n;
            break;
          }
        }
        if (n.tagName === "H2" || n.tagName === "H3") break;
        n = n.nextElementSibling;
      }
      if (!tolakLabel) return;
      // Collect bantu content (between bantuLabel and tolakLabel)
      const bantuContent = [];
      n = bantuLabel.nextElementSibling;
      while (n && n !== tolakLabel) {
        bantuContent.push(n);
        n = n.nextElementSibling;
      }
      // Collect tolak content (after tolakLabel until next h2/h3 or end)
      const tolakContent = [];
      n = tolakLabel.nextElementSibling;
      while (n && n.tagName !== "H2" && n.tagName !== "H3") {
        tolakContent.push(n);
        n = n.nextElementSibling;
      }
      // Create outcome grid
      const grid = document.createElement("div");
      grid.className = "outcome-grid";
      // Accept card
      const acceptCard = document.createElement("div");
      acceptCard.className = "outcome-card accept";
      const acceptLabel = document.createElement("p");
      acceptLabel.className = "outcome-label";
      const acceptSpan = document.createElement("span");
      acceptSpan.textContent = "✓";
      acceptLabel.appendChild(acceptSpan);
      const acceptStrong = bantuLabel.querySelector("strong");
      const acceptText = acceptStrong
        ? acceptStrong.textContent.replace(/HASIL\s*-\s*/i, "").replace(/:$/, "").trim()
        : "BANTU";
      const acceptLabelSpan = document.createElement("span");
      acceptLabelSpan.textContent = acceptText;
      acceptLabel.appendChild(acceptLabelSpan);
      acceptCard.appendChild(acceptLabel);
      bantuContent.forEach((el) => acceptCard.appendChild(el));
      // Reject card
      const rejectCard = document.createElement("div");
      rejectCard.className = "outcome-card reject";
      const rejectLabel = document.createElement("p");
      rejectLabel.className = "outcome-label";
      const rejectSpan = document.createElement("span");
      rejectSpan.textContent = "✗";
      rejectLabel.appendChild(rejectSpan);
      const rejectStrong = tolakLabel.querySelector("strong");
      const rejectText = rejectStrong
        ? rejectStrong.textContent.replace(/HASIL\s*-\s*/i, "").replace(/:$/, "").trim()
        : "TOLAK";
      const rejectLabelSpan = document.createElement("span");
      rejectLabelSpan.textContent = rejectText;
      rejectLabel.appendChild(rejectLabelSpan);
      rejectCard.appendChild(rejectLabel);
      tolakContent.forEach((el) => rejectCard.appendChild(el));
      grid.appendChild(acceptCard);
      grid.appendChild(rejectCard);
      // Replace bantuLabel with grid
      const parent = bantuLabel.parentElement;
      if (!parent) return;
      parent.insertBefore(grid, bantuLabel);
      // Remove original elements
      bantuLabel.remove();
      tolakLabel.remove();
      // Remove bantu content (already moved)
      // Remove tolak content (already moved)
    });
  }

  const DIALOGUE_CHARS = new Set(["Abah Karta","Agus","Bu Ida","Dimas","Haji Doni","Kang Asep","Kang Dadan","Kang Fadil","Kang Hasan","Mang Ujang","Mas Fariz","Mba Giska","Nenek Sumi","Neng Shinta","Pak Misran","Pak RT","Pak Rudi","Ucup","Warga","Arab","Bu Guru","Bu Ningsih","Bu RT","Bu Yati","Mas Fajar","Pak Darto","Pak Slamet","Nenek","Shinta"]);

  // Frasa yang menandakan sebuah "Nama:" adalah label bagian, bukan penutur dialog.
  const LABEL_WORDS = /(dialog|setelah|pertanyaan|pilihan|hasil|sapaan|balasan|barang|sewa|lembar|pop-up|catatan|syarat|target|batas|level|keperluan|tahap|reputasi|bonus|harga|modal|efek|interaksi|aksi|alur|kesimpulan|ringkasan)/i;

  function isSpeakerName(name, sayText, allowAnyName) {
    if (!sayText) return false;
    if (DIALOGUE_CHARS.has(name)) return true;
    if (!allowAnyName) return false;
    if (name.length > 22) return false;
    if (LABEL_WORDS.test(name)) return false;
    return true;
  }

  function formatDialogues() {
    // Satu paragraf markdown bisa memuat banyak baris dialog (tanpa baris kosong).
    // Pecah per penutur: setiap <strong>Nama:</strong> di awal baris jadi satu .dlg-line,
    // baris miring (*narasi*) jadi .dlg-note. Hasilnya satu baris = satu penutur.
    const h2s = [...content.querySelectorAll("h2")];
    const sectionOf = (node) => {
      let title = "";
      for (const h of h2s) {
        if (h.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING) title = h.textContent.trim();
        else break;
      }
      return title;
    };

    const paragraphs = [...content.querySelectorAll("p, li")];
    paragraphs.forEach((p) => {
      if (!p.isConnected || p.closest(".dlg")) return;

      const nameStrongs = [...p.querySelectorAll(":scope > strong")].filter((s) =>
        /^[^:]{1,80}:$/.test(s.textContent.trim())
      );
      if (!nameStrongs.length) return;

      const inStory = /^[34]\./.test(sectionOf(p));

      // Butir daftar hanya diproses kalau memang dialog: penutur di awal butir.
      // Butir metadata (Keperluan, Target, Batas, dan sejenisnya) dibiarkan apa adanya.
      if (p.tagName === "LI") {
        if (nameStrongs[0] !== p.firstElementChild) return;
        const first = nameStrongs[0];
        const firstName = first.textContent.trim().replace(/:$/, "").trim();
        const firstSay = (first.nextSibling?.textContent || "").trim();
        if (!isSpeakerName(firstName, firstSay, inStory)) return;
        // Di daftar sapaan warga, dua penutur dipisah " / " dalam satu bullet.
        // Ganti pemisah itu jadi batas baris supaya tiap penutur dapat barisnya sendiri.
        [...p.childNodes].forEach((n) => {
          if (n.nodeType === 3) n.nodeValue = n.nodeValue.replace(/\s+\/\s+/g, "\n");
        });
      }

      const segments = [];
      let cur = null;
      const flush = () => {
        if (!cur) return;
        cur.text = (cur.text || "")
          .replace(/[\t\u00a0]+/g, " ")
          .replace(/\s*\n\s*/g, " ")
          .replace(/\s{2,}/g, " ")
          .trim();
        if (cur.name || cur.text) segments.push(cur);
        cur = null;
      };

      [...p.childNodes].forEach((node) => {
        if (node.nodeType === 3) {
          if (!cur) cur = { name: "", text: "", narration: false };
          cur.text += node.nodeValue;
          return;
        }
        if (node.nodeType !== 1) return;

        if (node.tagName === "STRONG") {
          const t = node.textContent.trim();
          const m = t.match(/^([^:]{1,80}):$/);
          if (m && (!cur || !cur.text.trim() || /\n\s*$/.test(cur.text))) {
            flush();
            cur = { name: m[1].trim(), text: "", narration: false };
            return;
          }
        }

        if (node.tagName === "EM") {
          const t = (node.textContent || "").trim();
          const atLineStart = !cur || !cur.text.trim() || /\n\s*$/.test(cur.text);
          if (t && atLineStart) {
            flush();
            cur = { name: "", text: t, narration: true };
            return;
          }
        }

        if (!cur) cur = { name: "", text: "", narration: false };
        cur.text += node.textContent || "";
      });
      flush();

      if (!segments.some((s) => s.name || s.narration)) return;

      const dlg = document.createElement("div");
      dlg.className = "dlg";

      segments.forEach((seg) => {
        if (seg.narration) {
          const note = document.createElement("p");
          note.className = "dlg-note";
          note.textContent = seg.text;
          dlg.appendChild(note);
          return;
        }
        if (!seg.name) {
          const note = document.createElement("p");
          note.className = "dlg-note";
          note.textContent = seg.text;
          dlg.appendChild(note);
          return;
        }
        if (isSpeakerName(seg.name, seg.text, inStory)) {
          const line = document.createElement("p");
          line.className = "dlg-line";
          const who = document.createElement("span");
          who.className = "dlg-who";
          who.textContent = seg.name;
          const say = document.createElement("span");
          say.className = "dlg-say";
          say.textContent = seg.text;
          line.appendChild(who);
          line.appendChild(say);
          dlg.appendChild(line);
        } else {
          const label = document.createElement("p");
          label.className = "dlg-label";
          const strong = document.createElement("strong");
          strong.textContent = seg.name + ":";
          label.appendChild(strong);
          if (seg.text) {
            const span = document.createElement("span");
            span.textContent = " " + seg.text;
            label.appendChild(span);
          }
          dlg.appendChild(label);
        }
      });

      if (p.tagName === "LI") {
        // Pertahankan <li> agar penanda daftar tetap tampil; isinya jadi blok dialog.
        p.textContent = "";
        p.classList.add("dlg-li");
        p.appendChild(dlg);
      } else {
        p.replaceWith(dlg);
      }
    });
  }

  // Angka/nominal di dokumen memakai placeholder seperti {target} atau {batas}.
  // Beri gaya token supaya tidak terbaca seperti salah tulis, tanpa mengubah teksnya.
  function formatPlaceholders() {
    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || node.nodeValue.indexOf("{") === -1) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("code, pre, script, style, .dlg-who, .var-token")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const text = node.nodeValue;
      const re = /\{([^{}\n]{1,30})\}/g;
      let m;
      let last = 0;
      let changed = false;
      const frag = document.createDocumentFragment();
      while ((m = re.exec(text))) {
        changed = true;
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const span = document.createElement("span");
        span.className = "var-token";
        span.textContent = "{" + m[1].trim() + "}";
        span.title = "Nilai mengikuti progres permainan";
        frag.appendChild(span);
        last = m.index + m[0].length;
      }
      if (!changed) return;
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function formatQuestAccordions() {
    // Wrap quest and bab sections in <details> elements
    const headings = [...content.querySelectorAll("h3")];
    headings.forEach((h) => {
      const text = plain(h);
      // Match: Bab X, quest sections (X.Y ID), and quest warga headings
      const isBab = /^Bab\s+\d+/i.test(text);
      const isQuest = /^\d+\.\d+\s/i.test(text);
      if (!isBab && !isQuest) return;
      // Wrap from this heading until the next h2 or h3
      const group = [];
      group.push(h);
      let n = h.nextElementSibling;
      while (n && n.tagName !== "H2" && n.tagName !== "H3") {
        group.push(n);
        n = n.nextElementSibling;
      }
      // Create details element
      const details = document.createElement("details");
      details.className = isBab ? "quest bab" : "quest";
      const summary = document.createElement("summary");
      summary.className = "quest-summary";
      const h3 = document.createElement("h3");
      h3.textContent = text;
      summary.appendChild(h3);
      details.appendChild(summary);
      const body = document.createElement("div");
      body.className = "quest-body";
      group.slice(1).forEach(el => body.appendChild(el));
      details.appendChild(body);
      // Replace heading with details
      const parent = h.parentElement;
      parent.insertBefore(details, h);
      h.remove();
    });
  }

  function buildNavigation() {
    const headings = [...content.querySelectorAll("h2")];
    headings.forEach((heading, index) => { heading.id = slugify(plain(heading)) || `section-${index}`; });
    const items = [
      { key: "beranda", icon: "⌂", label: "Beranda" },
      { key: "daftar-npc-pelanggan", icon: "👤", label: "Daftar NPC & Pelanggan" },
      { key: "quest-level", icon: "🏆", label: "Quest Level" },
      { key: "cerita-utama", icon: "📖", label: "Cerita Utama" },
      { key: "quest-warga", icon: "👥", label: "Quest Warga" },
      { key: "daftar-kejadian-acak", icon: "⚡", label: "Daftar Kejadian Acak" },
      { key: "daftar-harga", icon: "💰", label: "Daftar Harga" },
      { key: "daftar-upgrade", icon: "⚙️", label: "Daftar Upgrade" },
      { key: "panduan-mini-game", icon: "🎮", label: "Panduan Mini-Game" },
      { key: "kalender", icon: "📅", label: "Kalender" },
      { key: "tips-trik", icon: "💡", label: "Tips & Trik" },
      { key: "papan-peringkat", icon: "🏅", label: "Papan Peringkat", sep: "PAPAN PERINGKAT" },
      { key: "change-log", icon: "🗒️", label: "Change Log", sep: "LOG VERSI" }
    ];
    const cur = currentPageKey();
    sideNav.innerHTML = items.map((it) =>
      (it.sep ? `<div class="nav-sep">${it.sep}</div>` : "") +
      `<a class="nav-link${it.key === cur ? " active" : ""}" href="${pageFile(it.key)}"><span>${it.icon}</span>${escapeHtml(it.label)}</a>`
    ).join("");

    const currentH2 = headings.find((h) => PAGE_MATCH[cur] && PAGE_MATCH[cur](h));
    const h3s = [];
    if (currentH2) {
      let n = currentH2.nextElementSibling;
      while (n && n.tagName !== "H2") {
        if (n.tagName === "H3" && !n.id) n.id = slugify(plain(n)) || `h3-${h3s.length}`;
        if (n.tagName === "H3") h3s.push(n);
        n = n.nextElementSibling;
      }
    }
    toc.innerHTML = h3s.length
      ? h3s.map((h) => `<a href="#${h.id}">${escapeHtml(plain(h))}</a>`).join("")
      : (currentH2 ? `<a href="#${currentH2.id}">${escapeHtml(plain(currentH2))}</a>` : "");
  }

  function buildSearchIndex() {
    const all = [...content.querySelectorAll("h2,h3,h4,p,li,tr,blockquote")];
    let currentH2 = null;
    searchIndex = all.map((el, index) => {
      if (el.tagName === "H2") currentH2 = el;
      if (!el.id) el.id = `entry-${index}`;
      return { id: el.id, text: plain(el), heading: currentH2 ? plain(currentH2) : "", tag: el.tagName, page: pageForH2(currentH2) };
    }).filter(item => item.text.length > 2);
  }

  function pageForH2(h2) {
    if (!h2) return pageFile(currentPageKey());
    for (const key in PAGE_MATCH) if (PAGE_MATCH[key](h2)) return pageFile(key);
    return SLUG_TO_PAGE[h2.id] || pageFile(currentPageKey());
  }

  function bindAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  function watchHeadings() {
    const headings = [...content.querySelectorAll("h2")];
    headings.forEach((h) => {
      h.addEventListener("click", () => {
        window.location.hash = h.id;
      });
    });
  }

  function rewriteSectionLinks() {
    Object.keys(SLUG_TO_PAGE).forEach((slug) => {
      const page = SLUG_TO_PAGE[slug];
      content.querySelectorAll("a[href='#" + slug + "']").forEach((a) => a.setAttribute("href", page));
    });
    document.querySelectorAll(".quick-stats a[href^='#']").forEach((a) => {
      const slug = a.getAttribute("href").slice(1);
      if (SLUG_TO_PAGE[slug]) a.setAttribute("href", SLUG_TO_PAGE[slug]);
    });
  }

  function showOnlyCurrentSection() {
    const cur = currentPageKey();
    const headings = [...content.querySelectorAll("h2")];
    if (cur === "beranda") {
      // On beranda, hide all guide sections (navigation via icon buttons)
      headings.forEach((h) => {
        const group = [h];
        let n = h.nextElementSibling;
        while (n && n.tagName !== "H2") { group.push(n); n = n.nextElementSibling; }
        group.forEach((el) => { el.style.display = "none"; });
      });
      // Hide the content layout's article but keep search working
      const hero = document.querySelector(".hero");
      const qs = document.querySelector(".quick-stats");
      if (hero) hero.style.display = "";
      if (qs) qs.style.display = "";
      return;
    }
    headings.forEach((h) => {
      const isCurrent = PAGE_MATCH[cur] ? PAGE_MATCH[cur](h) : false;
      const group = [h];
      let n = h.nextElementSibling;
      while (n && n.tagName !== "H2") { group.push(n); n = n.nextElementSibling; }
      group.forEach((el) => { el.style.display = isCurrent ? "" : "none"; });
    });
    const hero = document.querySelector(".hero");
    const qs = document.querySelector(".quick-stats");
    const navGroups = document.querySelector(".nav-groups");
    if (hero) hero.style.display = "none";
    if (qs) qs.style.display = "none";
    if (navGroups) navGroups.style.display = "none";
  }

  function revealTarget(id) {
    const target = document.getElementById(id);
    if (!target) return false;
    // Open any parent details
    let parent = target.parentElement;
    while (parent) {
      if (parent.tagName === "DETAILS") parent.open = true;
      parent = parent.parentElement;
    }
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    return true;
  }

  function goToHash() {
    const hash = location.hash.slice(1);
    if (!hash) return;
    // Try to find the element
    setTimeout(() => {
      revealTarget(hash);
    }, 300);
  }

  function setupSearch() {
    if (!searchInput || !searchResults) return;
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (q.length < 2) { searchResults.innerHTML = ""; searchResults.hidden = true; return; }
      const hits = searchIndex.filter(item => item.text.toLowerCase().includes(q));
      searchResults.hidden = false;
      searchResults.innerHTML = hits.length
        ? hits.map(hit => {
            const targetPage = hit.page || pageFile(currentPageKey());
            const href = (targetPage === pageFile(currentPageKey())) ? `#${hit.id}` : `${targetPage}#${hit.id}`;
            return `<a class="result-item" href="${href}"><b>${escapeHtml(hit.text.slice(0, 110))}${hit.text.length > 110 ? "…" : ""}</b><small>${escapeHtml(hit.tag)} · Klik untuk menuju bagian</small></a>`;
          }).join("")
        : `<div class="muted">Tidak ada hasil. Coba kata kunci lain.</div>`;
    });
    searchResults.addEventListener("click", (e) => {
      const a = e.target.closest("a.result-item");
      if (!a) return;
      const [file, hash] = (a.getAttribute("href") || "").split("#");
      if (file && file !== pageFile(currentPageKey())) return; // navigasi ke halaman lain
      e.preventDefault();
      if (hash) revealTarget(hash);
      searchResults.hidden = true;
    });
  }

  function setupMobileNav() {
    if (!menuBtn || !sidebar || !backdrop) return;
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      backdrop.classList.toggle("show");
    });
    backdrop.addEventListener("click", () => {
      sidebar.classList.remove("open");
      backdrop.classList.remove("show");
    });
  }

  function initPapanWidget() {
    const WIDGET = document.getElementById("papanWidget");
    if (!WIDGET) return;

    const API_URL = "https://vfeihrxdwynivqcksxwl.supabase.co/rest/v1/rpc/ambil_papan";
    const API_KEY = "sb_publishable_bGjm_-NNAqleprvQoE3dLA_IVYxzKmr";

    const TABS = [
      { id: "semua", label: "Seluas Masa", note: "Kumulatif sejak warung pertama dibuka" },
      { id: "bulan", label: "Bulan Ini", note: "Mulai dari nol setiap tanggal 1" },
      { id: "minggu", label: "Minggu Ini", note: "Papan komunitas — saat ini data sama dengan Bulan Ini" }
    ];

    const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

    function fmtNum(n) { return (n||0).toLocaleString("id-ID"); }

    async function fetchData(jenis) {
      const r = await fetch(API_URL, {
        method: "POST",
        headers: { "apikey": API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ p_jenis: jenis, p_id: "" })
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    }

    function bulanLabel(bulan) {
      const parts = String(bulan || "").split("-");
      if (parts.length !== 2) return bulan || "";
      return BULAN[parseInt(parts[1], 10) - 1] + " " + parts[0];
    }

    function buildTable(daftar) {
      const thead = "<tr><th>#</th><th>Nama Warung</th><th>Pembeli</th><th>Bintang</th><th>Level</th></tr>";
      const tbody = daftar.map((row, i) => {
        const rank = i + 1;
        const [name, total, , stars, level] = row;
        const kelas = rank <= 3 ? ` class="rank-${rank}"` : "";
        return `<tr><td${kelas}>${rank}</td><td>${escapeHtml(String(name || "—"))}</td><td class="num">${fmtNum(total)}</td><td>${Number(stars) || 0} ★</td><td>${Number(level) || 0}</td></tr>`;
      }).join("");
      return `<table class="leaderboard-table"><thead>${thead}</tbody>${tbody}</table>`;
    }

    const cache = {};
    let current = "semua";

    function loadTab(id, fresh) {
      buttons.forEach((b) => b.classList.toggle("active", b.dataset.tab === id));
      body.innerHTML = '<div class="papan-status muted"><div class="spinner"></div>Memuat papan…</div>';
      const job = (fresh || !cache[id])
        ? fetchData(id).then((d) => { cache[id] = d; return d; })
            .catch((e) => { cache[id] = { error: e.message }; return cache[id]; })
        : Promise.resolve(cache[id]);
      job.then((data) => {
        if (current !== id) return;
        if (data.error) {
          body.innerHTML = `<div class="papan-error">Papan tidak bisa dimuat: ${escapeHtml(data.error)}.<br>Periksa koneksi internet, lalu <button class="papan-retry" type="button">muat ulang</button>.</div>`;
          body.querySelector(".papan-retry").addEventListener("click", () => loadTab(id, true));
          return;
        }
        const totalWarung = data.jumlah_warung != null ? fmtNum(data.jumlah_warung) : "";
        const status = `Top 50 dari ${totalWarung} warung · ${bulanLabel(data.bulan)}`;
        body.innerHTML = `<div class="papan-status muted">${status}</div>` + buildTable(data.daftar || []);
      });
    }

    WIDGET.innerHTML = `<div class="papan-tabs" role="tablist">${TABS.map((t) => `<button class="papan-tab${t.id === current ? " active" : ""}" data-tab="${t.id}" role="tab" type="button">${t.label}</button>`).join("")}</div><div class="papan-note muted">${TABS.find((t) => t.id === current).note}</div><div class="papan-body"></div>`;

    const buttons = [...WIDGET.querySelectorAll(".papan-tab")];
    const note = WIDGET.querySelector(".papan-note");
    const body = WIDGET.querySelector(".papan-body");

    buttons.forEach((b) => b.addEventListener("click", () => {
      current = b.dataset.tab;
      note.textContent = TABS.find((t) => t.id === current).note;
      loadTab(current);
    }));

    loadTab(current);
  }

  function updateCrumb() {
    if (!crumb) return;
    const cur = currentPageKey();
    const labels = {
      "beranda": "Beranda",
      "daftar-npc-pelanggan": "Daftar NPC & Pelanggan",
      "quest-level": "Quest Level",
      "cerita-utama": "Cerita Utama",
      "quest-warga": "Quest Warga",
      "daftar-kejadian-acak": "Daftar Kejadian Acak",
      "daftar-harga": "Daftar Harga",
      "daftar-upgrade": "Daftar Upgrade",
      "panduan-mini-game": "Panduan Mini-Game",
      "kalender": "Kalender",
      "tips-trik": "Tips & Trik",
      "papan-peringkat": "Papan Peringkat",
      "change-log": "Change Log"
    };
    crumb.textContent = labels[cur] || cur;
  }


  init();
})();