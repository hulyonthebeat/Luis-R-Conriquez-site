export type PlatformId = "spotify" | "apple" | "youtube" | "amazon" | "deezer";
export type SocialId = "instagram" | "youtube" | "spotify" | "tiktok" | "x";
export type ShowStatus = "open" | "few" | "soldout";

export const site = {
  name: "Luis R Conriquez",
  tagline: "El Rey de los Corridos Bélicos",
  label: "Kartel Music",
  email: "management@luisrconriquez.com",
  booking: "booking@kartelmusic.com",
};

/* Streaming platforms used across release cards */
export const platforms: PlatformId[] = ["spotify", "apple", "youtube", "amazon", "deezer"];

export const platformLabels: Record<PlatformId, string> = {
  spotify: "Spotify",
  apple: "Apple Music",
  youtube: "YouTube",
  amazon: "Amazon",
  deezer: "Deezer",
};

export type Release = {
  id: string;
  title: string;
  type: string;
  year: string;
  tracks: number;
  featured?: boolean;
  copy?: string;
  /** filename in /media, or undefined for a labeled placeholder */
  cover?: string;
};

export const releases: Release[] = [
  {
    id: "que-gacho",
    title: "Que Gacho",
    type: "Sencillo",
    year: "2026",
    tracks: 1,
    copy: "Luis R Conriquez x Neton Vega.",
    cover: "que-gacho.jpg",
  },
  {
    id: "filoso",
    title: "Filoso",
    type: "Sencillo",
    year: "2026",
    tracks: 1,
    copy: "Luis R Conriquez x Kane Rodriguez.",
    cover: "filoso.jpg",
  },
  {
    id: "salma-hayek",
    title: "Salma Hayek",
    type: "Sencillo",
    year: "2026",
    tracks: 1,
    copy: "Luis R Conriquez x Grupo Frontera.",
    cover: "salma-hayek.jpg",
  },
  {
    id: "meneo",
    title: "Meneo",
    type: "Álbum",
    year: "2025",
    tracks: 12,
    featured: true,
    copy: "El nuevo álbum de Luis R Conriquez — un cruce de fronteras y de ritmos, del corrido al meneo.",
    cover: "meneo.jpg",
  },
];

export type Video = {
  id: string;
  title: string;
  meta: string;
  views: string;
  duration: string;
  featured?: boolean;
  youtubeId?: string;
  /** filename in /media, or undefined for a labeled placeholder */
  thumb?: string;
};

export const videos: Video[] = [
  { id: "v1", title: "JGL", meta: "Video Oficial", views: "42M", duration: "3:48", featured: true, youtubeId: "Lq_1LuXMFbE", thumb: "live-mic-red.jpg" },
  { id: "v2", title: "Modo Patrón", meta: "Video Oficial", views: "28M", duration: "3:12", thumb: "live-stadium.jpg" },
  { id: "v3", title: "Convoy Nocturno", meta: "Visualizer", views: "11M", duration: "2:59", thumb: "stage-duo-night.jpg" },
  { id: "v4", title: "La Neta", meta: "Video Oficial", views: "19M", duration: "3:33", thumb: "couch-luxury.jpg" },
  { id: "v5", title: "Cruzando la Frontera", meta: "En Vivo · Arena CDMX", views: "7.4M", duration: "4:05", thumb: "bw-cobra-stage.jpg" },
  { id: "v6", title: "Detrás del Bélico", meta: "Documental · Ep. 01", views: "3.1M", duration: "12:20", thumb: "backstage-beer.jpg" },
];

export type Show = {
  date: string;
  city: string;
  venue: string;
  status: ShowStatus;
  ticket: string;
  country: string;
  /** optional extra detail: special note, set time, etc. */
  note?: string;
};

export type Tour = {
  id: string;
  name: string;
  eyebrow: string;
  shows: Show[];
};

