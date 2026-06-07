import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { site, stats, press, awards, releases, shows, merch, streaming } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiSpotify, SiApple, SiYoutube } from "react-icons/si";
import { PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

export default function Home() {
  const base = import.meta.env.BASE_URL;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const featuredRelease = releases.find(r => r.title === "Corridos Bélicos, Vol. IV");

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${base}media/portrait-throne.jpg`} 
            alt="Luis R Conriquez on Throne" 
            className="w-full h-full object-cover object-center opacity-70 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 uppercase tracking-tighter mb-4 drop-shadow-2xl font-serif"
          >
            {site.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-3xl font-serif text-white/80 uppercase tracking-[0.4em]"
          >
            {site.tagline}
          </motion.p>
        </div>
      </section>

      {/* 2. Featured Release Spotlight */}
      {featuredRelease && (
        <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${base}media/smoke-texture.jpg)` }} />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square w-full max-w-md mx-auto"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full mix-blend-screen" />
                <img src={`${base}media/${featuredRelease.cover}`} alt={featuredRelease.title} className="relative z-10 w-full h-full object-cover shadow-2xl border border-white/10" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <h3 className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-bold font-sans">Nuevo Lanzamiento</h3>
                <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-widest mb-6 leading-none text-white">{featuredRelease.title}</h2>
                <p className="text-white/60 text-lg mb-10 max-w-lg font-serif">{featuredRelease.copy}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-widest" asChild>
                    <a href={streaming.spotify} target="_blank" rel="noopener noreferrer"><SiSpotify className="mr-2" /> Spotify</a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-widest" asChild>
                    <a href={streaming.apple} target="_blank" rel="noopener noreferrer"><SiApple className="mr-2" /> Apple</a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-widest" asChild>
                    <a href={streaming.youtube} target="_blank" rel="noopener noreferrer"><SiYoutube className="mr-2" /> YouTube</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Featured Video Moment */}
      <section className="py-32 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white uppercase tracking-[0.2em] mb-4">Visuales</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video w-full rounded-sm overflow-hidden border border-white/10 group cursor-pointer"
          >
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" aria-label="Reproducir video JGL" className="absolute inset-0 w-full h-full z-10 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors cursor-pointer">
                  <img src={`${base}media/live-mic-red.jpg`} alt="JGL Video" className="absolute inset-0 w-full h-full object-cover -z-10 mix-blend-luminosity opacity-60 group-hover:scale-105 transition-transform duration-700" />
                  <PlayCircle className="w-24 h-24 text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-black border-white/10 p-0 overflow-hidden">
                <DialogTitle className="sr-only">JGL Video Oficial</DialogTitle>
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/Lq_1LuXMFbE?autoplay=1" 
                    title="JGL Video" 
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

      {/* 4. Tour Preview */}
      <section className="py-32 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white uppercase tracking-[0.2em] mb-4">Gira 2026</h2>
              <div className="w-16 h-1 bg-primary" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-0"
            >
              <Button variant="link" className="text-primary hover:text-white uppercase tracking-widest" asChild>
                <Link href="/shows">Ver todas las fechas →</Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="space-y-2">
            {shows.slice(0, 4).map((show, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-card/40 border border-white/5 hover:border-primary/40 transition-colors group"
              >
                <div className="mb-4 md:mb-0 flex gap-8 items-center">
                  <div className="text-primary font-bold tracking-widest text-lg md:text-xl w-32">{show.date}</div>
                  <div>
                    <div className="text-xl md:text-2xl font-serif text-white group-hover:text-primary transition-colors">{show.city}</div>
                    <div className="text-sm text-white/50">{show.venue}</div>
                  </div>
                </div>
                {show.status === 'soldout' ? (
                  <Button variant="outline" disabled className="w-full md:w-auto uppercase tracking-widest">
                    Agotado
                  </Button>
                ) : (
                  <Button className="w-full md:w-auto uppercase tracking-widest" asChild>
                    <a href={show.ticket} target="_blank" rel="noopener noreferrer">Boletos</a>
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Music Highlights & Merch Teaser */}
      <section className="py-32 bg-black border-t border-white/5 relative">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${base}media/texture-smoke.jpg)` }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-24">
            {/* Music */}
            <div>
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-serif text-2xl font-bold text-white uppercase tracking-widest">Esenciales</h2>
                <Link href="/musica" className="text-primary text-xs uppercase tracking-widest hover:text-white transition-colors">Discografía →</Link>
              </div>
              <div className="space-y-6">
                {releases.slice(1, 4).map((rel, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors flex items-center justify-center">
                      <PlayCircle className="text-white/50 group-hover:text-primary w-6 h-6 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white group-hover:text-primary transition-colors">{rel.title}</h4>
                      <div className="text-xs text-white/40 uppercase tracking-widest font-sans">{rel.type} · {rel.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Merch */}
            <div>
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-serif text-2xl font-bold text-white uppercase tracking-widest">Store</h2>
                <Link href="/merch" className="text-primary text-xs uppercase tracking-widest hover:text-white transition-colors">Ver todo →</Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {merch.slice(0, 2).map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="group"
                  >
                    <Link href="/merch" className="block">
                      <div className="aspect-[3/4] bg-card/30 border border-white/5 group-hover:border-primary/30 transition-colors p-4 relative mb-4">
                        <img src={`${base}media/${item.image}`} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <h4 className="text-sm font-bold text-white/90 mb-1">{item.name}</h4>
                      <p className="text-primary text-xs tracking-widest uppercase">${item.price} USD</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BTS / Gallery Moment */}
      <section className="py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-0">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-6"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white uppercase tracking-[0.2em] mb-4">Detrás del Bélico</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>
          <div className="flex flex-col md:flex-row w-full h-[60vh]">
            <div className="flex-1 relative group overflow-hidden border-r border-b md:border-b-0 border-white/10">
              <img src={`${base}media/backstage-beer.jpg`} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="BTS" />
            </div>
            <div className="flex-1 relative group overflow-hidden border-r border-b md:border-b-0 border-white/10">
              <img src={`${base}media/stage-duo-night.jpg`} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="BTS" />
            </div>
            <div className="flex-1 relative group overflow-hidden border-b md:border-b-0 border-white/10">
              <img src={`${base}media/crowd.jpg`} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="BTS" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Status Section (Stats, Press, Awards) */}
      <section className="py-32 bg-black border-t border-white/5 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-serif font-black text-primary mb-4 drop-shadow-md">{stat.number}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Prensa</h3>
              {press.map((p, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-primary/60 pl-6 py-2"
                >
                  <p className="font-serif text-lg text-white/80 italic leading-snug mb-3">"{p.quote}"</p>
                  <cite className="text-xs text-primary uppercase tracking-widest not-italic font-bold">{p.source}</cite>
                </motion.blockquote>
              ))}
            </div>
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Reconocimientos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {awards.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-white/5 bg-white/[0.01] p-6 text-center hover:border-primary/40 transition-colors"
                  >
                    <div className="text-3xl font-serif font-black text-primary mb-3">{a.year}</div>
                    <div className="text-white font-bold uppercase tracking-widest text-xs mb-2 leading-tight">{a.title}</div>
                    <div className="text-white/40 text-xs tracking-wider">{a.detail}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Newsletter Signup */}
      <section className="py-32 bg-background relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-black/50 backdrop-blur-md p-12 md:p-20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            {!subscribed ? (
              <>
                <h2 className="font-serif text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">El Cartel</h2>
                <p className="text-white/60 mb-10 text-sm md:text-base uppercase tracking-widest font-sans max-w-lg mx-auto">
                  Únete para recibir accesos exclusivos, mercancía secreta y noticias antes que nadie.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    required 
                    placeholder="TU CORREO ELECTRÓNICO" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/30 rounded-none h-12 uppercase tracking-widest text-xs focus-visible:ring-primary focus-visible:border-primary"
                  />
                  <Button type="submit" className="h-12 rounded-none px-8 uppercase tracking-widest font-bold bg-primary text-black hover:bg-white hover:text-black">
                    Entrar
                  </Button>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10"
              >
                <h2 className="font-serif text-3xl font-black text-primary uppercase tracking-widest mb-4">Bienvenido al Cartel</h2>
                <p className="text-white/70 uppercase tracking-widest text-sm">Tu acceso ha sido confirmado.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
