import { Link } from "wouter";
import { Reveal } from "@/components/site/Reveal";
import { bio } from "@/data/content";
import { mediaUrl } from "@/lib/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";

export default function Biografia() {
  usePageMeta(pageMeta["/biografia"]);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{bio.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display h-xl chrome">{bio.title}</h1>
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
              <Reveal delay={0.05}>
                <p className="lede">{bio.lede}</p>
              </Reveal>
              {bio.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 + i * 0.03}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="bts-grid bio-gallery">
            {bio.gallery.map((photo) => (
              <Reveal key={photo.file}>
                <div className="bts-cell">
                  <img
                    className="bts-img"
                    src={mediaUrl(photo.file)}
                    alt={photo.label}
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="bio-cta">
              <Link href="/shows" className="btn btn--gold">
                Ver fechas de gira
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
