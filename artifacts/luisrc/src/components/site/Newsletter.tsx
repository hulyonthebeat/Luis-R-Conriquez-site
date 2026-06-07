import { useState } from "react";
import { media } from "@/data/content";
import { mediaUrl } from "@/lib/site";

export function Newsletter() {
  const [ok, setOk] = useState("");
  return (
    <div className="news-band">
      <div
        className="art"
        style={{ backgroundImage: `url(${mediaUrl(media.newsletterArt)})` }}
      />
      <div className="form-side">
        <span className="eyebrow">Acceso oficial</span>
        <h2 style={{ marginTop: 14 }}>Suscríbete para que estés al tanto de todo</h2>
        <p>
          Lanzamientos, preventas y fechas antes que nadie. Directo del equipo de Luis R
          Conriquez.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOk("✓ Estás dentro del convoy.");
            e.currentTarget.reset();
          }}
        >
          <div className="nf-row">
            <input type="text" required placeholder="Nombre" aria-label="Nombre" />
            <input
              type="email"
              required
              placeholder="Correo electrónico"
              aria-label="Correo"
            />
          </div>
          <button type="submit" className="btn btn--gold btn--block">
            Suscribirme
          </button>
          <p className="terms">
            Al suscribirte aceptas recibir correos de Kartel Music. Términos y Condiciones.
          </p>
          <p className="ok">{ok}</p>
        </form>
      </div>
    </div>
  );
}
