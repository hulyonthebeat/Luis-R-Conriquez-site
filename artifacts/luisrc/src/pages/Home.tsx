import { Link } from "wouter";
import { Reveal } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";
import {
  BandHead,
  LatestHitCard,
  ShowRow,
  AwardCard,
  GalleryTile,
} from "@/components/site/cards";
import { Icon } from "@/components/site/Icons";
import { releases, tours, awards, gallery, media, heroVideo, socials, navLinks } from "@/data/content";
import { mediaUrl } from "@/lib/site";

const heroNav = navLinks.filter((n) => n.href !== "/");
const heroSocials = socials.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* HERO = the latest video, sole focal point */}
      <section className="hero hero--video">
        <video
          className="hero-video-frame"
          src={mediaUrl(heroVideo.file)}
          poster={mediaUrl(heroVideo.poster)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="hero-overlay">
          <div className="hero-corner">
            <Link href="/" className="hero-logo" aria-label="Luis R Conriquez — Inicio">
              <img src={mediaUrl(media.logo)} alt="Luis R Conriquez" />
            </Link>
            <div className="hero-socials">
              {heroSocials.map((s) => (
                <a key={s.id} href={s.url} aria-label={s.label} target="_blank" rel="noreferrer">
                  <Icon id={s.id} />
                </a>
              ))}
            </div>
          </div>

          <nav className="hero-nav" aria-label="Navegación principal">
            {heroNav.map((n) =>
              n.href.startsWith("/#") ? (
                <a key={n.key} href={n.href.slice(1)}>
                  {n.label}
                </a>
              ) : (
                <Link key={n.key} href={n.href}>
                  {n.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </section>

      {/* MÚSICA */}
      <section className="section section--tight" id="musica">
        <div className="wrap wrap--wide">
          <BandHead title="Música de la buena" gold />
          <Reveal className="lh-grid">
            {releases.slice(0, 4).map((r) => (
              <LatestHitCard key={r.id} release={r} />
            ))}
          </Reveal>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: "clamp(36px,4vw,56px)" }}>
              <Link href="/musica" className="btn btn--lg">
                Ver toda la música
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MERCH */}
      <section className="section" id="merch">
        <div className="wrap">
          <Reveal className="merch-band panel">
            <img className="bg" src={mediaUrl(media.homeMerchBand)} alt="Campaña merch" />
            <div className="scrim" />
            <div className="c">
              <div className="sub">La merch oficial</div>
              <h2>
                No te quedes
                <br />
                sin la tuya
              </h2>
              <p>Bélico Tour '26 — edición limitada.</p>
              <Link href="/merch" className="btn btn--gold btn--lg">
                Toda la merch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SHOWS */}
      <section className="section section--tight" id="shows">
        <div className="wrap wrap--wide">
          <BandHead title="Shows" sub={`${tours.length} giras · 2026`} />
          <div className="tours-grid">
          {tours.map((tour) => (
            <Reveal key={tour.id} className="tour-block">
              <div className="tour-head">
                <span className="eyebrow">{tour.eyebrow}</span>
                <h2>{tour.name}</h2>
              </div>
              <div>
                {tour.shows.slice(0, 3).map((s, i) => (
                  <ShowRow key={`${tour.id}-${s.date}-${i}`} show={s} />
                ))}
              </div>
            </Reveal>
          ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: "clamp(36px,4vw,56px)" }}>
              <Link href="/shows" className="btn btn--gold btn--lg">
                Todas las fechas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RECONOCIMIENTOS */}
      <section className="section section--tight" id="reconocimientos">
        <div className="wrap">
          <BandHead title="Reconocimientos" sub="Premios & prensa" />
          <Reveal className="awards">
            {awards.map((a) => (
              <AwardCard key={a.title} award={a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* BTS */}
      <section className="section section--tight" id="bts">
        <div className="wrap">
          <BandHead title="Behind the scenes" sub="Andamo' detrás de cámara" />
          <Reveal className="bts-grid">
            {gallery.map((g) => (
              <GalleryTile key={g.id} item={g} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* SUSCRÍBETE */}
      <section className="section section--tight" id="suscribete">
        <div className="wrap">
          <Reveal>
            <Newsletter />
          </Reveal>
        </div>
      </section>
    </>
  );
}
