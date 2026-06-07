import { merch } from "@/data/content";
import { Button } from "@/components/ui/button";

export default function Merch() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-serif font-bold text-primary mb-12 uppercase tracking-widest text-center">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {merch.map((item, i) => (
          <div key={i} className="group">
            <div className="aspect-[3/4] bg-card/50 rounded-lg overflow-hidden border border-white/5 mb-4 p-4 relative">
              <img src={`${base}media/${item.image}`} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-2 py-1 uppercase">
                {item.tag}
              </div>
            </div>
            <h3 className="font-bold mb-1">{item.name}</h3>
            <p className="text-primary mb-4">${item.price} USD</p>
            <Button className="w-full uppercase tracking-widest">Agregar</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