export const tours: Tour[] = [
  {
    id: "agenda-mx",
    name: "Agenda México",
    eyebrow: "República Mexicana · 2026",
    shows: [
      { date: "2026-02-18", city: "Tulancingo, Hidalgo", venue: "Teatro del Pueblo", status: "open", ticket: "#", country: "México", note: "Baile" },
      { date: "2026-02-21", city: "Río Grande, Zacatecas", venue: "Teatro del Pueblo", status: "open", ticket: "#", country: "México" },
      { date: "2026-03-15", city: "Ring Royale Fights", venue: "Actuación especial", status: "open", ticket: "#", country: "México", note: "8:45 PM" },
      { date: "2026-03-15", city: "San José Tuzuapan, Puebla", venue: "Teatro del Pueblo", status: "open", ticket: "#", country: "México", note: "12:30 AM" },
      { date: "2026-03-24", city: "Tatahuicapan, Veracruz", venue: "Teatro del Pueblo", status: "open", ticket: "#", country: "México" },
      { date: "2026-04-08", city: "Soledad de Graciano Sánchez, S.L.P.", venue: "Teatro del Pueblo", status: "open", ticket: "#", country: "México" },
      { date: "2026-04-12", city: "Texcoco, Estado de México", venue: "Palenque", status: "open", ticket: "#", country: "México" },
    ],
  },
  {
    id: "europa",
    name: "Europa Tour",
    eyebrow: "Europa · Otoño 2026",
    shows: [
      { date: "2026-09-24", city: "Madrid, España", venue: "Sala Movistar", status: "open", ticket: "#", country: "España" },
      { date: "2026-09-25", city: "Barcelona, España", venue: "Sala Apolo", status: "open", ticket: "#", country: "España" },
      { date: "2026-09-26", city: "Bilbao, España", venue: "Sala Arena Live", status: "open", ticket: "#", country: "España" },
      { date: "2026-09-30", city: "Berlín, Alemania", venue: "Metropol", status: "open", ticket: "#", country: "Alemania" },
      { date: "2026-10-02", city: "París, Francia", venue: "Pan Piper", status: "open", ticket: "#", country: "Francia" },
      { date: "2026-10-04", city: "Ámsterdam, Países Bajos", venue: "IJland", status: "open", ticket: "#", country: "Países Bajos" },
    ],
  },
];

export const shows: Show[] = tours.flatMap((t) => t.shows);

export const showStatus: Record<ShowStatus, { label: string; cls: string }> = {
  open: { label: "Boletos", cls: "btn--gold" },
  few: { label: "Últimos boletos", cls: "btn--blood" },
  soldout: { label: "Agotado", cls: "btn--ghost soldout" },
};

export type Merch = {
  id: string;
  name: string;
  price: string;
  tag: string;
  /** filename in /media, or undefined for a labeled placeholder */
  img?: string;
};

