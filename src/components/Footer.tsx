import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Logo & description */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <img
              src="/logo.jpg"
              alt="Sentimiento Cordobé"
              className="h-16 w-16 rounded-full object-cover"
            />
            <span className="font-display text-lg font-bold uppercase">
              Sentimiento Cordobé
            </span>
            <p className="text-sm text-primary-foreground/70 text-center md:text-left">
              Tu portal de noticias y pasión por el Córdoba CF.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-secondary">
              Secciones
            </h4>

            {["Plantilla", "Clasificación", "Calendario", "Partidos", "Tienda"].map((s) => (
              <Link
                key={s}
                to={`/${s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-secondary">
              Síguenos
            </h4>

            <div className="flex gap-5">
              <a
                href="https://x.com/Sent_Cordobe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-all hover:text-black hover:scale-110"
                aria-label="X Sentimiento Cordobé"
              >
                <Twitter size={24} />
              </a>

              <a
                href="https://www.instagram.com/sentimiento_cordobe/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-all hover:text-pink-500 hover:scale-110"
                aria-label="Instagram Sentimiento Cordobé"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.youtube.com/@SentimientoCordobe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-all hover:text-red-600 hover:scale-110"
                aria-label="YouTube Sentimiento Cordobé"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-4 text-center text-xs text-primary-foreground/50">
          © 2026 Creada por{" "}
          <a
            href="https://www.linkedin.com/in/javier-garzon-garcia/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-secondary transition-colors"
          >
            Javier Garzón
          </a>. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}