import { releases, streaming } from "@/data/content";
import { motion } from "framer-motion";

export default function Music() {
  const base = import.meta.env.BASE_URL;
  
  return (
    <div className="w-full">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background mix-blend-multiply opacity-80" />
          <img 
            src={`${base}media/texture-smoke.jpg`} 
            alt="" 
            className="w-full h-full object-cover object-center opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white uppercase tracking-[0.1em] mb-4">Discografía</h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {releases.map((rel, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-square bg-secondary rounded-sm overflow-hidden mb-6 relative border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                  {rel.cover ? (
                    <img 
                      src={`${base}media/${rel.cover}`} 
                      alt={rel.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                    />
                  ) : (
                    <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      <img 
                        src={`${base}media/live-${(i % 3) + 1 > 1 ? '1' : 'mic-red'}.jpg`} 
                        alt="" 
                        className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <span className="font-serif text-2xl md:text-3xl text-white font-bold uppercase tracking-widest drop-shadow-lg">{rel.title}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <span className="text-white font-sans text-xs tracking-[0.2em] uppercase">Escuchar en</span>
                    <div className="flex gap-4">
                      <a href={streaming.spotify} target="_blank" rel="noopener noreferrer" aria-label={`Escuchar ${rel.title} en Spotify`} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.44 7.38 9.54 7.2 5.58 8.16c-.6.12-1.14-.24-1.26-.84-.12-.6.24-1.14.84-1.26 4.44-1.02 11.94-.84 16.2 1.38.54.3 0 .78 0 1.26-.12.48-.72.66-1.2.3z"/></svg>
                      </a>
                      <a href={streaming.apple} target="_blank" rel="noopener noreferrer" aria-label={`Escuchar ${rel.title} en Apple Music`} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.628-5.372-12-12-12zm4.331 16.892c-1.229 0-3.662-.751-6.104-3.193-2.441-2.441-3.193-4.874-3.193-6.104 0-.616.505-1.121 1.121-1.121.226 0 .432.067.607.182 1.314.856 2.053 2.148 2.053 3.327 0 .809-.344 1.408-.857 1.83l2.842 2.841c.421-.513 1.02-.857 1.83-.857 1.179 0 2.471.739 3.326 2.053.115.175.182.381.182.607 0 .615-.504 1.12-1.119 1.12z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{rel.title}</h3>
                  <div className="flex items-center justify-center gap-2 text-xs text-white/40 uppercase tracking-widest font-sans">
                    <span>{rel.type}</span>
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                    <span>{rel.year}</span>
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                    <span>{rel.tracks} tracks</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}