export const merch: Merch[] = [
  // Hoodies — Trakas HDSPM Tour 2025
  { id: "m01", name: "Hoodie Trakas Tour — Negro", price: "$78", tag: "Trakas Tour 2025", img: "merch/15-luis-r-conriquez-trakas-hdspm-tour-2025-black-hoodie.webp" },
  { id: "m02", name: "Hoodie Trakas Tour — Blanco", price: "$78", tag: "Trakas Tour 2025", img: "merch/14-luis-r-conriquez-trakas-hdspm-tour-2025-white-hoodie.webp" },
  { id: "m03", name: "Hoodie Trakas Tour — Azul Marino", price: "$78", tag: "Trakas Tour 2025", img: "merch/16-luis-r-conriquez-trakas-hdspm-tour-2025-navy-blue-hoodie.webp" },
  { id: "m04", name: "Hoodie Trakas Tour — Gris", price: "$78", tag: "Trakas Tour 2025", img: "merch/17-luis-r-conriquez-trakas-hdspm-tour-2025-gray-hoodie.webp" },
  { id: "m05", name: "Hoodie Trakas Tour — Rosa", price: "$78", tag: "Trakas Tour 2025", img: "merch/18-luis-r-conriquez-trakas-hdspm-tour-2025-pink-hoodie.webp" },
  { id: "m06", name: "Hoodie Trakas Tour — Rojo", price: "$78", tag: "Trakas Tour 2025", img: "merch/19-luis-r-conriquez-trakas-hdspm-tour-2025-red-hoodie.webp" },

  // Sudaderas — Trakas HDSPM Tour 2025
  { id: "m07", name: "Sudadera Trakas Tour — Negro", price: "$65", tag: "Trakas Tour 2025", img: "merch/08-luis-r-conriquez-trakas-hdspm-tour-2025-black-sweatshirt.webp" },
  { id: "m08", name: "Sudadera Trakas Tour — Azul Marino", price: "$65", tag: "Trakas Tour 2025", img: "merch/09-luis-r-conriquez-trakas-hdspm-tour-2025-navy-blue-sweatshirt.webp" },
  { id: "m09", name: "Sudadera Trakas Tour — Gris", price: "$65", tag: "Trakas Tour 2025", img: "merch/10-luis-r-conriquez-trakas-hdspm-tour-2025-gray-sweatshirt.webp" },
  { id: "m10", name: "Sudadera Trakas Tour — Rosa", price: "$65", tag: "Trakas Tour 2025", img: "merch/11-luis-r-conriquez-trakas-hdspm-tour-2025-pink-sweatshirt.webp" },
  { id: "m11", name: "Sudadera Trakas Tour — Rojo", price: "$65", tag: "Trakas Tour 2025", img: "merch/12-luis-r-conriquez-trakas-hdspm-tour-2025-red-sweatshirt.webp" },
  { id: "m12", name: "Sudadera Trakas Tour — Blanco", price: "$65", tag: "Trakas Tour 2025", img: "merch/13-luis-r-conriquez-trakas-hdspm-tour-2025-white-sweatshirt.webp" },

  // Playeras — Trakas HDSPM Tour 2025
  { id: "m13", name: "Playera Trakas Tour — Beige", price: "$42", tag: "Trakas Tour 2025", img: "merch/01-luis-r-conriquez-trakas-hdspm-tour-2025-beige-t-shirt.webp" },
  { id: "m14", name: "Playera Trakas Tour — Rojo", price: "$42", tag: "Trakas Tour 2025", img: "merch/02-luis-r-conriquez-trakas-hdspm-tour-2025-red-t-shirt.webp" },
  { id: "m15", name: "Playera Trakas Tour — Blanco", price: "$42", tag: "Trakas Tour 2025", img: "merch/03-luis-r-conriquez-trakas-hdspm-tour-2025-white-t-shirt.webp" },
  { id: "m16", name: "Playera Trakas Tour — Negro", price: "$42", tag: "Trakas Tour 2025", img: "merch/04-luis-r-conriquez-trakas-hdspm-tour-2025-black-t-shirt.webp" },
  { id: "m17", name: "Playera Trakas Tour — Gris", price: "$42", tag: "Trakas Tour 2025", img: "merch/05-luis-r-conriquez-trakas-hdspm-tour-2025-gray-t-shirt.webp" },
  { id: "m18", name: "Playera Trakas Tour — Azul Cielo", price: "$42", tag: "Trakas Tour 2025", img: "merch/06-luis-r-conriquez-trakas-hdspm-tour-2025-sky-blue-t-shirt.webp" },
  { id: "m19", name: "Playera Trakas Tour — Rosa", price: "$42", tag: "Trakas Tour 2025", img: "merch/07-luis-r-conriquez-trakas-hdspm-tour-2025-pink-t-shirt.webp" },

  // Playeras Logo — Esencial
  { id: "m20", name: "Playera Logo — Blanco", price: "$36", tag: "Esencial", img: "merch/21-luis-r-conriquez-white-t-shirt.webp" },
  { id: "m21", name: "Playera Logo — Negro", price: "$36", tag: "Esencial", img: "merch/23-luis-r-conriquez-black-t-shirt.webp" },
  { id: "m22", name: "Playera Logo — Gris", price: "$36", tag: "Esencial", img: "merch/24-luis-r-conriquez-gray-t-shirt.webp" },
  { id: "m23", name: "Playera Logo — Rojo", price: "$36", tag: "Esencial", img: "merch/25-luis-r-conriquez-red-t-shirt.webp" },
  { id: "m24", name: "Playera Logo — Beige", price: "$36", tag: "Esencial", img: "merch/26-luis-r-conriquez-beige-t-shirt.webp" },
  { id: "m25", name: "Playera Logo — Rosa", price: "$36", tag: "Esencial", img: "merch/22-luis-r-conriquez-pink-t-shirt.webp" },
  { id: "m26", name: "Playera Logo — Azul Cielo", price: "$36", tag: "Esencial", img: "merch/20-luis-r-conriquez-sky-blue-t-shirt.webp" },

  // Fundas — Accesorios
  { id: "m27", name: "Funda Samsung — Classic Performance", price: "$30", tag: "Accesorio", img: "merch/27-luis-r-conriquez-samsung-phone-case-classic-performance.webp" },
  { id: "m28", name: "Funda Samsung — Bélico", price: "$30", tag: "Accesorio", img: "merch/28-luis-r-conriquez-samsung-phone-case-3.webp" },
  { id: "m29", name: "Funda Samsung — Logo", price: "$30", tag: "Accesorio", img: "merch/29-luis-r-conriquez-samsung-phone-case.webp" },
  { id: "m30", name: "Funda Samsung — Modo Berrión", price: "$30", tag: "Accesorio", img: "merch/30-modo-berrion-samsung-phone-case-luis-r-conriquez.webp" },
];

