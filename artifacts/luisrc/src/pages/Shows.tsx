import { Reveal } from "@/components/site/Reveal";
import { ShowRow } from "@/components/site/cards";
import { tours, shows, site } from "@/data/content";

const eventsJsonLd = JSON.stringify(
  shows.map((s) => ({
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: `Luis R Conriquez en ${s.city}`,
    startDate: s.date,
    location: {
      "@type": "Place",
      name: s.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: s.city,
        addressCountry: s.country,
      },
    },
    performer: {
      "@type": "MusicGroup",
      name: "Luis R Conriquez",
    },
    offers: {
      "@type": "Offer",
      url: s.ticket,
      availability: s.status === "soldout"
        ? "https://schema.org/SoldOut"
        : s.status === "few"
          ? "https://schema.org/LimitedAvailability"
          : "https://schema.org/InStock",
    },
  }))
);

const requestMailto = `mailto:${site.booking}?subject=${encodeURIComponent(
  "Solicitud de show — Luis R Conriquez",
)}&body=${encodeURIComponent(
  "Hola, me gustaría ver a Luis R Conriquez cerca de mí.\n\nCiudad / país:\nNombre:\n",
)}`;

export default function Shows() {
  const cities = new Set(shows.map((s) => s.city)).size;
  const countries = new Set(shows.map((s) => s.country)).size;

  return (
    <>
      {shows.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: eventsJsonLd }} />
      )}
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
              El convoy bélico cruza fronteras. Consigue tus boletos oficiales
              antes de que se agoten.
            </p>
          </Reveal>
          {shows.length > 0 && (
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
          )}
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap wrap--wide tours-grid">
          {tours.length === 0 ? (
            <Reveal className="tour-block">
              <p className="lede">
                Próximamente anunciaremos nuevas fechas. Vuelve pronto para no
                perderte al convoy bélico.
              </p>
            </Reveal>
          ) : (
            tours.map((tour) => (
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
            ))
          )}
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="show-request">
            <span className="eyebrow">¿No ves tu ciudad?</span>
            <h2>Pide un show cerca de ti</h2>
            <p>
              Cuéntanos dónde quieres ver al convoy bélico y te avisaremos en
              cuanto haya una fecha cerca de ti.
            </p>
            <a className="btn btn--gold btn--lg" href={requestMailto}>
              Solicitar un show
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
