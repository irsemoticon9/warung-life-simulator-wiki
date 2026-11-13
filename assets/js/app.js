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
    "quest-level": "quest-level.html",
    "cerita-utama": "cerita-utama.html",
    "quest-warga": "quest-warga.html",
    "daftar-barang": "daftar-barang.html",
    "daftar-upgrade": "daftar-upgrade.html",
    "daftar-harga-ikan": "daftar-harga-ikan.html"
  };
  const PAGE_MATCH = {
    "beranda": (h) => /^Isi$/i.test(plain(h)),
    "quest-level": (h) => /^1\.\s*Quest Level/i.test(plain(h)),
    "cerita-utama": (h) => /^2\.\s*Cerita Utama/i.test(plain(h)),
    "quest-warga": (h) => /^3\.\s*Quest Warga/i.test(plain(h)),
    "daftar-barang": (h) => /^4\.\s*Daftar Barang/i.test(plain(h)),
    "daftar-harga-ikan": (h) => /^5\.\s*Daftar Harga Ikan/i.test(plain(h)),
    "daftar-upgrade": (h) => /^6\.\s*Daftar Upgrade/i.test(plain(h))
  };
  const SLUG_TO_PAGE = {
    "isi": "index.html",
    "1-quest-level": "quest-level.html",
    "2-cerita-utama": "cerita-utama.html",
    "3-quest-warga": "quest-warga.html",
    "4-daftar-barang": "daftar-barang.html",
    "5-daftar-upgrade": "daftar-upgrade.html",
    "6-daftar-harga-ikan": "daftar-harga-ikan.html"
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
    // find nearest preceding h2
    let node = el;
    while (node && node.tagName !== "H2") node = node.previousElementSibling;
    if (!node) {
      // walk up? content flat; try previous siblings of parents not needed
      node = el && el.parentElement ? el.parentElement.previousElementSibling : null;
      while (node && node.tagName !== "H2") node = node && node.previousElementSibling;
    }
    for (const key in PAGE_MATCH) if (node && PAGE_MATCH[key](node)) return pageFile(key);
    return pageFile(currentPageKey());
  };

  async function init() {
    try {
      const response = await fetch("data/guide.md", { cache: "no-store" });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const markdown = await response.text();
      if (!window.marked) throw new Error("Library Markdown tidak berhasil dimuat. Periksa koneksi internet lalu muat ulang.");
      marked.setOptions({ gfm: true, breaks: false });
      const raw = marked.parse(markdown);
      content.innerHTML = window.DOMPurify ? DOMPurify.sanitize(raw) : raw;
      formatOutcomeColumns();
      formatDialogues();
      formatQuestAccordions();
      buildNavigation();
      bindAnchors();
      buildSearchIndex();
      watchHeadings();
      rewriteSectionLinks();
      showOnlyCurrentSection();
    } catch (error) {
      content.innerHTML = `<div class="loading-state"><b>Gagal memuat panduan</b><span>${escapeHtml(error.message)}</span><a href="data/guide.md">Buka file panduan Markdown</a></div>`;
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }

  // Kelompokkan hasil cabang BANTU/TOLAK menjadi dua kolom agar mudah dibandingkan.
  function formatOutcomeColumns() {
    const children = [...content.children];
    const textOf = el => plain(el).replace(/\s+/g, " ").trim();
    const isOutcome = el => el.tagName === "P" && /^HASIL\s*[-\u2013\u2014]/i.test(textOf(el));
    const isBoundary = el => /^(H2|H3|H4|HR)$/.test(el.tagName)
      || (el.tagName === "P" && /^(Sapaan warga|Tahap \d|Pertanyaan)/i.test(textOf(el)));
    const blocks = [];

    for (let i = 0; i < children.length; i++) {
      if (!isOutcome(children[i])) continue;
      const kind = /TOLAK/i.test(textOf(children[i])) ? "reject" : "accept";
      let end = i + 1;
      while (end < children.length && !isOutcome(children[end]) && !isBoundary(children[end])) end++;
      blocks.push({ header: children[i], nodes: children.slice(i + 1, end), kind });
      i = end - 1;
    }

    const used = new Set();
    blocks.forEach((block, i) => {
      if (used.has(i)) return;
      const next = blocks[i + 1];
      const pair = next && next.kind !== block.kind ? next : null;
      if (pair) used.add(i + 1);

      const grid = document.createElement("div");
      grid.className = pair ? "outcome-grid" : "outcome-grid single";
      [block, ...(pair ? [pair] : [])]
        .sort((a, b) => (a.kind === "accept" ? -1 : 1))
        .forEach(b => {
          const card = document.createElement("section");
          card.className = `outcome-card ${b.kind}`;
          const label = document.createElement("div");
          label.className = "outcome-label";
          label.innerHTML = b.kind === "accept"
            ? '<span>✓</span><b>HASIL DITERIMA · BANTU</b>'
            : '<span>×</span><b>HASIL DITOLAK</b>';
          card.appendChild(label);
          b.nodes.forEach(node => card.appendChild(node));
          grid.appendChild(card);
        });
      block.header.replaceWith(grid);
    });
  }

  const DLG_LABEL = /^(pertanyaan|pilihan jawaban|dialog|syarat|balasan|misi|setelah|sapaan|catatan|target|kebutuhan|batas|hasil|pop-up|level|tahap|bab|isi|biaya|upgrade|barang baru|tips)/i;

  // Ubah paragraf dialog jadi baris bersuara: nama di kolom kiri, ucapan di kanan.
  // Paragraf bersaudara digabung jadi satu blok supaya label, ucapan, dan pilihan tidak
  // terpisah jarak. Narasi <em> di akhir ucapan dipindah jadi baris catatan.
  function formatDialogues() {
    const isHead = n => n.nodeType === 1 && n.tagName === "STRONG" && /:\s*$/.test(n.textContent);
    const transformable = p => p.tagName === "P"
      && !p.closest(".dlg")
      && !/^HASIL\s*[-\u2013\u2014]/i.test(plain(p))
      && [...p.children].some(isHead);
    const isLabel = who => DLG_LABEL.test(who) || who.split(/\s+/).length > 3;

    [...content.querySelectorAll("p")].filter(transformable).forEach(p => {
      if (!p.isConnected) return;
      const run = [p];
      let next = p.nextElementSibling;
      while (next && transformable(next)) {
        run.push(next);
        next = next.nextElementSibling;
      }

      const segs = [];
      let cur = null;
      run.forEach((par, pi) => {
        if (pi && cur) cur.nodes.push(document.createTextNode(" "));
        [...par.childNodes].forEach(node => {
          if (isHead(node)) {
            cur = { who: node.textContent.replace(/:\s*$/, "").trim(), nodes: [] };
            segs.push(cur);
          } else {
            if (!cur) {
              if (node.nodeType === 3 && !node.textContent.trim()) return;
              cur = { who: null, nodes: [] };
              segs.push(cur);
            }
            cur.nodes.push(node);
          }
        });
      });

      const wrap = document.createElement("div");
      wrap.className = "dlg";
      let speakers = 0;

      segs.forEach(seg => {
        const body = document.createElement("span");
        body.className = "dlg-say";
        const notes = [];
        const meaningful = seg.nodes.filter(n => n.nodeType !== 3 || n.textContent.trim());
        const last = meaningful[meaningful.length - 1];
        seg.nodes.forEach(node => {
          if (node === last && node.nodeType === 1 && node.tagName === "EM") {
            notes.push(node);
            return;
          }
          body.appendChild(node);
        });
        const hasBody = body.textContent.trim().length > 0;

        if (seg.who && !isLabel(seg.who)) {
          if (hasBody) {
            speakers++;
            const line = document.createElement("p");
            line.className = "dlg-line";
            const who = document.createElement("span");
            who.className = "dlg-who";
            who.textContent = seg.who;
            line.appendChild(who);
            line.appendChild(body);
            wrap.appendChild(line);
          }
        } else if (seg.who) {
          const lab = document.createElement("p");
          lab.className = "dlg-label";
          const b = document.createElement("strong");
          b.textContent = seg.who + ":";
          lab.appendChild(b);
          if (hasBody) {
            lab.appendChild(document.createTextNode(" "));
            lab.appendChild(body);
          }
          wrap.appendChild(lab);
        } else if (hasBody) {
          const plainP = document.createElement("p");
          plainP.className = "dlg-plain";
          plainP.appendChild(body);
          wrap.appendChild(plainP);
        }

        notes.forEach(n => {
          const note = document.createElement("p");
          note.className = "dlg-note";
          note.appendChild(n);
          wrap.appendChild(note);
        });
      });

      if (!wrap.childNodes.length) return;
      if (!speakers) wrap.classList.add("dlg-labels-only");
      p.replaceWith(wrap);
      run.slice(1).forEach(el => el.remove());
    });
  }

  // Quest warga: 34 quest panjang, jadi tiap quest dibungkus <details> supaya daftarnya
  // bisa dipindai lebih dulu. Isi tetap ada di DOM, jadi pencarian tetap menemukannya.
  // Bab cerita utama (Bab 1 dst) juga dibungkus dengan pola yang sama.
  function formatQuestAccordions() {
    const wrapDetails = (heading, extraClass) => {
      const nodes = [];
      let next = heading.nextElementSibling;
      while (next && !/^(H2|H3)$/.test(next.tagName)) {
        nodes.push(next);
        next = next.nextElementSibling;
      }
      if (!nodes.length) return;

      const details = document.createElement("details");
      details.className = extraClass ? `quest ${extraClass}` : "quest";
      details.id = slugify(plain(heading));

      const summary = document.createElement("summary");
      summary.className = "quest-summary";

      const body = document.createElement("div");
      body.className = "quest-body";
      nodes.forEach(node => body.appendChild(node));

      heading.replaceWith(details);
      summary.appendChild(heading);
      details.appendChild(summary);
      details.appendChild(body);
    };

    [...content.querySelectorAll("h3")]
      .filter(h => /^Bab\s+\d+\s*[-\u2013\u2014]/i.test(plain(h)))
      .forEach(h => wrapDetails(h, "bab"));

    [...content.querySelectorAll("h3")]
      .filter(h => /^\d+\.\d+\s/.test(plain(h)))
      .forEach(h => wrapDetails(h));
  }

  function buildNavigation() {
    const headings = [...content.querySelectorAll("h2")];
    headings.forEach((heading, index) => { heading.id = slugify(plain(heading)) || `section-${index}`; });
    const items = [
      { key: "beranda", icon: "⌂", label: "Beranda" },
      { key: "quest-level", icon: "🏆", label: "Quest Level" },
      { key: "cerita-utama", icon: "📖", label: "Cerita Utama" },
      { key: "quest-warga", icon: "👥", label: "Quest Warga" },
      { key: "daftar-barang", icon: "🛒", label: "Daftar Barang" },
      { key: "daftar-harga-ikan", icon: "🐟", label: "Daftar Harga Ikan" },
      { key: "daftar-upgrade", icon: "⚙️", label: "Daftar Upgrade" }
    ];
    const cur = currentPageKey();
    sideNav.innerHTML = items.map((it) =>
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

  // Buka semua <details> yang membungkus target, supaya tautan ke isi quest tetap mendarat.
  function revealTarget(target) {
    let node = target;
    while (node) {
      if (node.tagName === "DETAILS" && !node.open) node.open = true;
      node = node.parentElement;
    }
  }

  function goToHash(id) {
    const target = id && document.getElementById(id);
    if (!target) return false;
    revealTarget(target);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (target.matches("h2,h3,h4")) crumb.textContent = plain(target).toUpperCase();
    return true;
  }

  function bindAnchors() {
    document.addEventListener("click", event => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const id = decodeURIComponent(link.getAttribute("href").slice(1));
      if (!goToHash(id)) return;
      event.preventDefault();
      history.replaceState(null, "", `#${id}`);
      closeMenu();
    });
    window.addEventListener("hashchange", () => goToHash(decodeURIComponent(location.hash.slice(1))));
    if (location.hash.length > 1) goToHash(decodeURIComponent(location.hash.slice(1)));
  }

  let searchIndex = [];
  function buildSearchIndex() {
    searchIndex = [...content.querySelectorAll("h2,h3,h4,p,li,tr,blockquote")].map((el, index) => {
      if (!el.id) el.id = `entry-${index}`;
      let h2 = el.tagName === "H2" ? el : null;
      if (!h2) {
        let node = el;
        while (node && node.parentElement !== content) node = node.parentElement;
        let cur = node;
        while (cur && cur.previousElementSibling) {
          cur = cur.previousElementSibling;
          if (cur.tagName === "H2") { h2 = cur; break; }
        }
        if (!h2 && node && node.previousElementSibling) {
          // fallback: walk further back
          let prev = node.previousElementSibling;
          while (prev) {
            if (prev.tagName === "H2") { h2 = prev; break; }
            prev = prev.previousElementSibling;
          }
        }
      }
      let page = pageFile(currentPageKey());
      if (h2) {
        for (const key in PAGE_MATCH) if (PAGE_MATCH[key](h2)) { page = pageFile(key); break; }
      }
      return { id: el.id, text: plain(el), heading: el.closest("section")?.querySelector("h2")?.textContent || "", tag: el.tagName, page };
    }).filter(item => item.text.length > 2);
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) { searchResults.hidden = true; searchResults.innerHTML = ""; return; }
    const words = query.split(/\s+/);
    const hits = searchIndex.filter(item => words.every(word => item.text.toLowerCase().includes(word))).slice(0, 30);
    searchResults.hidden = false;
    searchResults.innerHTML = `<h3>${hits.length} hasil ditemukan</h3>` + (hits.length
      ? hits.map(hit => {
      const targetPage = hit.page || pageFile(currentPageKey());
      const href = (targetPage === pageFile(currentPageKey())) ? `#${hit.id}` : `${targetPage}#${hit.id}`;
      return `<a class="result-item" href="${href}"><b>${escapeHtml(hit.text.slice(0, 110))}${hit.text.length > 110 ? "…" : ""}</b><small>${escapeHtml(hit.tag)} · Klik untuk menuju bagian</small></a>`; }).join("")
      : `<div class="muted">Tidak ada hasil. Coba kata kunci lain.</div>`);
    searchResults.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      searchResults.hidden = true;
      searchInput.value = "";
    }));
  });

  function watchHeadings() {
    const headings = [...content.querySelectorAll("h2")];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        crumb.textContent = plain(entry.target).toUpperCase();
        document.querySelectorAll(".nav-link").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
        toc.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
      });
    }, { rootMargin: "-15% 0px -75% 0px" });
    headings.forEach(h => observer.observe(h));
  }

  function closeMenu() { sidebar.classList.remove("open"); backdrop.classList.remove("show"); }
  menuBtn.addEventListener("click", () => { sidebar.classList.toggle("open"); backdrop.classList.toggle("show"); });
  backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); searchInput.focus(); }
    if (e.key === "Escape") { closeMenu(); searchInput.blur(); }
  });


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
    headings.forEach((h) => {
      const isCurrent = PAGE_MATCH[cur] ? PAGE_MATCH[cur](h) : false;
      const group = [h];
      let n = h.nextElementSibling;
      while (n && n.tagName !== "H2") { group.push(n); n = n.nextElementSibling; }
      group.forEach((el) => { el.style.display = isCurrent ? "" : "none"; });
    });
    if (cur !== "beranda") {
      const hero = document.querySelector(".hero");
      const qs = document.querySelector(".quick-stats");
      if (hero) hero.style.display = "none";
      if (qs) qs.style.display = "none";
    }
  }

  init();
})();