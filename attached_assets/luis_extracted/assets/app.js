/* ============================================================
   LUIS R CONRIQUEZ — Shared app behavior
   Nav + footer injection, icons, scroll reveals, renderers.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- Icons ---------------- */
  const I = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    play:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.5 17.3a.75.75 0 01-1 .25c-2.8-1.7-6.3-2.1-10.4-1.16a.75.75 0 11-.33-1.46c4.5-1 8.4-.55 11.5 1.37.36.22.47.69.23 1zm1.47-3.27a.94.94 0 01-1.29.31c-3.2-2-8.1-2.54-11.9-1.4a.94.94 0 11-.54-1.8c4.3-1.3 9.7-.7 13.4 1.6.44.27.58.85.33 1.29zm.13-3.4C15.8 8.2 8.9 7.97 5.2 9.1a1.12 1.12 0 11-.65-2.15C8.8 5.65 16.4 5.92 20.5 8.3a1.12 1.12 0 11-1.14 1.93z"/></svg>',
    apple: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 .4 2-.9 1.1-1.9.4-2.6.4-.7 0-1.4.7-2.4.7v-.1c.1 0 .1 0 0 0z"/><path d="M14.5 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 00-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 001 7.5C.5 9.4.5 12 .5 12s0 2.6.5 4.5a3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1c.5-1.9.5-4.5.5-4.5s0-2.6-.5-4.5zM9.7 15.5v-7l6 3.5-6 3.5z"/></svg>',
    amazon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.4 17.6c-2.3 1.7-5.6 2.6-8.5 2.6-4 0-7.6-1.5-10.3-4-.2-.2 0-.5.2-.3 2.9 1.7 6.5 2.7 10.2 2.7 2.6 0 5.4-.5 8-1.6.4-.2.7.3.4.6zM19.3 16.5c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.3-.9 3.4-.6 3.6-.3.2.3-.1 2.4-1.3 3.4-.2.2-.4.1-.3-.1.3-.7.9-2.2.7-2.6z"/><path d="M16.8 13.5V8.2c0-2.3-1.6-3.9-4.7-3.9-2.4 0-4.8 1-5.4 3.9l3.1.3c.1-.8.7-1.6 1.8-1.6 1.2 0 1.8.9 1.8 2v.6c-2.6 0-6.3.4-6.3 3.9 0 1.8 1.4 2.8 3.1 2.8 1.5 0 2.4-.4 3.4-1.4.3.5.5 1 1.4 1.7.2.1.4.1.6-.1l1.7-1.5c.2-.1.1-.4 0-.6-.5-.6-.6-.9-.6-2zm-3.6.3c-.5.9-1.3 1.4-2.2 1.4-1.1 0-1.7-.8-1.7-1.9 0-1.7 1.7-2.1 3.3-2.1v.4c0 .8 0 1.4-.3 2z"/></svg>',
    deezer: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.8 5.4h4.5v2.4h-4.5zM18.8 9.1h4.5v2.4h-4.5zM12.5 9.1H17v2.4h-4.5zM18.8 12.8h4.5v2.4h-4.5zM12.5 12.8H17v2.4h-4.5zM6.3 12.8h4.5v2.4H6.3zM18.8 16.5h4.5v2.4h-4.5zM12.5 16.5H17v2.4h-4.5zM6.3 16.5h4.5v2.4H6.3zM0 16.5h4.5v2.4H0z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2.2 1.6 3.7 3.8 3.9v2.6c-1.3.1-2.5-.3-3.8-1v5.6c0 3.6-2.6 6-5.8 6-2.9 0-5.2-2-5.2-5 0-3.2 2.6-5 5.6-4.7v2.7c-.4-.1-.9-.2-1.3-.2-1.3 0-2.2.9-2.2 2.2 0 1.3 1 2.2 2.3 2.2 1.5 0 2.4-1.1 2.4-2.9V3h3.2z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.4 7.3L22 22h-6l-4.7-6-5.3 6H3l6.9-7.8L2 2h6.2l4.2 5.6L18.2 2zm-2.1 18h1.6L7.9 3.7H6.2L16.1 20z"/></svg>',
  };
  window.ICON = I;

  const PLATFORM_LABEL = { spotify: "Spotify", apple: "Apple Music", youtube: "YouTube", amazon: "Amazon", deezer: "Deezer" };

  /* ---------------- Nav data ---------------- */
  const NAV = [
    { href: "index.html",         label: "Inicio",          key: "home" },
    { href: "music.html",         label: "Música",          key: "music" },
    { href: "videos.html",        label: "Videos",          key: "videos" },
    { href: "shows.html",         label: "Shows",           key: "shows" },
    { href: "merch.html",         label: "Merch",           key: "merch" },
    { href: "index.html#reconocimientos", label: "Reconocimientos", key: "recog" },
    { href: "index.html#bts",     label: "BTS",             key: "bts" },
    { href: "about.html",         label: "Bio",             key: "about" },
    { href: "index.html#suscribete", label: "Suscríbete",    key: "news" },
  ];

  function buildNav(active) {
    const mlinks = NAV.map((n, i) => `<a href="${n.href}" class="${n.key === active ? "active" : ""}">${n.label}<span>0${i + 1}</span></a>`).join("");
    const navSocials = (window.SOCIALS || []).slice(0,4).map(x => `<a href="${x.url}" aria-label="${x.label}">${I[x.id] || ""}</a>`).join("");
    return `
    <header class="nav" id="siteNav">
      <div class="wrap">
        <div class="nav-left">
          <button class="menu-btn" id="burger" aria-label="Menú"><span class="burger"><span></span><span></span><span></span></span><span class="lbl">Menú</span></button>
        </div>
        <a href="index.html" class="brand">Luis R Conriquez<small>Corridos Bélicos</small></a>
        <div class="nav-right">
          <div class="nav-social">${navSocials}</div>
          <a href="shows.html" class="btn btn--gold btn--sm">Boletos</a>
        </div>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu">
      <nav>${mlinks}</nav>
      <div class="mm-foot" id="mmSocials"></div>
    </div>`;
  }

  function buildFooter() {
    const s = window.SITE;
    const socials = (window.SOCIALS || []).map(x => `<a class="social" href="${x.url}" aria-label="${x.label}">${I[x.id] || ""}</a>`).join("");
    return `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="display chrome">Luis R<br>Conriquez</div>
            <p class="lede" style="margin-top:22px;max-width:34ch">${s.tagline}. Sitio oficial — música, gira y la marca, directo desde la fuente.</p>
            <div class="socials" style="margin-top:26px">${socials}</div>
          </div>
          <div class="footer-col">
            <h4>Explorar</h4>
            <a href="music.html">Música</a>
            <a href="videos.html">Videos</a>
            <a href="shows.html">Fechas de gira</a>
            <a href="merch.html">Tienda oficial</a>
            <a href="about.html">Biografía</a>
          </div>
          <div class="footer-col">
            <h4>Contacto</h4>
            <a href="mailto:${s.email}">Management</a>
            <a href="mailto:${s.booking}">Booking</a>
            <a href="#">Prensa</a>
            <a href="#">${s.label}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${s.name} · ${s.label}</span>
          <div class="legal">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>`;
  }

  /* ---------------- Streaming row ---------------- */
  window.streamRow = function (platforms, size) {
    return (platforms || window.PLATFORMS).map(p =>
      `<a class="stream ${size === "sm" ? "stream--sm" : ""}" href="#" aria-label="${PLATFORM_LABEL[p]}">${I[p] || ""}<span>${PLATFORM_LABEL[p]}</span></a>`
    ).join("");
  };

  /* ---------------- Date helpers ---------------- */
  const MES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  window.fmtDate = function (iso) {
    const d = new Date(iso + "T00:00:00");
    return { day: String(d.getDate()).padStart(2, "0"), mon: MES[d.getMonth()], year: d.getFullYear(), dow: ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"][d.getDay()] };
  };
  window.SHOW_STATUS = {
    open:    { label: "Boletos", cls: "btn--gold" },
    few:     { label: "Últimos boletos", cls: "btn--blood" },
    soldout: { label: "Agotado", cls: "btn--ghost soldout" },
  };

  /* ---------------- Init ---------------- */
  function init() {
    const active = document.body.getAttribute("data-page") || "";
    const navMount = document.getElementById("nav");
    const footMount = document.getElementById("footer");

    // parallax smoke background — drifts as the page scrolls
    let smoke = document.querySelector(".smoke-bg");
    if (!smoke) {
      smoke = document.createElement("div");
      smoke.className = "smoke-bg";
      document.body.insertBefore(smoke, document.body.firstChild);
    }
    const drift = () => {
      const se = document.scrollingElement || document.documentElement;
      const y = window.scrollY || window.pageYOffset || se.scrollTop || document.body.scrollTop || 0;
      const range = Math.max(1, (se.scrollHeight || 0) - window.innerHeight);
      const p = Math.min(1, Math.max(0, y / range));
      const max = window.innerHeight * 0.4; // total drift = 40vh
      smoke.style.transform = "translate3d(0," + ((0.5 - p) * max) + "px,0)";
    };
    drift();
    window.addEventListener("scroll", drift, { passive: true });
    document.addEventListener("scroll", drift, { passive: true, capture: true });
    window.addEventListener("resize", drift);
    if (navMount) navMount.innerHTML = buildNav(active);
    if (footMount) footMount.innerHTML = buildFooter();

    // mobile social row
    const mm = document.getElementById("mmSocials");
    if (mm) mm.innerHTML = (window.SOCIALS || []).map(x => `<a class="social" href="${x.url}" aria-label="${x.label}">${I[x.id] || ""}</a>`).join("");

    // nav scroll state
    const nav = document.getElementById("siteNav");
    const onScroll = () => { if (nav) nav.classList.toggle("scrolled", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // burger
    const burger = document.getElementById("burger");
    if (burger) burger.addEventListener("click", () => document.body.classList.toggle("menu-open"));
    document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

    // page renderers
    if (window.PAGE_RENDER) window.PAGE_RENDER();

    // scroll reveal — getBoundingClientRect based (IntersectionObserver is
    // unreliable/throttled in some capture/preview contexts). Each reveal also
    // hard-commits the visible end-state so content is NEVER stuck hidden if a
    // CSS transition gets frozen by render throttling.
    const els = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (els.length) {
      const commit = (el) => { el.style.transition = "none"; el.style.opacity = "1"; el.style.transform = "none"; };
      const reveal = (el) => {
        if (el.classList.contains("in")) return;
        el.classList.add("in");
        // guarantee final visible state lands even if the transition is frozen
        setTimeout(() => commit(el), 1000);
      };
      const inView = (el) => {
        const r = el.getBoundingClientRect();
        return r.top < (window.innerHeight || document.documentElement.clientHeight) * 0.92 && r.bottom > 0;
      };
      let pending = els.slice();
      const pass = () => {
        pending = pending.filter((el) => { if (inView(el)) { reveal(el); return false; } return true; });
        if (!pending.length) {
          window.removeEventListener("scroll", pass);
          window.removeEventListener("resize", pass);
        }
      };
      pass();
      window.addEventListener("scroll", pass, { passive: true });
      window.addEventListener("resize", pass);
      // final safety net: reveal + commit everything no matter what
      setTimeout(() => els.forEach((el) => { el.classList.add("in"); commit(el); }), 2600);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
