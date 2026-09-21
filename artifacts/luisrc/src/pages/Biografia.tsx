import { useState } from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/site/Reveal";
import { bio, type BioLang } from "@/data/content";
import { mediaUrl } from "@/lib/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";
import { ARTIST_ID } from "@/lib/structuredData";

const LANGS: BioLang[] = ["es", "en"];

const biografiaJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Biografía — Luis R Conriquez",
  url: "https://luisrconriquezofficial.com/biografia/",
  inLanguage: ["es", "en"],
  mainEntity: { "@id": ARTIST_ID },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://luisrconriquezofficial.com/" },
    { "@type": "ListItem", position: 2, name: "Biografía", item: "https://luisrconriquezofficial.com/biografia/" },
  ],
});

export default function Biografia() {
  usePageMeta(pageMeta["/biografia"]);
  const [lang, setLang] = useState<BioLang>("es");
  const copy = bio.copy[lang];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: biografiaJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{copy.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display h-xl chrome">{copy.title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="bio-lead">
            <Reveal>
              <figure className="bio-portrait">
                <img
                  src={mediaUrl(bio.portrait.file)}
                  alt={bio.portrait.label}
                  loading="eager"
                />
              </figure>
            </Reveal>
            <div className="bio-copy">
              <Reveal>
                <div
                  className="lang-toggle"
                  role="group"
                  aria-label="Idioma / Language"
                >
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      type="button"
                      className={`lang-btn${lang === l ? " is-active" : ""}`}
                      aria-pressed={lang === l}
                      onClick={() => setLang(l)}
                    >
                      {bio.langLabels[l]}
                    </button>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="lede">{copy.lede}</p>
              </Reveal>
              {copy.paragraphs.map((p, i) => (
                <Reveal key={`${lang}-${i}`} delay={0.08 + i * 0.03}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bio-cta-section">
        <div className="wrap">
          <Reveal delay={0.1}>
            <p className="bio-cta">
              <Link href="/shows" className="btn btn--gold">
                {copy.cta}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
