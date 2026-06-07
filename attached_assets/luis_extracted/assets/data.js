/* ============================================================
   LUIS R CONRIQUEZ — Editable content data
   Replace text / links / images here. Mirrors the structure
   intended for the Next.js build (data/*.ts).
   ============================================================ */

window.SITE = {
  name: "Luis R Conriquez",
  tagline: "El Rey de los Corridos Bélicos",
  label: "Kartel Music",
  email: "management@luisrconriquez.com",
  booking: "booking@kartelmusic.com",
};

/* Streaming platforms used across release cards */
window.PLATFORMS = ["spotify", "apple", "youtube", "amazon", "deezer"];

window.RELEASES = [
  {
    id: "vol4",
    title: "Corridos Bélicos, Vol. IV",
    type: "Álbum",
    year: "2025",
    tracks: 18,
    featured: true,
    copy: "El nuevo capítulo. Dieciocho cortes grabados entre Hermosillo y Los Ángeles — el sonido más crudo y monumental hasta la fecha.",
    cover: "release-vol4",
  },
  { id: "jgl",      title: "JGL",                    type: "Sencillo", year: "2025", tracks: 1,  cover: "release-jgl" },
  { id: "neta",     title: "La Neta",                type: "Sencillo", year: "2025", tracks: 1,  cover: "release-neta" },
  { id: "patron",   title: "Modo Patrón",            type: "EP",       year: "2024", tracks: 6,  cover: "release-patron" },
  { id: "convoy",   title: "Convoy Nocturno",        type: "Sencillo", year: "2024", tracks: 1,  cover: "release-convoy" },
  { id: "leyenda",  title: "Leyenda Viva",           type: "Álbum",    year: "2024", tracks: 14, cover: "release-leyenda" },
  { id: "frontera", title: "Cruzando la Frontera",   type: "Sencillo", year: "2024", tracks: 1,  cover: "release-frontera" },
  { id: "corona",   title: "Sin Corona",             type: "EP",       year: "2023", tracks: 5,  cover: "release-corona" },
];

window.VIDEOS = [
  { id: "v1", title: "JGL", meta: "Video Oficial", views: "42M", duration: "3:48", featured: true, thumb: "video-jgl" },
  { id: "v2", title: "Modo Patrón", meta: "Video Oficial", views: "28M", duration: "3:12", thumb: "video-patron" },
  { id: "v3", title: "Convoy Nocturno", meta: "Visualizer", views: "11M", duration: "2:59", thumb: "video-convoy" },
  { id: "v4", title: "La Neta", meta: "Video Oficial", views: "19M", duration: "3:33", thumb: "video-neta" },
  { id: "v5", title: "Cruzando la Frontera", meta: "En Vivo · Arena CDMX", views: "7.4M", duration: "4:05", thumb: "video-frontera" },
  { id: "v6", title: "Detrás del Bélico", meta: "Documental · Ep. 01", views: "3.1M", duration: "12:20", thumb: "video-doc" },
];

window.SHOWS = [
  { date: "2026-06-19", city: "Los Ángeles, CA",   venue: "Crypto.com Arena",        status: "few",     ticket: "#" },
  { date: "2026-06-27", city: "Phoenix, AZ",        venue: "Footprint Center",        status: "open",    ticket: "#" },
  { date: "2026-07-04", city: "Las Vegas, NV",      venue: "T-Mobile Arena",          status: "open",    ticket: "#" },
  { date: "2026-07-11", city: "Houston, TX",        venue: "Toyota Center",           status: "soldout", ticket: "#" },
  { date: "2026-07-18", city: "Chicago, IL",        venue: "United Center",           status: "open",    ticket: "#" },
  { date: "2026-08-01", city: "Guadalajara, MX",    venue: "Arena VFG",               status: "few",     ticket: "#" },
  { date: "2026-08-08", city: "Monterrey, MX",      venue: "Arena Monterrey",         status: "open",    ticket: "#" },
  { date: "2026-08-15", city: "Ciudad de México",   venue: "Palacio de los Deportes", status: "open",    ticket: "#" },
];

window.MERCH = [
  { id: "m1", name: "Tour Hoodie — Negro", price: "$78", tag: "Bélico Tour '26", img: "merch-hoodie" },
  { id: "m2", name: "Camiseta Convoy", price: "$42", tag: "Edición Limitada", img: "merch-tee" },
  { id: "m3", name: "Gorra Chrome Logo", price: "$38", tag: "Esencial", img: "merch-cap" },
  { id: "m4", name: "Vinilo Vol. IV", price: "$54", tag: "Pre-orden", img: "merch-vinyl" },
];

window.PRESS = [
  { quote: "Redefiniendo el corrido bélico para una nueva generación.", source: "Billboard" },
  { quote: "Una de las voces más poderosas del regional mexicano.", source: "Rolling Stone" },
  { quote: "Cifras de streaming que rompen récords.", source: "Spotify" },
  { quote: "El arquitecto del sonido bélico moderno.", source: "Apple Music" },
];

window.STATS = [
  { n: "8.4B", l: "Reproducciones globales" },
  { n: "#1", l: "Regional Mexicano · 2025" },
  { n: "42", l: "Ciudades en gira" },
  { n: "12M", l: "Oyentes mensuales" },
];

window.AWARDS = [
  { title: "Billboard",        detail: "Nominado · Regional Mexicano del Año", year: "2025", img: "award-billboard" },
  { title: "Premios Juventud", detail: "Mejor Corrido Bélico",                year: "2025", img: "award-juventud" },
  { title: "Disco de Diamante",detail: "Corridos Bélicos Vol. III",           year: "2024", img: "award-diamante" },
  { title: "YouTube",          detail: "Botón de Diamante · 10M suscriptores", year: "2024", img: "award-youtube" },
];

window.SOCIALS = [
  { id: "instagram", label: "Instagram", handle: "@luisrconriquez", url: "#" },
  { id: "youtube",   label: "YouTube",   handle: "Luis R Conriquez", url: "#" },
  { id: "spotify",   label: "Spotify",   handle: "Luis R Conriquez", url: "#" },
  { id: "tiktok",    label: "TikTok",    handle: "@luisrconriquez", url: "#" },
  { id: "x",         label: "X",         handle: "@luisrconriquez", url: "#" },
];

window.GALLERY = [
  { id: "g1", label: "Backstage", span: "tall", img: "assets/bts/bts-selfie.jpg" },
  { id: "g2", label: "En el escenario", img: "assets/bts/bts-stage.jpg" },
  { id: "g3", label: "Detrás del bélico", img: "assets/bts/bts-anuel.jpg" },
  { id: "g4", label: "En la gira", span: "wide", img: "assets/bts/bts-crowd.jpg" },
];
