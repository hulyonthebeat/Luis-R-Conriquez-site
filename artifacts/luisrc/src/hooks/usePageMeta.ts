import { useEffect } from "react";
import type { PageMeta } from "@/lib/pageMeta";

function setMetaTag(
  selector: string,
  attrName: string,
  attrValue: string,
  content: string,
) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title;
    setMetaTag('meta[name="description"]', "name", "description", meta.description);
    setMetaTag('meta[property="og:title"]', "property", "og:title", meta.ogTitle);
    setMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      meta.ogDescription,
    );
    setMetaTag('meta[property="og:url"]', "property", "og:url", meta.ogUrl);
    setMetaTag(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      meta.twitterTitle,
    );
    setMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      meta.twitterDescription,
    );
    setLinkTag("canonical", meta.canonical);
  }, [
    meta.title,
    meta.description,
    meta.ogTitle,
    meta.ogDescription,
    meta.ogUrl,
    meta.twitterTitle,
    meta.twitterDescription,
    meta.canonical,
  ]);
}
