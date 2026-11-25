import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const app = readFileSync(join(root, "assets/js/app.js"), "utf8");
const css = readFileSync(join(root, "assets/css/style.css"), "utf8");

test("app.js menangkap prompt install native", () => {
  assert.ok(app.includes('"beforeinstallprompt"'), "tidak ada pendengar beforeinstallprompt");
  assert.ok(/prompt\(\)/.test(app), "tidak memanggil prompt install");
  assert.ok(app.includes('"appinstalled"'), "tidak menangani appinstalled");
});

test("app.js mendeteksi iOS dan menyediakan instruksi", () => {
  assert.ok(/iPad\|iPhone\|iPod|navigator\.platform/.test(app), "tidak ada deteksi iOS");
  assert.ok(app.includes("Add to Home Screen"), "instruksi Add to Home Screen tidak ada");
  assert.ok(app.includes("Unduh wiki"), "tombol unduh iOS tidak ada");
});

test("pop-up hanya muncul sekali", () => {
  assert.ok(app.includes("warungwiki-install-seen"), "kunci localStorage tidak ada");
  assert.ok(app.includes('localStorage.getItem("warungwiki-install-seen")'), "tidak membaca status");
  assert.ok(app.includes('localStorage.setItem("warungwiki-install-seen"'), "tidak menyimpan status");
});

test("dialog memenuhi aksesibilitas dasar", () => {
  assert.ok(app.includes('role="dialog"'), "tidak ada role dialog");
  assert.ok(app.includes('aria-modal="true"'), "tidak ada aria-modal");
  assert.ok(app.includes("Escape"), "tidak ada penanganan Escape");
});

test("service worker didaftarkan", () => {
  assert.ok(app.includes('navigator.serviceWorker.register("./sw.js")'), "sw.js tidak didaftarkan");
});

test("style.css memiliki gaya untuk tombol dan dialog install", () => {
  for (const selector of [".install-button", ".install-overlay", ".install-dialog", ".install-steps"]) {
    assert.ok(css.includes(selector), `${selector} tidak ada di CSS`);
  }
  assert.ok(css.includes("@media (prefers-reduced-motion: reduce)"), "tidak ada aturan reduced motion");
});

test("status seen ditulis saat dialog ditutup, bukan saat tombol muncul", () => {
  const closeStart = app.indexOf("function closeDialog()");
  const closeBody = app.slice(closeStart, app.indexOf("function dialogHtml()", closeStart));
  assert.ok(closeBody.includes("markSeen()"), "closeDialog tidak menandai pop-up sudah dilihat");

  const showStart = app.indexOf("function showButton()");
  const showBody = app.slice(showStart, app.indexOf("if (isIOS)", showStart));
  assert.ok(!showBody.includes("markSeen"), "showButton menandai dilihat sebelum pop-up tampil");

  const installedStart = app.indexOf('"appinstalled"');
  const installedBody = app.slice(installedStart, app.indexOf('"serviceWorker" in navigator', installedStart));
  assert.ok(installedBody.includes("markSeen()"), "appinstalled tidak menandai sudah dilihat");
});

test("dialog membuat konten di belakangnya inert", () => {
  assert.ok(/\.inert = true/.test(app), "konten belakang dialog tidak dibuat inert");
  assert.ok(/\.inert = false/.test(app), "konten belakang dialog tidak dikembalikan");
});
