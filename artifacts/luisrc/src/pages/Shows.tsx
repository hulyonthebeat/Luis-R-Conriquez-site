import { shows } from "@/data/content";
import { Button } from "@/components/ui/button";

export default function Shows() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-serif font-bold text-primary mb-12 uppercase tracking-widest text-center">Gira 2026</h1>
      <div className="space-y-4">
        {shows.map((show, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-card border border-white/5 hover:border-primary/50 transition-colors">
            <div className="mb-4 md:mb-0">
              <div className="text-primary font-bold tracking-widest mb-1">{show.date}</div>
              <div className="text-xl font-serif">{show.city}</div>
              <div className="text-sm text-white/50">{show.venue}</div>
            </div>
            <Button 
              variant={show.status === 'soldout' ? 'outline' : 'default'}
              disabled={show.status === 'soldout'}
              className="w-full md:w-auto uppercase tracking-widest"
            >
              {show.status === 'soldout' ? 'Agotado' : show.status === 'few' ? 'Últimos Boletos' : 'Boletos'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
