const SITE = "https://luisrconriquezofficial.com";
const OG_IMAGE = `${SITE}/opengraph.jpg?v=11`;

export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  ogUrl: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  ogImage?: string;
};

export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "Luis R Conriquez — Sitio Oficial · Corridos Bélicos",
    description:
      "Sitio oficial de Luis R Conriquez. Escucha el nuevo álbum Corridos Bélicos Vol. IV y consigue boletos para la gira.",
    canonical: `${SITE}/`,
    ogUrl: `${SITE}/`,
    ogTitle: "Luis R Conriquez — Sitio Oficial",
    ogDescription: "El Rey de los Corridos Bélicos. Música y gira.",
    twitterTitle: "Luis R Conriquez — Sitio Oficial",
    twitterDescription: "El Rey de los Corridos Bélicos. Música y gira.",
    ogImage: OG_IMAGE,
  },
  "/biografia": {
    title: "Biografía — Luis R Conriquez · El Rey de los Corridos Bélicos",
    description:
      "Conoce la historia de Luis R Conriquez: de Caborca, Sonora a pionero de los corridos bélicos. Colaboraciones, logros y su nuevo álbum Muchacho Alegre.",
    canonical: `${SITE}/biografia`,
    ogUrl: `${SITE}/biografia`,
    ogTitle: "Biografía — Luis R Conriquez",
    ogDescription:
      "La historia de El Rey de los Corridos Bélicos: trayectoria, colaboraciones y logros.",
    twitterTitle: "Biografía — Luis R Conriquez",
    twitterDescription:
      "La historia de El Rey de los Corridos Bélicos: trayectoria, colaboraciones y logros.",
    ogImage: OG_IMAGE,
  },
  "/shows": {
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
    ogImage: OG_IMAGE,
  },
};
