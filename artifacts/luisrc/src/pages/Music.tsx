import { releases } from "@/data/content";

export default function Music() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-serif font-bold text-primary mb-12 uppercase tracking-widest text-center">Discografía</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {releases.map((rel, i) => (
          <div key={i} className="group relative">
            <div className="aspect-square bg-card rounded-lg overflow-hidden border border-white/10 mb-4">
              {rel.cover ? (
                <img src={`${base}media/${rel.cover}`} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full bg-secondary/20 flex items-center justify-center font-serif text-2xl text-primary/40 text-center px-4">
                  {rel.title}
                </div>
              )}
            </div>
            <h3 className="font-serif text-lg font-bold">{rel.title}</h3>
            <p className="text-sm text-white/50">{rel.type} · {rel.year} · {rel.tracks} tracks</p>
          </div>
        ))}
      </div>
    </div>
  );
}
