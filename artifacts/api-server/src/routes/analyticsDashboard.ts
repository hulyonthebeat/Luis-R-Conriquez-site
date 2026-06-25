/**
 * Self-contained private analytics dashboard. No build step, no external libs —
 * a single HTML document with inline CSS/JS. It prompts for the dashboard
 * password (kept in localStorage) and renders the token-gated summary endpoint.
 */
export function dashboardHtml(): string {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Estadísticas · Luis R Conriquez</title>
<style>
  :root{ --ink:#0b0c0e; --panel:#121418; --line:#23262d; --text:#e9ebef; --mute:#8a909b; --gold:#c2a15b; --gold2:#e7cd8d; }
  *{ box-sizing:border-box; }
  body{ margin:0; background:var(--ink); color:var(--text); font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; }
  a{ color:var(--gold2); }
  .wrap{ max-width:1040px; margin:0 auto; padding:28px 20px 80px; }
  header{ display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; margin-bottom:22px; }
  h1{ font-size:18px; letter-spacing:.16em; text-transform:uppercase; margin:0; font-weight:700; }
  h1 small{ display:block; color:var(--mute); font-size:11px; letter-spacing:.18em; margin-top:6px; font-weight:500; }
  .range{ display:inline-flex; border:1px solid var(--line); border-radius:999px; overflow:hidden; }
  .range button{ background:transparent; border:0; color:var(--mute); padding:8px 14px; font-size:12px; cursor:pointer; letter-spacing:.06em; }
  .range button.on{ background:var(--gold); color:#0a0b0d; font-weight:700; }
  .cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-bottom:22px; }
  .card{ background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:18px; }
  .card .k{ color:var(--mute); font-size:11px; letter-spacing:.14em; text-transform:uppercase; }
  .card .v{ font-size:30px; font-weight:700; margin-top:8px; }
  .card.muted .v{ color:var(--mute); font-size:22px; }
  .grid{ display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  .panel{ background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:18px; }
  .panel h2{ font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--mute); margin:0 0 14px; font-weight:600; }
  .row{ display:flex; align-items:center; gap:10px; margin:9px 0; font-size:13px; }
  .row .lbl{ width:42%; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:var(--text); }
  .row .bar{ flex:1; height:8px; background:#1c1f25; border-radius:6px; overflow:hidden; }
  .row .bar i{ display:block; height:100%; background:linear-gradient(90deg,var(--gold),var(--gold2)); }
  .row .n{ width:48px; text-align:right; color:var(--mute); font-variant-numeric:tabular-nums; }
  .chart{ width:100%; height:160px; }
  .empty{ color:var(--mute); font-size:13px; padding:8px 0; }
  .full{ grid-column:1 / -1; }
  /* login */
  #login{ position:fixed; inset:0; display:grid; place-items:center; background:var(--ink); }
  #login form{ background:var(--panel); border:1px solid var(--line); border-radius:16px; padding:30px; width:min(360px,92vw); text-align:center; }
  #login h1{ margin:0 0 6px; }
  #login p{ color:var(--mute); font-size:13px; margin:0 0 18px; }
  #login input{ width:100%; padding:12px 14px; border-radius:10px; border:1px solid var(--line); background:#0e1013; color:var(--text); font-size:15px; }
  #login button{ width:100%; margin-top:12px; padding:12px; border:0; border-radius:10px; background:var(--gold); color:#0a0b0d; font-weight:700; cursor:pointer; letter-spacing:.04em; }
  #login .err{ color:#e2767a; font-size:12px; min-height:16px; margin-top:10px; }
  .hidden{ display:none !important; }
  @media (max-width:760px){ .cards{ grid-template-columns:1fr; } .grid{ grid-template-columns:1fr; } }
</style>
</head>
<body>
<div id="login">
  <form id="loginForm">
    <h1>Estadísticas</h1>
    <p>Introduce la contraseña del panel</p>
    <input id="pw" type="password" autocomplete="current-password" placeholder="Contraseña" />
    <button type="submit">Entrar</button>
    <div class="err" id="loginErr"></div>
  </form>
</div>

<div class="wrap hidden" id="app">
  <header>
    <h1>Estadísticas <small>Luis R Conriquez · visitantes reales (sin bots)</small></h1>
    <div class="range" id="range">
      <button data-d="7">7 días</button>
      <button data-d="30" class="on">30 días</button>
      <button data-d="90">90 días</button>
      <button data-d="365">1 año</button>
    </div>
  </header>

  <div class="cards">
    <div class="card"><div class="k">Visitantes únicos</div><div class="v" id="cVisitors">–</div></div>
    <div class="card"><div class="k">Vistas de página</div><div class="v" id="cViews">–</div></div>
    <div class="card muted"><div class="k">Bots filtrados</div><div class="v" id="cBots">–</div></div>
  </div>

  <div class="panel full" style="margin-bottom:14px;">
    <h2>Visitantes por día</h2>
    <svg class="chart" id="chart" preserveAspectRatio="none"></svg>
  </div>

  <div class="grid">
    <div class="panel"><h2>Páginas más vistas</h2><div id="pPages"></div></div>
    <div class="panel"><h2>Fuentes de tráfico</h2><div id="pRef"></div></div>
    <div class="panel"><h2>Países</h2><div id="pCountries"></div></div>
    <div class="panel"><h2>Navegadores</h2><div id="pBrowsers"></div></div>
    <div class="panel full"><h2>Dispositivos</h2><div id="pDevices"></div></div>
  </div>
</div>

<script>
  var KEY="luisrc_analytics_token";
  var token=localStorage.getItem(KEY)||"";
  var days=30;
  var lastDaily=null;

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\\"":"&quot;"}[c];}); }
  function fmt(n){ return (n||0).toLocaleString("es-MX"); }

  function bars(elId, items){
    var el=document.getElementById(elId);
    if(!items||!items.length){ el.innerHTML='<div class="empty">Sin datos todavía.</div>'; return; }
    var max=Math.max.apply(null, items.map(function(i){return i.count;}))||1;
    el.innerHTML=items.map(function(i){
      var w=Math.max(3, Math.round(i.count/max*100));
      return '<div class="row"><div class="lbl" title="'+esc(i.label)+'">'+esc(i.label)+'</div>'
        +'<div class="bar"><i style="width:'+w+'%"></i></div>'
        +'<div class="n">'+fmt(i.count)+'</div></div>';
    }).join("");
  }

  function drawChart(daily){
    var svg=document.getElementById("chart");
    var W=svg.clientWidth||900, H=160, pad=6;
    svg.setAttribute("viewBox","0 0 "+W+" "+H);
    if(!daily||!daily.length){ svg.innerHTML='<text x="10" y="24" fill="#8a909b" font-size="12">Sin datos todavía.</text>'; return; }
    var max=Math.max.apply(null, daily.map(function(d){return d.visitors;}))||1;
    var n=daily.length;
    var x=function(i){ return n===1? W/2 : pad + i*(W-2*pad)/(n-1); };
    var y=function(v){ return H-pad - (v/max)*(H-2*pad); };
    var line="", area="";
    daily.forEach(function(d,i){ var px=x(i), py=y(d.visitors); line+=(i?" L":"M")+px+" "+py; });
    area=line+" L"+x(n-1)+" "+(H-pad)+" L"+x(0)+" "+(H-pad)+" Z";
    svg.innerHTML=
      '<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">'
      +'<stop offset="0" stop-color="#c2a15b" stop-opacity="0.35"/>'
      +'<stop offset="1" stop-color="#c2a15b" stop-opacity="0"/></linearGradient></defs>'
      +'<path d="'+area+'" fill="url(#g)"/>'
      +'<path d="'+line+'" fill="none" stroke="#e7cd8d" stroke-width="2"/>';
  }

  function load(){
    fetch("/api/analytics/summary?days="+days,{headers:{"x-analytics-token":token}})
      .then(function(r){
        if(r.status===401){ throw {code:401}; }
        if(!r.ok){ throw {code:r.status}; }
        return r.json();
      })
      .then(function(d){
        document.getElementById("login").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
        document.getElementById("cVisitors").textContent=fmt(d.totals.visitors);
        document.getElementById("cViews").textContent=fmt(d.totals.humanViews);
        document.getElementById("cBots").textContent=fmt(d.totals.botViews);
        bars("pPages", d.topPages);
        bars("pRef", d.topReferrers);
        bars("pCountries", d.topCountries);
        bars("pBrowsers", d.topBrowsers);
        bars("pDevices", d.topDevices);
        lastDaily=d.daily;
        drawChart(d.daily);
      })
      .catch(function(e){
        if(e&&e.code===401){
          localStorage.removeItem(KEY); token="";
          document.getElementById("app").classList.add("hidden");
          document.getElementById("login").classList.remove("hidden");
          document.getElementById("loginErr").textContent="Contraseña incorrecta.";
        } else {
          document.getElementById("loginErr").textContent="No se pudo cargar (error "+((e&&e.code)||"?")+").";
        }
      });
  }

  document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    token=document.getElementById("pw").value.trim();
    localStorage.setItem(KEY, token);
    document.getElementById("loginErr").textContent="";
    load();
  });
  document.getElementById("range").addEventListener("click", function(e){
    var b=e.target.closest("button"); if(!b) return;
    days=Number(b.getAttribute("data-d"));
    [].forEach.call(this.querySelectorAll("button"), function(x){ x.classList.toggle("on", x===b); });
    load();
  });
  var rzT;
  window.addEventListener("resize", function(){
    // redraw the chart from cached data — never refetch on resize
    clearTimeout(rzT);
    rzT=setTimeout(function(){ if(lastDaily) drawChart(lastDaily); }, 150);
  });

  if(token){ load(); }
</script>
</body>
</html>`;
}
