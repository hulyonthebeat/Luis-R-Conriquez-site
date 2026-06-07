import { Link } from "wouter";
import { Reveal } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";
import {
  BandHead,
  DiscCard,
  ShowRow,
  AwardCard,
  GalleryTile,
} from "@/components/site/cards";
import { releases, shows, awards, gallery, media, heroVideo } from "@/data/content";
import { mediaUrl } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO = the latest video, sole focal point */}
      <section className="hero hero--video">
        <img
          className="hero-video-poster"
          src={mediaUrl(media.merchFeat)}
          alt=""
          aria-hidden="true"
        />
        <iframe
          className="hero-video-frame"
          src={`https://www.youtube-nocookie.com/embed/${heroVideo.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideo.youtubeId}&playsinline=1&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3`}
          title={`${heroVideo.title} — ${heroVideo.tag}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder={0}
        />
      </section>

      {/* MÚSICA */}
      <section className="section section--tight" id="musica">
        <div className="wrap">
          <BandHead title="Música de la buena" sub="Discografía oficial" />
          <Reveal className="disc-grid">
            {releases.slice(0, 6).map((r) => (
              <DiscCard key={r.id} release={r} />
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
        <div className="wrap">
          <BandHead title="Shows" sub="Gira 2026" />
          <Reveal>
            <div>
              {shows.slice(0, 5).map((s) => (
                <ShowRow key={s.date + s.city} show={s} />
              ))}
            </div>
          </Reveal>
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
