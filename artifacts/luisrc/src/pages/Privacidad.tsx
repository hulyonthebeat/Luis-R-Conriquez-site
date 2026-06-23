import { Link } from "wouter";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/content";
import { usePageMeta } from "@/hooks/usePageMeta";
import { pageMeta } from "@/lib/pageMeta";

export default function Privacidad() {
  usePageMeta(pageMeta["/privacidad"]);
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Legal</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display h-xl chrome">Política de Privacidad</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose-legal">
          <Reveal>
            <p className="lede">
              En {site.name} nos tomamos en serio la privacidad de nuestros
              fans. Esta política describe cómo recopilamos, usamos y protegemos
              tu información personal.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2>1. Información que recopilamos</h2>
            <p>
              Al suscribirte a nuestra lista de fans recopilamos tu nombre,
              dirección de correo electrónico, número de teléfono y país de
              residencia. Esta información se proporciona de forma voluntaria.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2>2. Uso de la información</h2>
            <p>
              Utilizamos tu información exclusivamente para enviarte noticias,
              novedades musicales, fechas de gira y contenido exclusivo de{" "}
              {site.name}. No vendemos ni compartimos tus datos con terceros con
              fines comerciales.
            </p>
          </Reveal>

          <Reveal delay={0.11}>
            <h2>3. Comunicaciones</h2>
            <p>
              Al proporcionar tu información aceptas recibir comunicaciones de{" "}
              {site.label}. Puedes darte de baja en cualquier momento haciendo
              clic en el enlace de cancelación de suscripción incluido en cada
              correo electrónico.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h2>4. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas
              razonables para proteger tu información personal contra acceso no
              autorizado, alteración, divulgación o destrucción.
            </p>
          </Reveal>

          <Reveal delay={0.17}>
            <h2>5. Tus derechos</h2>
            <p>
              Tienes derecho a acceder, corregir o solicitar la eliminación de
              tus datos personales en cualquier momento. Para ejercer estos
              derechos contáctanos en{" "}
              <a href={`mailto:${site.booking}`}>{site.booking}</a>.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2>6. Cambios a esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política en cualquier
              momento. Los cambios se publicarán en esta página con la fecha de
              actualización correspondiente. Última actualización: junio 2025.
            </p>
          </Reveal>

          <Reveal delay={0.23}>
            <p>
              <Link href="/terminos" className="footer-legal">
                Ver Términos de Servicio →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
