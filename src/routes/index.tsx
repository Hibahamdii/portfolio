import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import {
  SiAngular,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiFramer,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { InteractiveHeroScene } from "@/components/interactive-hero-scene";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { SkillsContent } from "@/routes/competences";
import { ContactContent } from "@/routes/contact";
import { ExperienceContent } from "@/routes/experience";
import { ProjectsContent } from "@/routes/projets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hiba Hamdi - Développeuse Multimédia & IA" },
      {
        name: "description",
        content:
          "Découvrez le portfolio créatif de Hiba Hamdi, développeuse multimédia et future ingénieure Data & IA.",
      },
      { property: "og:title", content: "Hiba Hamdi - Wild Tech Garden" },
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

const technologies = [
  { Icon: SiReact, name: "React" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiAngular, name: "Angular" },
  { Icon: SiFlutter, name: "Flutter" },
  { Icon: SiPython, name: "Python" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiFigma, name: "Figma" },
  { Icon: SiGit, name: "Git" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiFramer, name: "Framer Motion" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiVite, name: "Vite" },
  { Icon: SiJavascript, name: "JavaScript" },
];

function TechnologyCarousel() {
  return (
    <section className="w-full overflow-hidden bg-primary py-4" aria-label="Technologies">
      <style>{`
        @keyframes homeTechScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .home-tech-carousel {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 1rem;
          animation: homeTechScroll 22s linear infinite;
        }
      `}</style>

      <div className="overflow-hidden">
        <div className="home-tech-carousel px-5">
          {[...technologies, ...technologies].map(({ Icon, name }, index) => (
            <div
              key={`${name}-${index}`}
              className="grid h-14 w-24 shrink-0 place-items-center rounded-md border border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground"
              title={name}
            >
              <Icon className="text-2xl" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <PageLayout>
      <main>
        <section className="relative overflow-hidden">
          <span className="pointer-events-none absolute right-[8%] top-[12%] font-display text-[9rem] text-primary/10">
            {"{}"}
          </span>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl min-w-0 items-center gap-8 px-5 py-12 sm:px-6 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative min-w-0"
            >
              <InteractiveHeroScene />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="min-w-0"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase text-accent">
                <span className="h-px w-10 shrink-0 bg-accent" />
                Basée en Tunisie · Disponible pour créer
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
                Salut, c'est{" "}
                <em className="font-editorial font-medium text-accent">Hiba Hamdi</em>
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

        <TechnologyCarousel />
        <ProjectsContent as="section" />
        <ExperienceContent as="section" />
        <SkillsContent as="section" />
        <ContactContent as="section" />
      </main>
    </PageLayout>
  );
}
