import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const jsPath = join(root, "assets/js/app.js");

test("navigasi internal memakai history dan menangani tombol back", () => {
  const src = readFileSync(jsPath, "utf8");
  for (const needle of [
    'document.addEventListener("click"',
    "history.pushState(",
    'window.addEventListener("popstate"',
    "window.GUIDE_PAGE = key",
    "revealTarget(hash)",
    "e.button !== 0",
    "e.metaKey || e.ctrlKey || e.shiftKey || e.altKey",
    'a.target === "_blank"',
    "url.origin !== location.origin",
    "data/guide.md"
  ]) assert.ok(src.includes(needle), `app.js kehilangan ${needle}`);
});

test("tautan anchor memakai listener delegasi", () => {
  const src = readFileSync(jsPath, "utf8");
  assert.ok(src.includes('closest(\'a[href^="#"]\')'), "anchor tidak memakai delegasi");
});

test("judul halaman dipetakan untuk kunci utama", () => {
  const src = readFileSync(jsPath, "utf8");
  for (const title of [
    "Warung Life Simulator Wiki: Panduan v1.3",
    "Warung Life Simulator Wiki: Quest Warga v1.3",
    "Warung Life Simulator Wiki: Papan Peringkat",
    "Warung Life Simulator Wiki: Change Log v1.3"
  ]) assert.ok(src.includes(title), `judul belum ada: ${title}`);
});

test("transisi memakai View Transition dan fallback opacity/transform", () => {
  const js = readFileSync(jsPath, "utf8");
  const css = readFileSync(join(root, "assets/css/style.css"), "utf8");
  for (const needle of [
    "document.startViewTransition(",
    "runPageTransition(",
    'matchMedia("(prefers-reduced-motion: reduce)")',
    'classList.add("is-switching")',
    "requestAnimationFrame("
  ]) assert.ok(js.includes(needle), `JS kehilangan ${needle}`);
  for (const needle of [
    "--page-fade:150ms",
    "--page-ease:cubic-bezier(0.23, 1, 0.32, 1)",
    ".guide-content.is-switching",
    "translateY(4px)",
    "::view-transition-old(root)",
    "::view-transition-new(root)",
    "@media (prefers-reduced-motion: reduce)"
  ]) assert.ok(css.includes(needle), `CSS kehilangan ${needle}`);
  const rule = css.match(/\.guide-content[^,{]*\{[^}]*\}/)?.[0] || "";
  assert.ok(!/transition:\s*all/.test(rule), "fallback tidak boleh memakai transition: all");
});
