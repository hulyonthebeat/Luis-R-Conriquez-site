/**
 * Post-build prerender script.
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * Renders / and /shows to static HTML files so crawlers receive full content.
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const { render } = await import("./dist/server/entry-server.js");

const template = readFileSync(
  resolve(__dirname, "dist/public/index.html"),
  "utf-8",
);

const SITE = "https://luisrconriquezofficial.com";
const OG_IMAGE = `${SITE}/opengraph.jpg?v=11`;

const routes = [
  {
    url: "/",
    outFile: "dist/public/index.html",
    meta: {
      title: "Luis R Conriquez — Sitio Oficial · Corridos Bélicos",
      description:
        "Sitio oficial de Luis R Conriquez. Escucha el nuevo álbum Corridos Bélicos Vol. IV y consigue boletos para la gira.",
      canonical: `${SITE}/`,
      ogUrl: `${SITE}/`,
      ogTitle: "Luis R Conriquez — Sitio Oficial",
      ogDescription: "El Rey de los Corridos Bélicos. Música y gira.",
      twitterTitle: "Luis R Conriquez — Sitio Oficial",
      twitterDescription: "El Rey de los Corridos Bélicos. Música y gira.",
    },
  },
  {
    url: "/shows",
    outFile: "dist/public/shows/index.html",
    meta: {
      title: "Fechas de Gira 2026 — Luis R Conriquez · Boletos Oficiales",
      description:
        "Consulta las fechas de la gira de Luis R Conriquez en 2026. Consigue tus boletos oficiales para los conciertos de El Rey de los Corridos Bélicos.",
      canonical: `${SITE}/shows`,
      ogUrl: `${SITE}/shows`,
      ogTitle: "Fechas de Gira 2026 — Luis R Conriquez",
      ogDescription:
        "Conciertos, ciudades y boletos oficiales de la gira bélica 2026. El convoy bélico cruza fronteras.",
      twitterTitle: "Fechas de Gira 2026 — Luis R Conriquez",
      twitterDescription:
        "Conciertos, ciudades y boletos oficiales de la gira bélica 2026.",
    },
  },
];

for (const route of routes) {
  let appHtml;
  try {
    appHtml = render(route.url);
  } catch (err) {
    console.error(`[prerender] render error for ${route.url}:`, err);
    process.exit(1);
  }

  const { meta } = route;

  let html = template;

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`,
  );

  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${meta.description}" />`,
  );

  html = html.replace(
    /<meta\s+property="og:title"[^>]*>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`,
  );

  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${meta.ogDescription}" />`,
  );

  html = html.replace(
    /<meta\s+property="og:url"[^>]*>/,
    `<meta property="og:url" content="${meta.ogUrl}" />`,
  );

  html = html.replace(
    /<meta\s+property="og:image:secure_url"[^>]*>/,
    `<meta property="og:image:secure_url" content="${OG_IMAGE}" />`,
  );

  html = html.replace(
    /<meta\s+name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${meta.twitterTitle}" />`,
  );

  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${meta.twitterDescription}" />`,
  );

  html = html.replace(
    /<link\s+rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${meta.canonical}" />`,
  );

  html = html.replace("<!--app-html-->", appHtml);

  const outPath = resolve(__dirname, route.outFile);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);

  console.log(`[prerender] ${route.url} → ${route.outFile}`);
}

console.log("[prerender] done.");
