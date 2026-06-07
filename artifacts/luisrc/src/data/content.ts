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
    id: "vol4",
    title: "Corridos Bélicos, Vol. IV",
    type: "Álbum",
    year: "2025",
    tracks: 18,
    featured: true,
    copy: "El nuevo capítulo. Dieciocho cortes grabados entre Hermosillo y Los Ángeles — el sonido más crudo y monumental hasta la fecha.",
    cover: "album-vol4.png",
  },
  { id: "jgl", title: "JGL", type: "Sencillo", year: "2025", tracks: 1 },
  { id: "neta", title: "La Neta", type: "Sencillo", year: "2025", tracks: 1 },
  { id: "patron", title: "Modo Patrón", type: "EP", year: "2024", tracks: 6 },
  { id: "convoy", title: "Convoy Nocturno", type: "Sencillo", year: "2024", tracks: 1 },
  { id: "leyenda", title: "Leyenda Viva", type: "Álbum", year: "2024", tracks: 14 },
  { id: "frontera", title: "Cruzando la Frontera", type: "Sencillo", year: "2024", tracks: 1 },
  { id: "corona", title: "Sin Corona", type: "EP", year: "2023", tracks: 5 },
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
};

export const shows: Show[] = [
  { date: "2026-06-19", city: "Los Ángeles, CA", venue: "Crypto.com Arena", status: "few", ticket: "#" },
  { date: "2026-06-27", city: "Phoenix, AZ", venue: "Footprint Center", status: "open", ticket: "#" },
  { date: "2026-07-04", city: "Las Vegas, NV", venue: "T-Mobile Arena", status: "open", ticket: "#" },
  { date: "2026-07-11", city: "Houston, TX", venue: "Toyota Center", status: "soldout", ticket: "#" },
  { date: "2026-07-18", city: "Chicago, IL", venue: "United Center", status: "open", ticket: "#" },
  { date: "2026-08-01", city: "Guadalajara, MX", venue: "Arena VFG", status: "few", ticket: "#" },
  { date: "2026-08-08", city: "Monterrey, MX", venue: "Arena Monterrey", status: "open", ticket: "#" },
  { date: "2026-08-15", city: "Ciudad de México", venue: "Palacio de los Deportes", status: "open", ticket: "#" },
];

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
  { id: "m1", name: "Tour Hoodie — Negro", price: "$78", tag: "Bélico Tour '26", img: "merch-hoodie.png" },
  { id: "m2", name: "Camiseta Convoy", price: "$42", tag: "Edición Limitada", img: "merch-shirt.png" },
  { id: "m3", name: "Gorra Chrome Logo", price: "$38", tag: "Esencial", img: "merch-hat.png" },
  { id: "m4", name: "Vinilo Vol. IV", price: "$54", tag: "Pre-orden", img: "merch-vinyl.png" },
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

export const awards = [
  { title: "Billboard", detail: "Nominado · Regional Mexicano del Año", year: "2025" },
  { title: "Premios Juventud", detail: "Mejor Corrido Bélico", year: "2025" },
  { title: "Disco de Diamante", detail: "Corridos Bélicos Vol. III", year: "2024" },
  { title: "YouTube", detail: "Botón de Diamante · 10M suscriptores", year: "2024" },
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
  smoke: "smoke-texture.jpg",
  logo: "logo.png",
  kmusic: "kmusic.png",
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
