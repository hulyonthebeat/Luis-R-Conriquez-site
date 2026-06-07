import { videos } from "@/data/content";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

export default function Videos() {
  const base = import.meta.env.BASE_URL;
  
  const featuredVideo = videos.find(v => v.youtubeId) || videos[0];
  const gridVideos = videos.filter(v => v.title !== featuredVideo.title);

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Featured Video Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${base}media/smoke-texture.jpg)` }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white uppercase tracking-[0.1em] mb-4">Videos</h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" aria-label={`Reproducir ${featuredVideo.title}`} className="relative aspect-video w-full rounded-sm overflow-hidden border border-white/10 group cursor-pointer shadow-2xl block">
                  <img src={`${base}media/${featuredVideo.thumb}`} alt={featuredVideo.title} className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <PlayCircle className="w-24 h-24 text-primary opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-2xl mb-6" />
                    <div className="text-center">
                      <h2 className="font-serif text-3xl md:text-5xl font-bold text-white uppercase tracking-widest drop-shadow-lg mb-2">{featuredVideo.title}</h2>
                      <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase">{featuredVideo.meta} · {featuredVideo.views}</p>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl bg-black border-white/10 p-0 overflow-hidden">
                <DialogTitle className="sr-only">{featuredVideo.title}</DialogTitle>
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1`} 
                    title={featuredVideo.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                  />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Grid of Remaining Videos */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
            {gridVideos.map((vid, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" aria-label={`Reproducir ${vid.title}`} className="aspect-video w-full bg-card rounded-sm overflow-hidden border border-white/10 relative mb-6 cursor-pointer block">
                      <img src={`${base}media/${vid.thumb}`} alt={vid.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                          <PlayCircle className="w-8 h-8 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 text-[10px] font-sans text-white uppercase tracking-widest border border-white/10">
                        {vid.duration}
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-black border-white/10 p-0 overflow-hidden">
                    <DialogTitle className="sr-only">{vid.title}</DialogTitle>
                    <div className="aspect-video w-full">
                      {vid.youtubeId ? (
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={`https://www.youtube.com/embed/${vid.youtubeId}?autoplay=1`} 
                          title={vid.title} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-white/50 uppercase tracking-widest">
                          Video No Disponible
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
                
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{vid.title}</h3>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-sans">{vid.meta}</p>
                  </div>
                  <div className="text-xs font-bold text-primary tracking-widest font-sans">
                    {vid.views}
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
