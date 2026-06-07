import { ReactNode } from "react";
import { Link } from "wouter";
import { SiSpotify, SiYoutube, SiInstagram, SiTiktok, SiX } from "react-icons/si";
import { site, socials } from "@/data/content";

const socialIcons: Record<string, typeof SiInstagram> = {
  Instagram: SiInstagram,
  YouTube: SiYoutube,
  Spotify: SiSpotify,
  TikTok: SiTiktok,
  X: SiX,
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-bold text-xl tracking-widest text-primary uppercase">
            LRC
          </Link>
          <nav className="hidden md:flex gap-6 font-medium text-sm tracking-wide">
            <Link href="/musica" className="hover:text-primary transition-colors">MÚSICA</Link>
            <Link href="/videos" className="hover:text-primary transition-colors">VIDEOS</Link>
            <Link href="/shows" className="hover:text-primary transition-colors">GIRA</Link>
            <Link href="/merch" className="hover:text-primary transition-colors">MERCH</Link>
            <Link href="/acerca" className="hover:text-primary transition-colors">ACERCA</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-16">
        {children}
      </main>
      <footer className="border-t border-white/5 bg-black py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 mb-10">
            {socials.map((s) => {
              const Icon = socialIcons[s.label] ?? SiX;
              return (
                <a
                  key={s.label}
                  href="#"
                  className="group flex items-center gap-3 text-white/60 hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                  <span className="text-sm tracking-widest uppercase">{s.handle}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-x-12 gap-y-3 mb-10 text-center">
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Management</div>
              <a href={`mailto:${site.management}`} className="text-sm text-primary hover:underline">
                {site.management}
              </a>
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Booking</div>
              <a href={`mailto:${site.booking}`} className="text-sm text-primary hover:underline">
                {site.booking}
              </a>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm font-medium tracking-widest uppercase">
            © 2026 {site.name}. {site.label}.
          </p>
        </div>
      </footer>
    </div>
  );
}
