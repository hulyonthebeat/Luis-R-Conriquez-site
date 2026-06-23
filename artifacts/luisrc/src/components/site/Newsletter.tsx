import { useState } from "react";
import { site } from "@/data/content";
import { useCreateNewsletterSignup } from "@workspace/api-client-react";

export function Newsletter() {
  const [ok, setOk] = useState("");
  const [err, setErr] = useState("");
  const { mutate, isPending } = useCreateNewsletterSignup();

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
          setOk("");
          setErr("");
          const form = e.currentTarget;
          const fd = new FormData(form);
          const phone = String(fd.get("phone") ?? "").trim();
          const country = String(fd.get("country") ?? "").trim();
          mutate(
            {
              data: {
                name: String(fd.get("name") ?? "").trim(),
                email: String(fd.get("email") ?? "").trim(),
                ...(phone ? { phone } : {}),
                ...(country ? { country } : {}),
                consent: fd.get("consent") != null,
              },
            },
            {
              onSuccess: () => {
                setOk("Estás dentro del convoy.");
                form.reset();
              },
              onError: () => {
                setErr("No pudimos registrarte. Inténtalo de nuevo.");
              },
            },
          );
        }}
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Nombre completo*"
          aria-label="Nombre completo"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Correo electrónico*"
          aria-label="Correo electrónico"
        />
        <input type="tel" name="phone" placeholder="Teléfono" aria-label="Teléfono" />
        <input type="text" name="country" placeholder="País" aria-label="País" />
        <label className="news-consent">
          <input type="checkbox" name="consent" required />
          <span>
            Al marcar esta casilla, aceptas recibir noticias de {site.name} y
            Sony Music Entertainment. Para más información sobre cómo usamos tus
            datos, visita{" "}
            <a
              href="https://www.sonymusic.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.sonymusic.com/privacy-policy/
            </a>
            .
          </span>
        </label>
        <button
          type="submit"
          className="btn btn--gold news-submit"
          disabled={isPending}
        >
          {isPending ? "Enviando…" : "Suscribirme"}
        </button>
      </form>
      <p className={err ? "news-err" : "ok"} aria-live="polite">
        {err || ok}
      </p>
    </div>
  );
}
