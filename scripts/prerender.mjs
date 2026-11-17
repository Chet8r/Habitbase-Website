// Turns the built single-page app into one HTML file per page, with the page's
// content and meta tags already in it. Search engines and link previews then
// see real content, and every page returns 200 instead of relying on a
// 404 redirect. Runs at the end of `npm run build`, after the client build
// (dist/) and the server build of src/entry-server.tsx (dist-ssr/).
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = path.join(root, "dist");
const serverBuild = path.join(root, "dist-ssr");

const { render, pages, headTags, sitemap } = await import(
  pathToFileURL(path.join(serverBuild, "entry-server.js")).href
);
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

function replaceOnce(html, marker, replacement) {
  if (html.split(marker).length !== 2) {
    throw new Error(`prerender: expected exactly one ${marker} in dist/index.html`);
  }
  return html.replace(marker, () => replacement);
}

for (const page of pages) {
  // React starts its output with preload hints for the page's images. Those
  // belong in <head>, not inside the element React attaches to in the browser.
  const [, preloads, appHtml] = render(page.path).match(/^((?:<link\b[^>]*>)*)([\s\S]*)$/);
  const head = [headTags(page), ...(preloads.match(/<link\b[^>]*>/g) ?? [])].join("\n    ");

  let html = replaceOnce(template, "<title>HabitBase</title>", head);
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  await fs.writeFile(path.join(dist, page.file), html);
  console.log(`prerendered ${page.path} -> dist/${page.file}`);
}

await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap());
await fs.rm(serverBuild, { recursive: true, force: true });
