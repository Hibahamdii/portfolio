import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { InteractiveHeroScene } from "@/components/interactive-hero-scene";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Hiba Hamdi — Développeuse Multimédia & IA" },
    { name: "description", content: "Découvrez le portfolio créatif de Hiba Hamdi, développeuse multimédia et future ingénieure Data & IA." },
    { property: "og:title", content: "Hiba Hamdi — Wild Tech Garden" },
    { property: "og:description", content: "Des expériences numériques à la croisée du design, du code et de l'intelligence artificielle." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Home,
});

function Home() {
  return <PageLayout><main>
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <span className="pointer-events-none absolute right-[8%] top-[12%] font-display text-[9rem] text-primary/10">{"{}"}</span>
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative order-2 lg:order-1">
          <InteractiveHeroScene />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .15 }} className="order-1 lg:order-2">
          <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase text-accent"><span className="h-px w-10 bg-accent" /> Basée en Tunisie · Disponible pour créer</div>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] text-primary sm:text-6xl lg:text-7xl">Salut, c'est <em className="font-editorial font-medium text-accent">Hiba Hamdi</em></h1>
          <p className="mt-6 max-w-2xl font-editorial text-3xl leading-tight text-foreground sm:text-4xl">Je transforme des idées en sites web et en IA.</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">Développeuse Multimédia & Future Ingénieure Data & IA, je cultive des expériences numériques où la technologie devient plus humaine, curieuse et vivante.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Button variant="garden" size="lg" asChild><Link to="/projets">Découvrir mes projets <ArrowRight /></Link></Button><Button variant="gardenOutline" size="lg" asChild><a href="/hiba-hamdi-cv.pdf" download>Mon CV</a></Button></div>
          <div className="mt-12 flex flex-wrap gap-6 border-t border-primary/20 pt-6 text-xs font-semibold uppercase text-primary"><span className="flex items-center gap-2"><Code2 className="text-accent" /> Web créatif</span><span className="flex items-center gap-2"><Sparkles className="text-accent" /> Data & IA</span></div>
        </motion.div>
      </div>
    </section>
    <section className="bg-primary px-5 py-12 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center"><p className="font-display text-3xl">Le jardin est en croissance.</p><p className="max-w-lg text-sm leading-6 text-primary-foreground/75">Chaque projet est une nouvelle branche : recherche, expérimentation, code, puis une idée qui prend vie.</p></div></section>
  </main></PageLayout>;
}