export const press = [
  { quote: "Redefiniendo el corrido bélico para una nueva generación.", source: "Billboard" },
  { quote: "Una de las voces más poderosas del regional mexicano.", source: "Rolling Stone" },
  { quote: "Cifras de streaming que rompen récords.", source: "Spotify" },
  { quote: "El arquitecto del sonido bélico moderno.", source: "Apple Music" },
];

export const stats = [
  { n: "8.4B", l: "Reproducciones globales" },
  { n: "#1", l: "Regional Mexicano · 2025" },
  { n: "42", l: "Ciudades en gira" },
  { n: "12M", l: "Oyentes mensuales" },
];

export type Award = { title: string; detail: string; year: string; img: string };

export const awards: Award[] = [
  { title: "Billboard", detail: "Latin Artist on the Rise", year: "2022", img: "award-billboard-rise.jpg" },
  { title: "Billboard Hot 100", detail: "Debut · «Si No Quieres No»", year: "2024", img: "award-billboard-hot100.jpg" },
  { title: "Billboard", detail: "#1 Regional Mexican Airplay", year: "2024", img: "award-billboard-airplay.jpg" },
];

export type Social = { id: SocialId; label: string; handle: string; url: string };

export const socials: Social[] = [
  { id: "instagram", label: "Instagram", handle: "@luisrconriquez", url: "#" },
  { id: "youtube", label: "YouTube", handle: "Luis R Conriquez", url: "#" },
  { id: "spotify", label: "Spotify", handle: "Luis R Conriquez", url: "#" },
  { id: "tiktok", label: "TikTok", handle: "@luisrconriquez", url: "#" },
  { id: "x", label: "X", handle: "@luisrconriquez", url: "#" },
];

export type GalleryItem = { id: string; label: string; img: string };

export const gallery: GalleryItem[] = [
  { id: "g1", label: "Backstage", img: "backstage-beer.jpg" },
  { id: "g2", label: "En el escenario", img: "stage.jpg" },
  { id: "g3", label: "Detrás del bélico", img: "bw-cobra-stage.jpg" },
  { id: "g4", label: "En la gira", img: "crowd.jpg" },
];

export const timeline = [
  { yr: "2020", t: "El comienzo", d: "Primeras grabaciones independientes que se vuelven virales en plataformas digitales." },
  { yr: "2021", t: "Kartel Music", d: "Funda su propio sello y empieza a impulsar a una nueva generación de artistas del género." },
  { yr: "2023", t: "Salto global", d: "Entra a los charts internacionales y agota presentaciones en Estados Unidos y México." },
  { yr: "2024", t: "Récords de streaming", d: "Supera miles de millones de reproducciones y consolida el sonido bélico moderno." },
  { yr: "2025", t: "Corridos Bélicos Vol. IV", d: "Lanza su trabajo más ambicioso y encabeza la gira más grande de su carrera." },
];

/* Hero featured video (the homepage player IS the latest video) */
export const heroVideo = {
  tag: "Video Oficial",
  title: "JGL",
  file: "hero.mp4",
  poster: "hero-poster.jpg",
};

/* Campaign / editorial imagery */
export const media = {
  logo: "logo.webp",
  kmusic: "kmusic.webp",
  homeMerchBand: "duo-anuel.jpg",
  merchFeat: "portrait-throne.jpg",
  aboutPortrait: "portrait-1.jpg",
};

/* Nav links — Spanish, mapped to React routes + home anchors */
export type NavLink = { href: string; label: string; key: string };

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio", key: "home" },
  { href: "/musica", label: "Música", key: "music" },
  { href: "/videos", label: "Videos", key: "videos" },
  { href: "/shows", label: "Shows", key: "shows" },
  { href: "/merch", label: "Merch", key: "merch" },
  { href: "/#reconocimientos", label: "Reconocimientos", key: "recog" },
  { href: "/#bts", label: "BTS", key: "bts" },
  { href: "/acerca", label: "Bio", key: "about" },
  { href: "/#suscribete", label: "Suscríbete", key: "news" },
];

const MES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const DOW = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export function fmtDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return {
    day: String(d.getDate()).padStart(2, "0"),
    mon: MES[d.getMonth()],
    year: d.getFullYear(),
    dow: DOW[d.getDay()],
  };
}
