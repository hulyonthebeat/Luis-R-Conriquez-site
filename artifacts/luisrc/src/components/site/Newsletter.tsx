import { useState } from "react";

export function Newsletter() {
  const [ok, setOk] = useState("");
  return (
    <div className="news-band">
      <div className="news-head">
        <h2>Suscríbete para que estés al tanto de todo</h2>
        <span className="news-mail" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="m3.5 6.5 8.5 6 8.5-6" />
          </svg>
        </span>
      </div>
      <form
        className="news-form"
        onSubmit={(e) => {
          e.preventDefault();
          setOk("Estás dentro del convoy.");
          e.currentTarget.reset();
        }}
      >
        <input
          type="text"
          required
          placeholder="Nombre completo*"
          aria-label="Nombre completo"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
        />
        <input type="tel" placeholder="Teléfono" aria-label="Teléfono" />
        <input type="text" placeholder="País" aria-label="País" />
        <button type="submit" className="btn btn--gold news-submit">
          Suscribirme
        </button>
      </form>
      <p className="ok" aria-live="polite">
        {ok}
      </p>
    </div>
  );
}
