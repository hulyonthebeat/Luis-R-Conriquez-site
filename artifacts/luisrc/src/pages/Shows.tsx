import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ShowRow } from "@/components/site/cards";
import { HashLink } from "@/components/site/HashLink";
import { shows, type Show } from "@/data/content";

type Filter = "all" | "us" | "mx";

const isMX = (s: Show) => /MX|México|Guadalajara|Monterrey/.test(s.city);

const FILTERS: { f: Filter; label: string }[] = [
  { f: "all", label: "Todas" },
  { f: "us", label: "Estados Unidos" },
  { f: "mx", label: "México" },
];

export default function Shows() {
  const [filter, setFilter] = useState<Filter>("all");
  const rows = shows.filter((s) =>
    filter === "all" ? true : filter === "mx" ? isMX(s) : !isMX(s),
  );
  const cities = new Set(shows.map((s) => s.city)).size;

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
              El convoy bélico recorre Estados Unidos y México. Consigue tus boletos
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
              <span className="v gold-text">2</span>
              <span className="k">Países</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="shows-filter">
            {FILTERS.map(({ f, label }) => (
              <button
                key={f}
                className={`chip${filter === f ? " active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {label}
              </button>
            ))}
          </Reveal>

          {rows.length > 0 ? (
            <div>
              {rows.map((s) => (
                <ShowRow key={s.date + s.city} show={s} withYear />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h3>Sin fechas por ahora</h3>
              <p className="lede" style={{ marginInline: "auto" }}>
                No hay shows anunciados en esta región. Suscríbete para enterarte primero
                cuando se anuncien nuevas fechas.
              </p>
              <HashLink href="/#suscribete" className="btn btn--gold" style={{ marginTop: 26 }}>
                Avísame
              </HashLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
