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
  { id: "m1", name: "Tour Hoodie — Negro", price: "$78", tag: "Bélico Tour '26", img: "merch-hoodie.webp" },
  { id: "m2", name: "Camiseta Convoy", price: "$42", tag: "Edición Limitada", img: "merch-shirt.webp" },
  { id: "m3", name: "Gorra Chrome Logo", price: "$38", tag: "Esencial", img: "merch-hat.webp" },
  { id: "m4", name: "Vinilo Vol. IV", price: "$54", tag: "Pre-orden", img: "merch-vinyl.webp" },
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
  newsletterArt: "oxblood-cross.jpg",
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
