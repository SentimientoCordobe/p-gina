import { partidos } from "../data/mockData";
import { videos } from "../data/videos";
import { Play } from "lucide-react";

export default function Videos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-display text-4xl font-bold uppercase tracking-wide text-foreground">
        Mis Vídeos
      </h1>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v, i) => (
          <a
            key={i}
            href={v.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={v.miniatura}
                alt={v.titulo}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg">
                  <Play size={28} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="mt-1 text-sm text-muted-foreground">{v.fecha} ·</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
