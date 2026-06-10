import { Reveal } from "@/components/site/Reveal";
import { Img } from "@/components/site/Img";
import { Icon } from "@/components/site/Icons";
import { StreamRow } from "@/components/site/StreamRow";
import { LatestHitCard } from "@/components/site/cards";
import { releases, platforms, platformLabels, platformUrls } from "@/data/content";
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
                label={`Portada · ${featured.title}`}
                src={mediaUrl(featured.cover)}
                eager
              />
            </div>
            <div className="info">
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 6 }}>
                <span className="eyebrow">{featured.type === "Álbum" ? "Nuevo álbum" : "Nuevo sencillo"}</span>
                <span className="tag">
                  {featured.type === "Álbum"
                    ? `${featured.type} · ${featured.tracks} cortes · ${featured.year}`
                    : `${featured.type} · ${featured.year}`}
                </span>
              </div>
              <h2>
                <span className="gold-text">{featured.title}</span>
              </h2>
              {featured.copy && <p className="lede">{featured.copy}</p>}
              {featured.link && (
                <div style={{ marginTop: 24 }}>
                  <a
                    href={featured.link}
                    className="btn btn--gold btn--lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escuchar ahora
                  </a>
                </div>
              )}
              <div style={{ marginTop: 28 }}>
                <StreamRow />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--wide">
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
              <a
                key={p}
                className="lh-plat"
                href={platformUrls[p]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platformLabels[p]}
              >
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
