import { Reveal } from "@/components/site/Reveal";
import { ShowRow } from "@/components/site/cards";
import { tours, shows } from "@/data/content";

export default function Shows() {
  const cities = new Set(shows.map((s) => s.city)).size;
  const countries = new Set(shows.map((s) => s.country)).size;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">En vivo · 2026</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display h-xl chrome">
              Fechas
              <br />
              de Gira
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              El convoy bélico recorre México y Europa. Consigue tus boletos
              oficiales antes de que se agoten.
            </p>
          </Reveal>
          <Reveal className="meta-line" delay={0.15}>
            <div className="m">
              <span className="v chrome">{shows.length}</span>
              <span className="k">Fechas</span>
            </div>
            <div className="m">
              <span className="v chrome">{cities}</span>
              <span className="k">Ciudades</span>
            </div>
            <div className="m">
              <span className="v gold-text">{countries}</span>
              <span className="k">Países</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--wide tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-block">
              <Reveal className="tour-head">
                <span className="eyebrow">{tour.eyebrow}</span>
                <h2>{tour.name}</h2>
              </Reveal>
              <div>
                {tour.shows.map((s, i) => (
                  <ShowRow key={`${tour.id}-${s.date}-${i}`} show={s} withYear />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
