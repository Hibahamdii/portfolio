import { Link } from "@tanstack/react-router";
import { Braces, Leaf, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["/", "Accueil"],
  ["/projets", "Projets"],
  ["/experience", "Experience"],
  ["/competences", "Competences"],
  ["/contact", "Contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);

  useEffect(() => {
    const paused = window.localStorage.getItem("hiba-reduce-motion") === "true";
    setMotionPaused(paused);
    document.documentElement.classList.toggle("motion-off", paused);
  }, []);

  function toggleMotion() {
    const paused = !motionPaused;
    setMotionPaused(paused);
    window.localStorage.setItem("hiba-reduce-motion", String(paused));
    document.documentElement.classList.toggle("motion-off", paused);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background backdrop-blur-md">
      <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <Braces className="text-accent" />
          Hiba.
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {links.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <span className="text-xs font-semibold text-primary">FR</span>
          <span className="text-border">/</span>
          <Button variant="ghost" size="sm" aria-label="Switch to English">
            EN
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMotion}
            aria-label={motionPaused ? "Activer les animations" : "Reduire les animations"}
            title={motionPaused ? "Activer les animations" : "Reduire les animations"}
          >
            <Leaf className={motionPaused ? "opacity-40" : "text-accent"} />
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMotion}
            aria-label={motionPaused ? "Activer les animations" : "Reduire les animations"}
          >
            <Leaf className={motionPaused ? "opacity-40" : "text-accent"} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            <Menu />
          </Button>
        </div>
      </div>

      {open && (
        <nav className="relative z-10 grid border-t border-primary/15 bg-paper/95 px-5 py-4 md:hidden">
          {links.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
