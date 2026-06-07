import { Reveal } from "@/components/site/Reveal";
import { Img } from "@/components/site/Img";
import { Icon } from "@/components/site/Icons";
import { StreamRow } from "@/components/site/StreamRow";
import { LatestHitCard } from "@/components/site/cards";
import { releases, platforms, platformLabels } from "@/data/content";
import { mediaUrl } from "@/lib/site";

export default function Music() {
  const featured = releases.find((r) => r.featured) ?? releases[0];
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Discografía oficial</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display h-xl chrome">Música</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              El catálogo completo de Luis R Conriquez. Cada lanzamiento, disponible en
              todas las plataformas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="release-hero panel">
            <div className="cover">
              <Img
                label="Portada · Corridos Bélicos Vol. IV"
                src={mediaUrl(featured.cover)}
                eager
              />
            </div>
            <div className="info">
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 6 }}>
                <span className="eyebrow">Nuevo álbum</span>
                <span className="tag">Álbum · 18 cortes · 2025</span>
              </div>
              <h2>
                Corridos Bélicos
                <br />
                <span className="gold-text">Vol. IV</span>
              </h2>
              <p className="lede">
                El nuevo capítulo. Dieciocho cortes grabados entre Hermosillo y Los Ángeles
                — el sonido más crudo y monumental hasta la fecha.
              </p>
              <div style={{ marginTop: 28 }}>
                <StreamRow />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <h2 className="lh-title">Reproduce los últimos éxitos</h2>
          </Reveal>
          <Reveal className="lh-grid">
            {releases.map((r) => (
              <LatestHitCard key={r.id} release={r} />
            ))}
          </Reveal>
          <Reveal className="lh-platforms">
            {platforms.map((p) => (
              <a key={p} className="lh-plat" href="#" aria-label={platformLabels[p]}>
                <Icon id={p} />
                <span>{platformLabels[p]}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
