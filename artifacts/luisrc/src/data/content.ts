export type PlatformId = "spotify" | "apple" | "youtube" | "amazon" | "deezer";
export type SocialId = "instagram" | "youtube" | "spotify" | "tiktok" | "x";
export type ShowStatus = "open" | "few" | "soldout";

export const site = {
  name: "Luis R Conriquez",
  tagline: "El Rey de los Corridos Bélicos",
  label: "K Music",
  email: "management@luisrconriquez.com",
  booking: "booking@kmusic.com",
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

/* Official artist profiles per platform (verified) */
export const platformUrls: Record<PlatformId, string> = {
  spotify: "https://open.spotify.com/artist/0pePYDrJGk8gqMRbXrLJC8",
  apple: "https://music.apple.com/us/artist/luis-r-conriquez/1252271456",
  youtube: "https://www.youtube.com/@LuisRConrriquezOficial",
  amazon: "https://music.amazon.com/artists/B079916W1F/luis-r-conriquez",
  deezer: "https://www.deezer.com/us/artist/13916077",
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
  /** direct listen link; falls back to the Spotify artist page when absent */
  link?: string;
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
    link: "https://songwhip.com/luisrconriquez/que-gacho",
  },
  {
    id: "filoso",
    title: "Filoso",
    type: "Sencillo",
    year: "2026",
    tracks: 1,
    copy: "Luis R Conriquez x Kane Rodriguez.",
    cover: "filoso.jpg",
    link: "https://wml.link/FILOSO-KaneRodriguezxLuisRConriquez",
  },
  {
    id: "salma-hayek",
    title: "Salma Hayek",
    type: "Sencillo",
    year: "2026",
    tracks: 1,
    copy: "Luis R Conriquez x Grupo Frontera.",
    cover: "salma-hayek.jpg",
    link: "https://songwhip.com/luisrconriquez/salma-hayek",
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

/** Local YYYY-MM-DD for "today" (ISO show dates compare lexicographically = chronologically). */
function todayISO(): string {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

/** A show is upcoming while its date is today or later; it auto-drops the day after it passes. */
export function isUpcoming(dateISO: string, today: string = todayISO()): boolean {
  return dateISO >= today;
}

/**
 * RAW tour data — the single place to add/edit dates. Keep entries here until they happen;
 * past dates are pruned automatically below, so there is no need to delete them by hand.
 */
const allTours: Tour[] = [
  {
    id: "europa",
    name: "Europa Tour",
    eyebrow: "Europa · Otoño 2026",
    shows: [
      { date: "2026-09-24", city: "Madrid, España", venue: "Movistar Arena", status: "open", ticket: "https://tickets.baila.fm/luis-r-conriquez-la-sala-movistar-arena-madrid-2026", country: "España", note: "Vía Baila.fm" },
      { date: "2026-09-25", city: "Barcelona, España", venue: "Sala Apolo", status: "open", ticket: "https://entradium.com/events/luis-r-conriquez-en-barcelona", country: "España", note: "Vía DICE y Entradium" },
      { date: "2026-09-26", city: "Bilbao, España", venue: "Sala Arena Live", status: "open", ticket: "https://entradium.com/events/luis-r-conriquez-en-bilbao", country: "España", note: "Vía Entradium" },
      { date: "2026-09-27", city: "València, España", venue: "Sala Tomasa", status: "open", ticket: "https://entradium.com/events/luis-r-conriquez-en-valencia", country: "España", note: "Vía Entradium" },
      { date: "2026-09-30", city: "Berlín, Alemania", venue: "Metropol", status: "open", ticket: "https://www.eventbrite.es/e/luis-r-conriquez-en-berlin-tickets-1990509680036?aff=oddtdtcreator", country: "Alemania", note: "Vía Eventbrite" },
      { date: "2026-10-02", city: "París, Francia", venue: "Pan Piper", status: "open", ticket: "https://www.eventbrite.es/e/billets-luis-r-conriquez-en-paris-1990516548580?aff=oddtdtcreator", country: "Francia", note: "Vía Eventbrite" },
      { date: "2026-10-04", city: "Ámsterdam, Países Bajos", venue: "IJland", status: "open", ticket: "https://www.eventbrite.es/e/tickets-luis-r-conriquez-en-amsterdam-1990512687030?aff=oddtdtcreator", country: "Países Bajos", note: "Vía Eventbrite" },
    ],
  },
];

/**
 * PUBLIC tours/shows used across the site. Past dates are removed automatically as they pass,
 * and any tour left with no upcoming dates is dropped. This recomputes on every page load,
 * so the site is always current with no manual cleanup.
 */
export const tours: Tour[] = allTours
  .map((t) => ({ ...t, shows: t.shows.filter((s) => isUpcoming(s.date)) }))
  .filter((t) => t.shows.length > 0);

export const shows: Show[] = tours.flatMap((t) => t.shows);

export const showStatus: Record<ShowStatus, { label: string; cls: string }> = {
  open: { label: "Boletos", cls: "btn--gold" },
  few: { label: "Últimos boletos", cls: "btn--blood" },
  soldout: { label: "Agotado", cls: "btn--ghost soldout" },
};


export const press = [
  { quote: "Redefiniendo el corrido bélico para una nueva generación.", source: "Billboard" },
  { quote: "Una de las voces más poderosas del regional mexicano.", source: "Rolling Stone" },
  { quote: "Cifras de streaming que rompen récords.", source: "Spotify" },
  { quote: "El arquitecto del sonido bélico moderno.", source: "Apple Music" },
];

export type Award = { title: string; detail: string; year: string; img: string };

export const awards: Award[] = [
  { title: "Billboard", detail: "#1 Regional Mexican Airplay", year: "2024", img: "award-billboard-airplay.jpg" },
  { title: "Billboard Hot 100", detail: "Debut · «Si No Quieres No»", year: "2024", img: "award-billboard-hot100.jpg" },
  { title: "Billboard", detail: "Latin Artist on the Rise", year: "2022", img: "award-billboard-rise.jpg" },
];

export type Social = { id: SocialId; label: string; handle: string; url: string };

export const socials: Social[] = [
  { id: "instagram", label: "Instagram", handle: "@luisrconriquezoficial", url: "https://www.instagram.com/luisrconriquezoficial/" },
  { id: "youtube", label: "YouTube", handle: "Luis R Conriquez", url: "https://www.youtube.com/@LuisRConrriquezOficial" },
  { id: "spotify", label: "Spotify", handle: "Luis R Conriquez", url: "https://open.spotify.com/artist/0pePYDrJGk8gqMRbXrLJC8" },
  { id: "tiktok", label: "TikTok", handle: "@luisrconriquezoficial", url: "https://www.tiktok.com/@luisrconriquezoficial" },
  { id: "x", label: "X", handle: "@LuisRConriquez", url: "https://x.com/LuisRConriquez" },
];

export type GalleryItem = { id: string; label: string; img: string };

export const gallery: GalleryItem[] = [
  { id: "g1", label: "Backstage", img: "backstage-beer.jpg" },
  { id: "g2", label: "En el escenario", img: "stage.jpg" },
  { id: "g3", label: "Detrás del bélico", img: "bw-cobra-stage.jpg" },
  { id: "g4", label: "En la gira", img: "crowd.jpg" },
];

/* Hero featured video (the homepage player IS the latest video) */
export const heroVideo = {
  tag: "Video Oficial",
  title: "Que Gacho",
  file: "hero.mp4",
  poster: "hero-poster.jpg",
};

/* Campaign / editorial imagery */
export const media = {
  logo: "logo.webp",
  kmusic: "kmusic.webp",
};

/* Nav links — Spanish, mapped to React routes + home anchors */
export type NavLink = { href: string; label: string; key: string };

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio", key: "home" },
  { href: "/musica", label: "Música", key: "music" },
  { href: "/shows", label: "Shows", key: "shows" },
  { href: "/#reconocimientos", label: "Reconocimientos", key: "recog" },
  { href: "/#bts", label: "BTS", key: "bts" },
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
