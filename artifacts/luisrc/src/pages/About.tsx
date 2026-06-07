import { motion } from "framer-motion";
import { site } from "@/data/content";

export default function About() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="w-full bg-background overflow-hidden">
      {/* Hero / Title Section */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${base}media/texture-smoke.jpg)` }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-serif font-black text-white uppercase tracking-[0.1em] mb-6 leading-none">
                El <br/>
                <span className="text-primary">Rey</span><br/>
                Bélico
              </h1>
              <div className="w-24 h-1 bg-primary mb-8" />
              <p className="text-white/60 font-sans uppercase tracking-[0.2em] text-sm leading-loose max-w-md">
                De Caborca, Sonora para el mundo. El arquitecto del sonido que redefinió el regional mexicano.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img src={`${base}media/portrait-1.jpg`} alt="Luis R Conriquez" className="w-full h-full object-cover border border-white/10 grayscale opacity-90" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-black border border-primary/30 z-20 p-2 hidden md:block">
                <img src={`${base}media/stage.jpg`} alt="Stage" className="w-full h-full object-cover grayscale" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 bg-black border-y border-white/5 relative">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-white italic leading-tight"
          >
            "Mi música es la banda sonora de una generación que no pide permiso."
          </motion.blockquote>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-32">
            
            {/* Story Block 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 space-y-6 text-white/70 font-serif text-lg leading-relaxed text-justify"
              >
                <h3 className="text-2xl text-primary font-bold uppercase tracking-widest mb-8 text-left font-sans">El Origen</h3>
                <p>
                  Originario de Caborca, Sonora, Luis R Conriquez no encontró su camino en la música por casualidad, sino por destino. Trabajando en gasolineras y componiendo corridos en sus ratos libres, su narrativa visceral capturó la realidad cruda de las calles.
                </p>
                <p>
                  Sus primeras composiciones se viralizaron de boca en boca, marcando el inicio de un fenómeno que nadie vio venir. Su voz, áspera e inconfundible, se convirtió en el megáfono de historias de poder, lealtad y supervivencia.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 aspect-square border border-white/10 p-4 bg-white/[0.02]"
              >
                <img src={`${base}media/portrait-3.jpg`} className="w-full h-full object-cover grayscale opacity-80" alt="Origin" />
              </motion.div>
            </div>

            {/* Story Block 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] border border-white/10 p-4 bg-white/[0.02]"
              >
                <img src={`${base}media/bw-cobra-stage.jpg`} className="w-full h-full object-cover grayscale mix-blend-luminosity" alt="Kartel Music" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-white/70 font-serif text-lg leading-relaxed text-justify"
              >
                <h3 className="text-2xl text-primary font-bold uppercase tracking-widest mb-8 text-left font-sans">Kartel Music & Legado</h3>
                <p>
                  Bajo el cobijo de Kartel Music, el ascenso fue meteórico. Luis R estructuró lo que hoy conocemos como el "Corrido Bélico", un subgénero que fusiona la instrumentación tradicional con líricas de alto calibre y una estética urbana moderna.
                </p>
                <p>
                  Con miles de millones de reproducciones y arenas agotadas desde Los Ángeles hasta la Ciudad de México, su influencia trasciende la música. Es un ícono cultural, el referente indiscutible de una nueva era dorada del regional mexicano, forjada en oro, perseverancia y talento puro.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Roster / Identity Strip */}
      <section className="py-24 bg-black border-t border-white/5 flex flex-col items-center justify-center">
        <h2 className="font-serif text-4xl md:text-6xl font-black text-white/20 uppercase tracking-tighter mb-4 text-center">
          {site.name}
        </h2>
        <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">
          Label: {site.label}
        </p>
      </section>
    </div>
  );
}
