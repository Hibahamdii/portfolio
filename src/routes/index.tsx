import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiFlutter,
  SiPython,
  SiNodedotjs,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiDocker,
  SiFramer,
  SiNextdotjs,
  SiVite,
  SiJavascript,
} from "react-icons/si";
import { InteractiveHeroScene } from "@/components/interactive-hero-scene";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import projectEcolens from "@/assets/project-ecolens.jpg";
import projectMedina from "@/assets/project-medina.jpg";
import projectNabta from "@/assets/project-nabta.jpg";
import skillsVideo from "@/assets/anim-desk-chair-transparent.webm";
import experienceVideo from "@/assets/anim-whiteboard-transparent.webm";
import contactImage from "@/assets/hiba-contact-pose.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hiba Hamdi — Développeuse Multimédia & IA" },
      {
        name: "description",
        content:
          "Découvrez le portfolio créatif de Hiba Hamdi, développeuse multimédia et future ingénieure Data & IA.",
      },
      { property: "og:title", content: "Hiba Hamdi — Wild Tech Garden" },
      {
        property: "og:description",
        content:
          "Des expériences numériques à la croisée du design, du code et de l'intelligence artificielle.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const technologies = [
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { Icon: SiAngular, name: "Angular", color: "#DD0031" },
    { Icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { Icon: SiGit, name: "Git", color: "#F1502F" },
    { Icon: SiDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { Icon: SiVite, name: "Vite", color: "#646CFF" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  ];

  return (
    <PageLayout>
      <main>
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
          <span className="pointer-events-none absolute right-[8%] top-[12%] font-display text-[9rem] text-primary/10">
            {"{}"}
          </span>
          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <InteractiveHeroScene />

              {/* Carousel placed under hero image so it stays directly below on large screens */}
              <div className="mt-8 lg:mt-6">
                <div className="bg-primary px-4 py-3 rounded-lg">
                  <style>{`
                    @keyframes scrollX { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                    .carousel-track { display:flex; gap:1rem; align-items:center; }
                    .carousel-animate { animation: scrollX 20s linear infinite; }
                  `}</style>

                  <div className="overflow-hidden">
                    <div className="carousel-track carousel-animate py-2">
                      {technologies.map((tech) => {
                        const Icon = tech.Icon;
                        return (
                          <div key={tech.name} className="flex-shrink-0 flex items-center justify-center w-20 h-12 rounded-md bg-primary-foreground/5 border border-primary-foreground/10">
                            <Icon className="text-primary-foreground text-xl" />
                          </div>
                        );
                      })}

                      {technologies.map((tech) => {
                        const Icon = tech.Icon;
                        return (
                          <div key={`${tech.name}-dup`} className="flex-shrink-0 flex items-center justify-center w-20 h-12 rounded-md bg-primary-foreground/5 border border-primary-foreground/10">
                            <Icon className="text-primary-foreground text-xl" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase text-accent">
                <span className="h-px w-10 bg-accent" /> Basée en Tunisie · Disponible pour créer
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
                Salut, c'est <em className="font-editorial font-medium text-accent">Hiba Hamdi</em>
              </h1>
              <p className="mt-6 max-w-2xl font-editorial text-3xl leading-tight text-foreground sm:text-4xl">
                Je transforme des idées en sites web et en IA.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Développeuse Multimédia & Future Ingénieure Data & IA, je cultive des expériences
                numériques où la technologie devient plus humaine, curieuse et vivante.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button variant="garden" size="lg" asChild>
                  <Link to="/projets">
                    Découvrir mes projets <ArrowRight />
                  </Link>
                </Button>
                <Button variant="gardenOutline" size="lg" asChild>
                  <a href="/hiba-hamdi-cv.pdf" download>
                    Mon CV
                  </a>
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-6 border-t border-primary/20 pt-6 text-xs font-semibold uppercase text-primary">
                <span className="flex items-center gap-2">
                  <Code2 className="text-accent" /> Web créatif
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="text-accent" /> Data & IA
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects preview */}
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <header className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Mon laboratoire creatif</p>
            <h2 className="text-4xl text-primary sm:text-5xl">Des idées qui prennent racine.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Sélection de projets récents en web, IoT et IA.</p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "1",
                title: "Système intelligent d'irrigation LoRaWAN",
                displayDate: "Feb 2026 - Jun 2026",
                description:
                  "Plateforme d'agriculture intelligente avec capteurs, IA et tableau de bord de gestion.",
                image_url: projectNabta,
              },
              {
                id: "2",
                title: "Hotel Management System",
                displayDate: "Jul 2026",
                description:
                  "Système complet de gestion hôtelière: réservations, facturation et monitoring.",
                image_url: projectEcolens,
              },
              {
                id: "3",
                title: "Portfolio Multimédia",
                displayDate: "2026",
                description: "Portfolio créatif responsive avec animations et intégration multimédia.",
                image_url: projectMedina,
              },
            ].map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-lg border border-primary/15 bg-paper">
                {p.image_url && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                    <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary">{p.title}</h3>
                  <span className="text-xs text-accent/80">{p.displayDate}</span>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4">
                    <Button variant="gardenOutline" size="sm" asChild>
                      <a href="/projets">Voir tous les projets</a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills preview */}
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <header className="mb-10">
            <p className="text-sm font-semibold uppercase text-accent">Ma boite a outils</p>
            <h2 className="mt-3 text-4xl text-primary sm:text-5xl">Web, mobile, IoT et IA</h2>
          </header>

          <div className="grid gap-px overflow-hidden border border-primary/20 bg-primary/20 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Developpement Web", items: ["HTML5","CSS3","JavaScript","TypeScript","React","Angular","Tailwind","Git"] },
              { title: "Mobile & IoT", items: ["Flutter","Dart","MQTT","Python","SQL"] },
              { title: "Data & IA", items: ["Python","TensorFlow","Scikit-learn","Pandas","NumPy","Jupyter"] },
              { title: "Design", items: ["Figma","Blender"] },
            ].map(({ title, items }) => (
              <section key={title} className="bg-background/95 p-7">
                <h3 className="text-2xl text-primary">{title}</h3>
                <ul className="mt-6 grid gap-3">
                  {items.map((it) => (
                    <li key={it} className="flex items-center gap-3 border border-primary/15 bg-paper p-3">
                      <span className="text-xs font-semibold">{it}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
              <div className="mt-6 lg:mt-0">
                <video
                  aria-hidden
                  src={skillsVideo}
                  className="mx-auto w-full max-w-xs object-contain"
                  autoPlay
                  muted
                  loop
                />
              </div>
        </section>

        {/* Experience preview */}
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <header className="mb-8">
            <p className="text-sm font-semibold uppercase text-accent">Mon parcours pratique</p>
            <h2 className="text-4xl text-primary sm:text-5xl">Une progression entre création et technique</h2>
          </header>

          <div className="space-y-6">
            {[
              {
                year: "2023-2024",
                title: "Formation & premiers stages",
                company: "Higher Institute of Technological Studies of Sidi Bouzid",
                text: "Debuts et premiers stages d'initiation en telecom et developpement.",
              },
              {
                year: "2025-2026",
                title: "Projet de fin d'etudes - IoT & IA",
                company: "Smart Ways Innovation",
                text: "Stage PFE: systeme d'irrigation intelligent basé sur LoRaWAN et IA.",
              },
              {
                year: "Juillet 2026 - Auj.",
                title: "Stage de perfectionnement professionnel",
                company: "ATS Informatique Sidi Bouzid",
                text: "Perfectionnement en developpement et procedures professionnelles.",
              },
            ].map((s) => (
              <article key={s.year} className="rounded-lg border border-primary/15 bg-paper p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                    <span className="text-xs text-accent/80">{s.year} · {s.company}</span>
                    <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <video
              aria-hidden
              src={experienceVideo}
              className="mx-auto w-full max-w-sm object-contain"
              autoPlay
              muted
              loop
            />
          </div>
        </section>

        {/* Contact preview */}
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-accent">Un projet en tete ?</p>
              <h2 className="mt-3 text-4xl text-primary sm:text-5xl">Faisons croitre une innovation.</h2>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground">Developpeuse IoT & IA passionnée — disponible pour collaborations et stages.</p>
              <div className="mt-6">
                <Button variant="garden" size="lg" asChild>
                  <a href="/contact">Me contacter</a>
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <img src={contactImage} alt="Hiba contact" className="w-full object-contain" />
            </div>
          </div>
        </section>

        {/* standalone carousel removed — now embedded under hero image */}
      </main>
    </PageLayout>
  );
}
