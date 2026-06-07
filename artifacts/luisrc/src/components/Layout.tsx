import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { SiSpotify, SiYoutube, SiInstagram, SiTiktok, SiX } from "react-icons/si";
import { site, socials, legalLinks } from "@/data/content";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const socialIcons: Record<string, typeof SiInstagram> = {
  Instagram: SiInstagram,
  YouTube: SiYoutube,
  Spotify: SiSpotify,
  TikTok: SiTiktok,
  X: SiX,
};

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans relative">
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-gradient-to-b from-black/80 to-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="font-serif font-black text-2xl tracking-[0.2em] text-white hover:text-primary transition-colors uppercase group relative">
            <span className="relative z-10">LRC</span>
            <span className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10 font-sans font-medium text-xs tracking-[0.15em] uppercase">
            {[
              { href: "/musica", label: "Música" },
              { href: "/videos", label: "Videos" },
              { href: "/shows", label: "Gira" },
              { href: "/merch", label: "Merch" },
              { href: "/acerca", label: "Acerca" }
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`relative py-2 transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-white/70"}`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 w-full h-[1px] bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif uppercase tracking-widest text-center mt-12">
              <Link href="/musica" className="hover:text-primary">Música</Link>
              <Link href="/videos" className="hover:text-primary">Videos</Link>
              <Link href="/shows" className="hover:text-primary">Gira</Link>
              <Link href="/merch" className="hover:text-primary">Merch</Link>
              <Link href="/acerca" className="hover:text-primary">Acerca</Link>
            </div>
            
            <div className="flex justify-center gap-6 mt-16 text-white/50">
               {socials.map((s) => {
                const Icon = socialIcons[s.label] ?? SiX;
                return (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:text-primary"><Icon size={24} /></a>
                )
               })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-black pt-32 pb-16 relative overflow-hidden border-t border-white/5 mt-auto">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}media/smoke-texture.jpg)`, backgroundSize: 'cover' }}></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-serif font-black text-4xl text-white uppercase tracking-[0.1em] mb-4">Luis R<br/><span className="text-primary">Conriquez</span></h3>
              <p className="text-white/40 text-sm tracking-widest uppercase max-w-xs mb-8">{site.tagline}</p>
              
              <div className="flex gap-4 mb-10">
                {socials.map((s) => {
                  const Icon = socialIcons[s.label] ?? SiX;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <h4 className="text-white font-serif tracking-[0.2em] uppercase text-xs mb-6 opacity-50">Explorar</h4>
                <ul className="space-y-4 text-sm font-sans tracking-wider text-white/70 uppercase">
                  <li><Link href="/musica" className="hover:text-primary transition-colors">Música</Link></li>
                  <li><Link href="/videos" className="hover:text-primary transition-colors">Videos</Link></li>
                  <li><Link href="/shows" className="hover:text-primary transition-colors">Gira</Link></li>
                  <li><Link href="/merch" className="hover:text-primary transition-colors">Merch</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-serif tracking-[0.2em] uppercase text-xs mb-6 opacity-50">Contacto</h4>
                <ul className="space-y-6 text-sm font-sans tracking-wider text-white/70">
                  <li>
                    <div className="text-[10px] text-primary mb-1 uppercase">Management</div>
                    <a href={`mailto:${site.management}`} className="hover:text-white transition-colors block lowercase">{site.management}</a>
                  </li>
                  <li>
                    <div className="text-[10px] text-primary mb-1 uppercase">Booking</div>
                    <a href={`mailto:${site.booking}`} className="hover:text-white transition-colors block lowercase">{site.booking}</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-serif tracking-[0.2em] uppercase text-xs mb-6 opacity-50">Label</h4>
                <p className="text-sm font-sans tracking-wider text-white/70 uppercase">{site.label}</p>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-sans">
            <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href={legalLinks.terms} className="hover:text-primary transition-colors">Términos</a>
              <a href={legalLinks.privacy} className="hover:text-primary transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}