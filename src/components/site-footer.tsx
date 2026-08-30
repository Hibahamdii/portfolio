import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return <footer className="border-t border-primary/20 px-5 py-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="font-editorial text-xl italic text-primary">Cultiver les idées. Coder le futur.</p>
      <div className="flex gap-4 text-primary"><a href="https://github.com/" aria-label="GitHub"><Github /></a><a href="https://linkedin.com/" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:hiba@example.com" aria-label="Email"><Mail /></a></div>
      <p className="text-xs text-muted-foreground">© 2026 Hiba Hamdi · Tunisie</p>
    </div>
  </footer>;
}