export default function About() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-12 uppercase tracking-widest">Acerca de</h1>
      <img src={`${base}media/portrait-1.jpg`} alt="Luis R Conriquez" className="w-full max-w-md mx-auto mb-12 rounded-sm opacity-80" />
      <div className="space-y-6 text-lg text-white/80 leading-relaxed font-serif text-justify">
        <p>
          Originario de Caborca, Sonora, Luis R Conriquez ha redefinido el panorama de la música regional mexicana, erigiéndose como el indiscutible Rey de los Corridos Bélicos. Su voz cruda y narrativa visceral capturan la esencia de las calles, transformando historias de poder y supervivencia en himnos de estadios.
        </p>
        <p>
          Bajo el sello de Kartel Music, su ascenso ha sido meteórico. Con miles de millones de reproducciones globales, ha llevado el sonido bélico desde el desierto sonorense hasta los escenarios más prestigiosos de Estados Unidos y México, consolidando un legado que desafía las fronteras y las convenciones.
        </p>
        <p>
          Hoy, Luis R Conriquez no es solo un cantautor, es una institución. Su música es la banda sonora de una generación que no pide permiso, una celebración de la opulencia y el peligro, forjada en oro y sangre.
        </p>
      </div>
    </div>
  );
}
