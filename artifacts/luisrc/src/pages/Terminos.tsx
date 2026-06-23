import { Link } from "wouter";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/content";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";

export default function Terminos() {
  usePageMeta(pageMeta["/terminos"]);
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Legal</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display h-xl chrome">Términos de Servicio</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose-legal">
          <Reveal>
            <p className="lede">
              Al utilizar este sitio web y suscribirte a la comunidad de{" "}
              {site.name} aceptas los siguientes términos y condiciones.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2>1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar este sitio web, aceptas quedar vinculado por
              estos Términos de Servicio. Si no estás de acuerdo con alguno de
              estos términos, no debes utilizar este sitio.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2>2. Uso del sitio</h2>
            <p>
              Este sitio es de uso personal y no comercial. No puedes reproducir,
              distribuir, modificar ni crear obras derivadas de ningún contenido
              sin autorización expresa por escrito de {site.label}.
            </p>
          </Reveal>

          <Reveal delay={0.11}>
            <h2>3. Suscripción a la comunidad</h2>
            <p>
              Al proporcionar tu información de contacto para unirte a la
              comunidad de fans, autorizas a {site.label} a enviarte
              comunicaciones relacionadas con música, giras, lanzamientos y
              contenido exclusivo. Puedes cancelar tu suscripción en cualquier
              momento.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h2>4. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio —incluyendo textos, imágenes,
              logotipos, música y videos— es propiedad de {site.label} o de sus
              respectivos titulares y está protegido por las leyes de derechos de
              autor aplicables.
            </p>
          </Reveal>

          <Reveal delay={0.17}>
            <h2>5. Limitación de responsabilidad</h2>
            <p>
              {site.label} no será responsable de ningún daño directo, indirecto,
              incidental o consecuente derivado del uso o la imposibilidad de uso
              de este sitio web.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2>6. Cambios a los términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. El uso continuado del sitio tras la publicación de cambios
              constituye tu aceptación de los nuevos términos. Última
              actualización: junio 2025.
            </p>
          </Reveal>

          <Reveal delay={0.23}>
            <h2>7. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos, contáctanos en{" "}
              <a href={`mailto:${site.booking}`}>{site.booking}</a>.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p>
              <Link href="/privacidad" className="footer-legal">
                Ver Política de Privacidad →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
