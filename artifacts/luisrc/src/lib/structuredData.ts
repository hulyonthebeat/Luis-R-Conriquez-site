import {
  entityProfiles,
  platformUrls,
  site,
  socials,
} from "@/data/content";

export const ARTIST_ID =
  "https://luisrconriquezofficial.com/#artist";

export const artistJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": ARTIST_ID,
  name: site.name,
  alternateName: "El Rey de los Corridos Bélicos",
  url: "https://luisrconriquezofficial.com/",
  description:
    "El Rey de los Corridos Bélicos. Música regional mexicana y corridos bélicos.",
  image: [
    "https://luisrconriquezofficial.com/opengraph.jpg?v=15",
    "https://luisrconriquezofficial.com/opengraph-4x3.jpg?v=15",
    "https://luisrconriquezofficial.com/opengraph-1x1.jpg?v=15",
  ],
  genre: [
    "Corridos Bélicos",
    "Regional Mexicano",
    "Corridos",
    "Música Norteña",
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Caborca, Sonora, México",
  },
  sameAs: [
    socials.find((social) => social.id === "instagram")!.url,
    socials.find((social) => social.id === "youtube")!.url,
    platformUrls.spotify,
    socials.find((social) => social.id === "tiktok")!.url,
    socials.find((social) => social.id === "facebook")!.url,
    platformUrls.apple,
    "https://x.com/LuisRConriquez",
    ...entityProfiles,
  ],
});