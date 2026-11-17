// Build-time entry: renders each page to HTML for scripts/prerender.mjs.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export { pages, headTags, sitemap } from "./seo";

export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
