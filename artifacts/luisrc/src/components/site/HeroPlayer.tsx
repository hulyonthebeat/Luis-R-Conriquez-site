import { useState } from "react";
import { Icon } from "@/components/site/Icons";
import { heroVideo } from "@/data/content";

export function HeroPlayer() {
  const [playing, setPlaying] = useState(false);
  const v = heroVideo;
  return (
    <div
      className="hero-player"
      style={{ cursor: playing ? "default" : "pointer" }}
      onClick={() => setPlaying(true)}
    >
      <img
        className="hero-poster"
        alt={`${v.title} — ${v.tag}`}
        loading="eager"
        src={v.poster}
        onError={(e) => {
          const img = e.currentTarget;
          img.onerror = null;
          img.src = v.posterFallback;
        }}
      />
      <div className="pscrim" />
      {!playing && (
        <>
          <div className="hero-play">
            <span>
              <Icon id="play" />
            </span>
          </div>
          <div className="hero-pmeta">
            <span className="tag">{v.tag}</span>
            <h2>{v.title}</h2>
          </div>
        </>
      )}
      {playing && (
        <iframe
          title={`${v.title} — ${v.tag}`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
        />
      )}
    </div>
  );
}
