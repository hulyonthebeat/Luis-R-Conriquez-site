import { Icon } from "@/components/site/Icons";
import { platforms, platformLabels, platformUrls } from "@/data/content";

export function StreamRow() {
  return (
    <div className="streams">
      {platforms.map((p) => (
        <a
          key={p}
          className="stream"
          href={platformUrls[p]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platformLabels[p]}
        >
          <Icon id={p} />
          <span>{platformLabels[p]}</span>
        </a>
      ))}
    </div>
  );
}
