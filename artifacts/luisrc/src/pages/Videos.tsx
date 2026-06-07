import { Reveal } from "@/components/site/Reveal";
import { FeaturedVideo } from "@/components/site/FeaturedVideo";
import { VideoCard } from "@/components/site/cards";
import { videos } from "@/data/content";

export default function Videos() {
  const feat = videos.find((v) => v.featured) ?? videos[0];
  const rest = videos.filter((v) => !v.featured);
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Visuales oficiales</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display h-xl chrome">Videos</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              Videos oficiales, visualizers y momentos en vivo. El mundo de Luis R
              Conriquez en movimiento.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <FeaturedVideo video={feat} />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal className="shead">
            <div>
              <span className="kicker-num">Catálogo</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                Todos los videos
              </h2>
            </div>
          </Reveal>
          <Reveal className="grid-3">
            {rest.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
