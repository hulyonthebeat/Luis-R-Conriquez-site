import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/site/Icons";
import { Img } from "@/components/site/Img";
import { mediaUrl } from "@/lib/site";
import type { Award } from "@/data/content";

export function AwardsCarousel({ awards }: { awards: Award[] }) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const n = awards.length;
  const go = (step: number) =>
    setState(([i]) => [(i + step + n) % n, step]);

  if (n === 0) return null;
  const award = awards[index % n];

  return (
    <div className="awards-carousel">
      <button
        className="ac-arrow ac-prev"
        onClick={() => go(-1)}
        aria-label="Reconocimiento anterior"
        type="button"
      >
        <Icon id="arrow" />
      </button>

      <div className="ac-stage">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={award.img}
            className="award"
            custom={dir}
            initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="frame">
              <Img label={award.title} src={mediaUrl(award.img)} eager />
            </div>
            <div className="yr">{award.year}</div>
            <h4>{award.title}</h4>
            <p>{award.detail}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className="ac-arrow ac-next"
        onClick={() => go(1)}
        aria-label="Siguiente reconocimiento"
        type="button"
      >
        <Icon id="arrow" />
      </button>

      <div className="ac-dots">
        {awards.map((a, i) => (
          <button
            key={a.img}
            className={`ac-dot${i === index ? " is-active" : ""}`}
            onClick={() => setState([i, i > index ? 1 : -1])}
            aria-label={`Ir al reconocimiento ${i + 1}`}
            aria-current={i === index}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
