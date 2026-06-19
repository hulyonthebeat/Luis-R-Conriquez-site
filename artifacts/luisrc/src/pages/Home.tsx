import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";
import {
  BandHead,
  LatestHitCard,
  ShowRow,
  GalleryTile,
} from "@/components/site/cards";
import { AwardsCarousel } from "@/components/site/AwardsCarousel";
import { Icon } from "@/components/site/Icons";
import { releases, tours, awards, gallery, media, heroVideo, socials, navLinks, followLinks, site, platformUrls } from "@/data/content";
import { mediaUrl } from "@/lib/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";

const artistJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: site.name,
  url: "https://luisrconriquezofficial.com/",
  description: "El Rey de los Corridos Bélicos. Música regional mexicana y corridos bélicos.",
  image: "https://luisrconriquezofficial.com/opengraph.jpg",
  sameAs: [
    socials.find((s) => s.id === "instagram")!.url,
    socials.find((s) => s.id === "youtube")!.url,
    platformUrls.spotify,
    socials.find((s) => s.id === "tiktok")!.url,
    socials.find((s) => s.id === "x")!.url,
    platformUrls.apple,
  ],
});

const heroNav = navLinks.filter((n) => n.href !== "/");
const heroSocials = socials.slice(0, 6);

export default function Home() {
  usePageMeta(pageMeta["/"]);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  /* pause the hero video while it's scrolled out of view to keep scrolling smooth */
  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    /* React doesn't reliably reflect the `muted` attribute to the DOM property,
       and iOS Safari refuses to autoplay unless the element is actually muted at
       play() time — so enforce it imperatively before attempting playback. */
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");

    let playing = false;
    const tryPlay = () => {
      v.muted = true;
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          playing = true;
        }).catch(() => {
          playing = false;
        });
      }
    };
    tryPlay();

    /* Mobile browsers (iOS Low Power Mode, Android Data Saver) block programmatic
       autoplay until the first user interaction — retry play() on the first gesture. */
    const onGesture = () => {
      if (playing) return;
      tryPlay();
    };
    const gestures = ["touchstart", "pointerdown", "click", "scroll", "keydown"] as const;
    gestures.forEach((g) =>
      window.addEventListener(g, onGesture, { passive: true }),
    );

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else {
          v.pause();
          playing = false;
        }
      },
      { threshold: 0.05 },
    );
    io.observe(v);

    return () => {
      io.disconnect();
      gestures.forEach((g) => window.removeEventListener(g, onGesture));
    };
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: artistJsonLd }} />
      {/* HERO = the latest video, sole focal point */}
      <section className="hero hero--video">
        <video
          ref={heroVideoRef}
          className="hero-video-frame"
          src={mediaUrl(heroVideo.file)}
          poster={mediaUrl(heroVideo.poster)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
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

          <h1 className="hero-h1">Luis R Conriquez — Sitio Oficial</h1>

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

      {/* SHOWS */}
      <section className="section section--tight" id="shows">
        <div className="wrap wrap--wide">
          <BandHead title="Shows" />
          {tours.length === 0 ? (
            <Reveal>
              <p className="lede" style={{ textAlign: "center" }}>
                Próximamente nuevas fechas.
              </p>
            </Reveal>
          ) : (
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
          )}
          <Reveal>
            <div style={{ textAlign: "center", marginTop: "clamp(36px,4vw,56px)" }}>
              <Link href="/shows" className="btn btn--gold btn--lg">
                Todas las fechas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NUEVO ÁLBUM */}
      <section className="section section--tight" id="muchacho-alegre">
        <div className="wrap wrap--wide">
          <Reveal className="album-card">
            <div className="album-card__head">
              <span className="album-card__eyebrow">Nuevo Álbum</span>
              <h2 className="album-card__title chrome">Muchacho Alegre</h2>
              <p className="album-card__date">Gran Estreno 10 de Julio</p>
            </div>
            <figure className="album-card__art">
              <img
                src={mediaUrl("album-muchacho-alegre.jpg")}
                alt="Muchacho Alegre — nuevo álbum de Luis R Conriquez"
                loading="lazy"
              />
            </figure>
          </Reveal>
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
            <div className="music-follow">
              {followLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.url}
                  className="social"
                  aria-label={l.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon id={l.id} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RECONOCIMIENTOS */}
      <section className="section section--tight" id="reconocimientos">
        <div className="wrap">
          <BandHead title="Reconocimientos" sub="Premios & prensa" />
          <Reveal>
            <AwardsCarousel awards={awards} />
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
