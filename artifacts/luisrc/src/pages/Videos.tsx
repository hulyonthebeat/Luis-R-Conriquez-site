import { videos } from "@/data/content";

export default function Videos() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-serif font-bold text-primary mb-12 uppercase tracking-widest text-center">Videos Oficiales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((vid, i) => (
          <div key={i} className="group">
            <div className="aspect-video bg-card rounded-lg overflow-hidden border border-white/10 relative mb-4">
              <img src={`${base}media/${vid.thumb}`} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-bold">{vid.title}</h3>
            <p className="text-sm text-white/50">{vid.meta} · {vid.views} vistas</p>
          </div>
        ))}
      </div>
    </div>
  );
}
