import { Reveal } from "@/components/site/Reveal";
import { MerchCard } from "@/components/site/cards";
import { merch, media } from "@/data/content";
import { mediaUrl } from "@/lib/site";

function scrollToGrid(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Merch() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Tienda oficial</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display h-xl chrome">Merch</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              Piezas oficiales de la marca Luis R Conriquez. Ediciones limitadas, merch de
              gira y coleccionables.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="merch-feat panel">
            <img className="bg" src={mediaUrl(media.merchFeat)} alt="Campaña Bélico Tour '26" />
            <div className="scrim" />
            <div className="c">
              <span className="eyebrow">Drop destacado</span>
              <h2>
                Bélico
                <br />
                Tour '26
              </h2>
              <p className="lede">
                La colección oficial de gira. Disponible por tiempo limitado mientras dure
                la existencia.
              </p>
              <a
                href="#grid"
                className="btn btn--gold btn--lg"
                style={{ marginTop: 24 }}
                onClick={scrollToGrid}
              >
                Ver colección
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" id="grid">
        <div className="wrap">
          <Reveal className="shead">
            <div>
              <span className="kicker-num">Colección</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                Productos
              </h2>
            </div>
          </Reveal>
          <Reveal className="grid-4">
            {merch.map((m) => (
              <MerchCard key={m.id} item={m} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="shop-banner panel">
            <div>
              <span className="eyebrow">Tienda completa</span>
              <h3 style={{ marginTop: 12 }}>Explora el catálogo completo</h3>
            </div>
            <a href="#" className="btn btn--primary btn--lg">
              Ir a la tienda oficial
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
