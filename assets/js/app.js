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

  const slugify = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
  const plain = (el) => (el.textContent || "").replace(/\s+/g, " ").trim();

  async function init() {
    try {
      const response = await fetch("data/guide.md");
      if (!response.ok) throw new Error("HTTP " + response.status);
      const markdown = await response.text();
      if (!window.marked) throw new Error("Library Markdown tidak berhasil dimuat. Periksa koneksi internet lalu muat ulang.");
      marked.setOptions({ gfm: true, breaks: false, headerIds: false, mangle: false });
      const raw = marked.parse(markdown);
      content.innerHTML = window.DOMPurify ? DOMPurify.sanitize(raw) : raw;
      buildNavigation();
      bindAnchors();
      buildSearchIndex();
      watchHeadings();
    } catch (error) {
      content.innerHTML = `<div class="loading-state"><b>Gagal memuat panduan</b><span>${escapeHtml(error.message)}</span><a href="data/guide.md">Buka file panduan Markdown</a></div>`;
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }

  function buildNavigation() {
    const headings = [...content.querySelectorAll("h2")];
    headings.forEach((heading, index) => {
      heading.id = slugify(plain(heading)) || `section-${index}`;
    });
    const names = ["Quest Level", "Cerita Utama", "Quest Warga", "Daftar Barang", "Daftar Upgrade"];
    const icons = ["🏆", "📖", "👥", "🛒", "⚙️"];
    const home = `<a class="nav-link active" href="#top"><span>⌂</span> Beranda</a>`;
    const links = headings.map((h, i) => `<a class="nav-link" href="#${h.id}"><span>${icons[i] || "▸"}</span>${escapeHtml(names[i] || plain(h))}</a>`).join("");
    sideNav.innerHTML = home + links;
    toc.innerHTML = headings.map(h => `<a href="#${h.id}">${escapeHtml(plain(h))}</a>`).join("");
  }

  function bindAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", () => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) {
          const heading = target.matches("h2,h3,h4") ? target : null;
          if (heading) crumb.textContent = plain(heading).toUpperCase();
        }
        closeMenu();
      });
    });
  }

  let searchIndex = [];
  function buildSearchIndex() {
    searchIndex = [...content.querySelectorAll("h2,h3,h4,p,li,tr,blockquote")].map((el, index) => {
      if (!el.id) el.id = `entry-${index}`;
      return { id: el.id, text: plain(el), heading: el.closest("section")?.querySelector("h2")?.textContent || "", tag: el.tagName };
    }).filter(item => item.text.length > 2);
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) { searchResults.hidden = true; searchResults.innerHTML = ""; return; }
    const words = query.split(/\s+/);
    const hits = searchIndex.filter(item => words.every(word => item.text.toLowerCase().includes(word))).slice(0, 30);
    searchResults.hidden = false;
    searchResults.innerHTML = `<h3>${hits.length} hasil ditemukan</h3>` + (hits.length
      ? hits.map(hit => `<a class="result-item" href="#${hit.id}"><b>${escapeHtml(hit.text.slice(0, 110))}${hit.text.length > 110 ? "…" : ""}</b><small>${escapeHtml(hit.tag)} · Klik untuk menuju bagian</small></a>`).join("")
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

  init();
})();