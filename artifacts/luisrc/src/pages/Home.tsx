import { motion } from "framer-motion";
import { site, stats, press, awards } from "@/data/content";

export default function Home() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="w-full">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${base}media/portrait-throne.jpg`} 
            alt="Luis R Conriquez on Throne" 
            className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 uppercase tracking-tighter mb-4 drop-shadow-2xl"
          >
            {site.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-serif text-white/80 uppercase tracking-[0.3em]"
          >
            {site.tagline}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-white/5 relative">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-white/50 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url(${base}media/texture-smoke.jpg)` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-primary uppercase tracking-[0.25em] mb-16">
            Prensa
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {press.map((p, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-primary/60 pl-6 py-2"
              >
                <p className="font-serif text-xl md:text-2xl text-white/90 italic leading-snug mb-3">
                  "{p.quote}"
                </p>
                <cite className="text-sm text-primary uppercase tracking-widest not-italic">
                  {p.source}
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-primary uppercase tracking-[0.25em] mb-16">
            Reconocimientos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 bg-white/[0.02] p-8 text-center hover:border-primary/40 transition-colors"
              >
                <div className="text-5xl font-serif font-bold text-primary mb-4">{a.year}</div>
                <div className="text-white font-medium uppercase tracking-widest text-sm mb-2">{a.title}</div>
                <div className="text-white/50 text-sm">{a.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
