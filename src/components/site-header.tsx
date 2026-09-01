import { Link } from "@tanstack/react-router";
import { Languages, Leaf, Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMotion}
          aria-label={motionPaused ? "Activer les animations" : "Reduire les animations"}
          title={motionPaused ? "Activer les animations" : "Reduire les animations"}
          className="size-10 rounded-2xl border border-primary/10 bg-paper/90 text-primary shadow-[0_10px_30px_color-mix(in_oklab,var(--primary)_12%,transparent)] backdrop-blur-xl hover:bg-paper"
        >
          <Leaf className={motionPaused ? "opacity-40" : "text-accent"} />
        </Button>

        <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 items-center gap-5 rounded-full border border-primary/10 bg-paper/85 px-3 py-2 shadow-[0_18px_45px_color-mix(in_oklab,var(--primary)_12%,transparent)] backdrop-blur-xl md:flex">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full px-2 pr-3 font-display text-sm font-bold text-primary"
          >
            <span className="grid size-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
              H
            </span>
            Hiba
          </Link>

          <nav className="flex items-center gap-1" aria-label="Navigation principale">
            {links.slice(1, -1).map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="rounded-full px-3 py-2 text-xs font-medium text-foreground/60 transition-colors hover:bg-background/80 hover:text-primary"
                activeProps={{
                  className: "bg-background text-primary shadow-sm",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[0_8px_20px_color-mix(in_oklab,var(--primary)_25%,transparent)] transition-colors hover:bg-primary/90"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-primary/10 bg-paper/90 px-3 py-2 font-display text-sm font-bold text-primary shadow-[0_10px_30px_color-mix(in_oklab,var(--primary)_12%,transparent)] backdrop-blur-xl"
          >
            <span className="grid size-6 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
              H
            </span>
            Hiba
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
            className="size-10 rounded-2xl border border-primary/10 bg-paper/90 text-primary shadow-[0_10px_30px_color-mix(in_oklab,var(--primary)_12%,transparent)] backdrop-blur-xl hover:bg-paper"
          >
            <Menu />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          aria-label="Changer la langue en arabe"
          className="h-10 rounded-2xl border border-primary/10 bg-paper/90 px-3 text-xs font-semibold text-primary shadow-[0_10px_30px_color-mix(in_oklab,var(--primary)_12%,transparent)] backdrop-blur-xl hover:bg-paper sm:rounded-full sm:px-4"
        >
          <Languages className="text-accent" />
          <span className="hidden sm:inline">{"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"}</span>
        </Button>
      </div>

      {open && (
        <nav className="mx-auto mt-3 grid max-w-sm rounded-2xl border border-primary/10 bg-paper/95 p-3 shadow-[0_18px_45px_color-mix(in_oklab,var(--primary)_14%,transparent)] backdrop-blur-xl md:hidden">
          {links.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/75 hover:bg-background hover:text-primary"
              activeProps={{ className: "bg-background text-primary" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
