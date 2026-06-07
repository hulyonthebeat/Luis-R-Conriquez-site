import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <AlertCircle className="h-10 w-10 text-primary mx-auto mb-6" />
        <h1 className="font-serif text-5xl font-bold text-primary uppercase tracking-widest mb-4">
          404
        </h1>
        <p className="text-muted-foreground mb-8">
          Esta página no existe. El bélico no la encontró.
        </p>
        <Link
          href="/"
          className="inline-block border border-primary text-primary px-6 py-3 uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
