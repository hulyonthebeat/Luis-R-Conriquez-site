import { Icon } from "@/components/site/Icons";
import { Img } from "@/components/site/Img";
import { Reveal } from "@/components/site/Reveal";
import { mediaUrl } from "@/lib/site";
import {
  showStatus,
  fmtDate,
  platformUrls,
  type Release,
  type Show,
  type Merch,
  type GalleryItem,
} from "@/data/content";

export function BandHead({
  title,
  sub,
  gold,
}: {
  title: string;
  sub?: string;
  gold?: boolean;
}) {
  return (
    <Reveal className={`band-head${gold ? " band-head--gold" : ""}`}>
      <h2>{title}</h2>
      {sub && <div className="sub">{sub}</div>}
    </Reveal>
  );
}

export function LatestHitCard({ release }: { release: Release }) {
  return (
    <div className="lh-card">
      <div className="cover">
        <Img label={release.title} src={mediaUrl(release.cover)} />
      </div>
      <h3 className="lh-name">{release.title}</h3>
      <span className="lh-meta">
        {release.year} · {release.type}
      </span>
      <a
        href={release.link ?? platformUrls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="lh-listen"
        aria-label={`Escuchar ahora: ${release.title}`}
      >
        Escuchar ahora
      </a>
    </div>
  );
}

export function ShowRow({ show, withYear }: { show: Show; withYear?: boolean }) {
  const d = fmtDate(show.date);
  const st = showStatus[show.status];
  return (
    <div className="show-row">
      <div className="show-date">
        <span className="d">{d.day}</span>
        <span className="m">{d.mon}</span>
      </div>
      <div className="show-where">
        <div className="city">{show.city}</div>
        <div className="venue">
          {show.venue} · {d.dow}
          {withYear ? ` · ${d.year}` : ""}
          {show.note ? ` · ${show.note}` : ""}
        </div>
      </div>
      <a
        href={show.ticket}
        className={`btn ${st.cls} btn--sm`}
        {...(show.ticket.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {st.label}
      </a>
    </div>
  );
}

export function MerchCard({ item }: { item: Merch }) {
  return (
    <div className="merch-card">
      <div className="ph">
        <Img label={item.name} src={mediaUrl(item.img)} />
        <span className="price">{item.price}</span>
        <a href="#" className="btn btn--primary btn--sm btn--block add">
          Añadir
        </a>
      </div>
      <div className="nm">
        <h4>{item.name}</h4>
        <span className="tag">{item.tag}</span>
      </div>
    </div>
  );
}

export function GalleryTile({ item }: { item: GalleryItem }) {
  return (
    <div className="bts-cell">
      <img className="bts-img" src={mediaUrl(item.img)} alt={item.label} loading="lazy" />
      <div className="lbl">
        <span className="tag">{item.label}</span>
      </div>
    </div>
  );
}
