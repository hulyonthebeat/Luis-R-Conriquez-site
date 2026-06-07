import { Link } from "wouter";
import { Reveal } from "@/components/site/Reveal";
import { Img } from "@/components/site/Img";
import { stats, timeline, media } from "@/data/content";
import { mediaUrl } from "@/lib/site";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="about-hero">
            <Reveal>
              <span className="eyebrow">Biografía oficial</span>
              <h1 className="display h-xl" style={{ marginTop: 18 }}>
                <span className="chrome">El Rey de los</span>
                <br />
                <span className="gold-text">Corridos Bélicos</span>
              </h1>
              <p className="lede" style={{ marginTop: 22 }}>
                De los ranchos de Sonora a los escenarios más grandes de Norteamérica. La
                historia de un sonido que se volvió movimiento.
              </p>
            </Reveal>
            <Reveal className="portrait" delay={0.1}>
              <Img label="Retrato editorial" src={mediaUrl(media.aboutPortrait)} eager />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="bio-block">
            <p>
              <strong>Luis R Conriquez</strong> nació y se forjó entre el polvo, el ganado
              y la música de banda del norte de México. Lo que empezó como corridos
              grabados en un teléfono se convirtió en uno de los fenómenos más poderosos
              del regional mexicano contemporáneo.
            </p>
            <p>
              Su sello es inconfundible: una voz grave y autoritaria, arreglos
              cinematográficos de tololoche y metales, y narrativas crudas que retratan el
              poder, la lealtad y la vida en la frontera. Bautizado por sus fans como{" "}
              <em>El Rey de los Corridos Bélicos</em>, redefinió el género para una
              generación que lo escucha en cada esquina del continente.
            </p>
            <p>
              Al frente de <strong>Kartel Music</strong>, no solo construyó una carrera —
              construyó una plataforma para toda una nueva ola de artistas. Hoy llena
              arenas en Estados Unidos y México, acumula miles de millones de
              reproducciones y mantiene intacto lo que lo hizo grande: la autenticidad.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="grid-4" >
            {stats.map((s) => (
              <div className="stat" key={s.l}>
                <div className="n chrome">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="shead">
            <div>
              <span className="kicker-num">Trayectoria</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                Hitos
              </h2>
            </div>
          </Reveal>
          <Reveal className="timeline">
            {timeline.map((r) => (
              <div className="tl-row" key={r.yr}>
                <div className="yr">{r.yr}</div>
                <div className="ev">
                  <h4>{r.t}</h4>
                  <p>{r.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="section-title">Esto apenas empieza</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div
              style={{
                justifyContent: "center",
                marginTop: 30,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <Link href="/musica" className="btn btn--primary btn--lg">
                Escuchar la música
              </Link>
              <Link href="/shows" className="btn btn--lg">
                Ver fechas de gira
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
