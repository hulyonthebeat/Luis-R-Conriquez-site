const SITE = "https://luisrconriquezofficial.com";
const OG_IMAGE = `${SITE}/opengraph.jpg?v=15`;

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
      "Sitio oficial de Luis R Conriquez — El Rey de los Corridos Bélicos. Nuevo álbum Muchacho Alegre, tour Europa 2026 y boletos para conciertos.",
    canonical: `${SITE}/`,
    ogUrl: `${SITE}/`,
    ogTitle: "Luis R Conriquez — Sitio Oficial",
    ogDescription: "El Rey de los Corridos Bélicos. Muchacho Alegre ya disponible. Tour Europa 2026 en marcha.",
    twitterTitle: "Luis R Conriquez — Sitio Oficial",
    twitterDescription: "El Rey de los Corridos Bélicos. Muchacho Alegre ya disponible. Tour Europa 2026 en marcha.",
    ogImage: OG_IMAGE,
  },
  "/biografia": {
    title: "Biografía — Luis R Conriquez · El Rey de los Corridos Bélicos",
    description:
      "Conoce la historia de Luis R Conriquez: de Caborca, Sonora a pionero de los corridos bélicos. Colaboraciones, logros y su nuevo álbum Muchacho Alegre.",
    canonical: `${SITE}/biografia/`,
    ogUrl: `${SITE}/biografia/`,
    ogTitle: "Biografía — Luis R Conriquez",
    ogDescription:
      "La historia de El Rey de los Corridos Bélicos: trayectoria, colaboraciones y logros.",
    twitterTitle: "Biografía — Luis R Conriquez",
    twitterDescription:
      "La historia de El Rey de los Corridos Bélicos: trayectoria, colaboraciones y logros.",
    ogImage: OG_IMAGE,
  },
  "/shows": {
    // UPDATE this title and description whenever a new set of dates is announced.
    title: "Conciertos 2026 — Luis R Conriquez · Fechas y Boletos",
    description:
      "Fechas y boletos de los conciertos de Luis R Conriquez 2026. El Rey de los Corridos Bélicos en vivo. Consigue tu entrada oficial antes de que se agoten.",
    canonical: `${SITE}/shows/`,
    ogUrl: `${SITE}/shows/`,
    ogTitle: "Conciertos 2026 — Luis R Conriquez · Fechas y Boletos",
    ogDescription:
      "Conciertos y boletos oficiales 2026. El Rey de los Corridos Bélicos en vivo.",
    twitterTitle: "Conciertos 2026 — Luis R Conriquez · Fechas y Boletos",
    twitterDescription:
      "Conciertos y boletos oficiales 2026. El Rey de los Corridos Bélicos en vivo.",
    ogImage: OG_IMAGE,
  },
  "/privacidad": {
    title: "Política de Privacidad — Luis R Conriquez",
    description:
      "Política de privacidad del sitio oficial de Luis R Conriquez. Conoce cómo recopilamos, usamos y protegemos tu información personal.",
    canonical: `${SITE}/privacidad/`,
    ogUrl: `${SITE}/privacidad/`,
    ogTitle: "Política de Privacidad — Luis R Conriquez",
    ogDescription:
      "Cómo recopilamos, usamos y protegemos tu información en el sitio oficial de Luis R Conriquez.",
    twitterTitle: "Política de Privacidad — Luis R Conriquez",
    twitterDescription:
      "Cómo recopilamos, usamos y protegemos tu información en el sitio oficial de Luis R Conriquez.",
    ogImage: OG_IMAGE,
  },
  "/terminos": {
    title: "Términos de Servicio — Luis R Conriquez",
    description:
      "Términos de servicio del sitio oficial de Luis R Conriquez. Condiciones de uso del sitio y la comunidad de fans.",
    canonical: `${SITE}/terminos/`,
    ogUrl: `${SITE}/terminos/`,
    ogTitle: "Términos de Servicio — Luis R Conriquez",
    ogDescription:
      "Condiciones de uso del sitio oficial y la comunidad de fans de Luis R Conriquez.",
    twitterTitle: "Términos de Servicio — Luis R Conriquez",
    twitterDescription:
      "Condiciones de uso del sitio oficial y la comunidad de fans de Luis R Conriquez.",
    ogImage: OG_IMAGE,
  },
};
