import { Icon } from "@/components/site/Icons";
import { platforms, platformLabels } from "@/data/content";

export function StreamRow() {
  return (
    <div className="streams">
      {platforms.map((p) => (
        <a key={p} className="stream" href="#" aria-label={platformLabels[p]}>
          <Icon id={p} />
          <span>{platformLabels[p]}</span>
        </a>
      ))}
    </div>
  );
}
