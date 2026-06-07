import { useState } from "react";
import { Icon } from "@/components/site/Icons";
import { Img } from "@/components/site/Img";
import { mediaUrl } from "@/lib/site";
import type { Video } from "@/data/content";

export function FeaturedVideo({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const canPlay = Boolean(video.youtubeId);
  return (
    <div
      className="vfeat panel"
      style={{ cursor: canPlay && !playing ? "pointer" : "default" }}
      onClick={() => canPlay && setPlaying(true)}
    >
      <Img label={video.title} src={mediaUrl(video.thumb)} eager />
      {!playing && (
        <div className="vfeat-overlay">
          <span className="tag">
            {video.meta} · {video.views} vistas
          </span>
          <div className="play-btn">
            <Icon id="play" />
          </div>
          <div className="vfeat-meta">
            <h3>{video.title}</h3>
            <span className="tag">{video.duration}</span>
          </div>
        </div>
      )}
      {playing && video.youtubeId && (
        <iframe
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
        />
      )}
    </div>
  );
}
