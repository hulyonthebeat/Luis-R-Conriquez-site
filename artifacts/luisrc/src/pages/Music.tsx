import { Reveal } from "@/components/site/Reveal";
import { Img } from "@/components/site/Img";
import { StreamRow } from "@/components/site/StreamRow";
import { ReleaseCard } from "@/components/site/cards";
import { releases } from "@/data/content";
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
          <Reveal className="shead">
            <div>
              <span className="kicker-num">Catálogo</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                Lanzamientos
              </h2>
            </div>
          </Reveal>
          <Reveal className="grid-4">
            {releases.map((r) => (
              <ReleaseCard key={r.id} release={r} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
