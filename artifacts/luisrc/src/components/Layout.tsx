import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { Link, useLocation } from "wouter";
import Lenis from "lenis";
import { Icon } from "@/components/site/Icons";
import { Reveal } from "@/components/site/Reveal";
import { site, socials, navLinks, media } from "@/data/content";
import { mediaUrl } from "@/lib/site";

export function Layout({ children }: { children: ReactNode }) {
  const [location, navigate] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (!el) return;
    if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: 0 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* smooth scroll (Lenis) */
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* nav scrolled state */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setPastHero(window.scrollY > window.innerHeight - 90);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* expose the rotated paper textures as CSS vars (base-path-safe) so sections
     can alternate between them as you scroll */
  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--tex-1", `url("${mediaUrl("texture-bg-1.webp")}?v=3")`);
    root.setProperty("--tex-2", `url("${mediaUrl("texture-bg-2.webp")}?v=3")`);
    root.setProperty("--tex-3", `url("${mediaUrl("texture-bg-3.webp")}?v=3")`);
  }, []);

  /* body menu-open class */
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  /* scroll to top on route change (no hash) */
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  const handleNav = (href: string) => (e: MouseEvent) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.slice(2);
      if (location === "/") {
        scrollToHash(hash);
      } else {
        navigate("/");
        window.setTimeout(() => scrollToHash(hash), 120);
      }
    }
  };

  const navSocials = socials.slice(0, 4);

  return (
    <>
      <header
        className={`nav${scrolled ? " scrolled" : ""}${location === "/" && !pastHero ? " nav--home-top" : ""}`}
        id="siteNav"
        aria-hidden={location === "/" && !pastHero ? true : undefined}
      >
        <div className="wrap">
          <div className="nav-left">
            <button
              className="menu-btn"
              aria-label="Menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="burger">
                <span />
                <span />
                <span />
              </span>
              <span className="lbl">Menú</span>
            </button>
          </div>
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            Luis R Conriquez
            <small>Corridos Bélicos</small>
          </Link>
          <div className="nav-right">
            <div className="nav-social">
              {navSocials.map((s) => (
                <a key={s.id} href={s.url} aria-label={s.label}>
                  <Icon id={s.id} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu">
        <nav>
          {navLinks.map((n, i) => {
            const active =
              n.href === location || (n.href === "/" && location === "/");
            if (n.href.startsWith("/#")) {
              return (
                <a key={n.key} href={n.href} onClick={handleNav(n.href)} className={active ? "active" : ""}>
                  {n.label}
                  <span>0{i + 1}</span>
                </a>
              );
            }
            return (
              <Link
                key={n.key}
                href={n.href}
                onClick={handleNav(n.href)}
                className={active ? "active" : ""}
              >
                {n.label}
                <span>0{i + 1}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mm-foot">
          {socials.map((s) => (
            <a key={s.id} className="social" href={s.url} aria-label={s.label}>
              <Icon id={s.id} />
            </a>
          ))}
        </div>
      </div>

      <main>{children}</main>

      <Footer />
    </>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <Reveal as="div" className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-lockup">
              <div className="display chrome">
                Luis R
                <br />
                Conriquez
              </div>
              <img
                className="footer-kmusic"
                src={mediaUrl(media.kmusic)}
                alt="K Music"
                loading="lazy"
              />
            </div>
            <p className="lede" style={{ marginTop: 22, maxWidth: "34ch" }}>
              {site.tagline}. Sitio oficial — música, gira y la marca, directo desde la fuente.
            </p>
            <div className="socials" style={{ marginTop: 26 }}>
              {socials.map((s) => (
                <a key={s.id} className="social" href={s.url} aria-label={s.label}>
                  <Icon id={s.id} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Explorar</h4>
            <Link href="/musica">Música</Link>
            <Link href="/videos">Videos</Link>
            <Link href="/shows">Fechas de gira</Link>
            <Link href="/merch">Tienda oficial</Link>
            <Link href="/acerca">Biografía</Link>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href={`mailto:${site.email}`}>Management</a>
            <a href={`mailto:${site.booking}`}>Booking</a>
            <a href="#">Prensa</a>
            <a href="#">{site.label}</a>
          </div>
        </Reveal>
        <div className="footer-bottom">
          <span>
            © {year} {site.name} · {site.label}
          </span>
          <div className="legal">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
