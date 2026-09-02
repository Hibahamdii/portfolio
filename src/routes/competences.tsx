import { createFileRoute } from "@tanstack/react-router";
import { BrainCircuit, CodeXml, Database, Palette, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import {
  SiAngular,
  SiBlender,
  SiCss,
  SiDart,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiMqtt,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { PageLayout } from "@/components/page-layout";
import { useIosTransparentVideoFallback } from "@/lib/use-ios-transparent-video-fallback";
import skillsFallback from "@/assets/anim-desk-chair-transparent.webp";
import skillsVideo from "@/assets/anim-desk-chair-transparent.webm";

export const Route = createFileRoute("/competences")({
  head: () => ({
    meta: [
      { title: "Competences - Hiba Hamdi" },
      {
        name: "description",
        content: "Competences de Hiba Hamdi en developpement web, IoT, mobile et IA.",
      },
      { property: "og:title", content: "Competences - Hiba Hamdi" },
      {
        property: "og:description",
        content: "Expertise en Angular, Flutter, IoT et Machine Learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    icon: CodeXml,
    title: "Developpement Web",
    items: [
      { name: "HTML5", logo: SiHtml5 },
      { name: "CSS3", logo: SiCss },
      { name: "JavaScript", logo: SiJavascript },
      { name: "TypeScript", logo: SiTypescript },
      { name: "React", logo: SiReact },
      { name: "Angular", logo: SiAngular },
      { name: "Tailwind CSS", logo: SiTailwindcss },
      { name: "Git", logo: SiGit },
      { name: "GitHub", logo: SiGithub },
    ],
  },
  {
    icon: Zap,
    title: "Mobile & IoT",
    items: [
      { name: "Flutter", logo: SiFlutter },
      { name: "Dart", logo: SiDart },
      { name: "MQTT", logo: SiMqtt },
      { name: "Python", logo: SiPython },
      { name: "SQL", logo: Database },
    ],
  },
  {
    icon: BrainCircuit,
    title: "Data & IA",
    items: [
      { name: "Python", logo: SiPython },
      { name: "TensorFlow", logo: SiTensorflow },
      { name: "Scikit-learn", logo: SiScikitlearn },
      { name: "Pandas", logo: SiPandas },
      { name: "NumPy", logo: SiNumpy },
      { name: "Jupyter", logo: SiJupyter },
    ],
  },
  {
    icon: Palette,
    title: "Design",
    items: [
      { name: "Figma", logo: SiFigma },
      { name: "Blender", logo: SiBlender },
    ],
  },
];

type ContentWrapper = "main" | "section";

export function SkillsContent({ as: Wrapper = "main" }: { as?: ContentWrapper } = {}) {
  const useFallback = useIosTransparentVideoFallback();
  const [activeGroup, setActiveGroup] = useState(groups[0].title);
  const selectedGroup = useMemo(
    () => groups.find((group) => group.title === activeGroup) ?? groups[0],
    [activeGroup],
  );

  return (
    <Wrapper className="mx-auto max-w-7xl px-5 py-10 lg:px-10 lg:py-12">
      <section className="relative overflow-hidden border border-primary/15 bg-background/90 px-4 py-8 shadow-[8px_8px_0_color-mix(in_oklab,var(--primary)_10%,transparent)] sm:px-7 lg:px-10">
        <div className="neural-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

        <div className="relative">
          <header className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[minmax(0,1fr)_10rem] lg:grid-cols-[minmax(0,1fr)_12rem]">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent sm:text-sm">
                Expertise / Techstack
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground md:mx-0">
                Developpement web, mobile, IoT et intelligence artificielle pour des solutions
                numeriques propres et bien structurees.
              </p>
            </div>

            <div className="mx-auto grid size-36 place-items-center overflow-hidden md:size-40 lg:size-44">
              {useFallback ? (
                <img
                  alt="Animation des competences de Hiba"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-contain p-2"
                  src={skillsFallback}
                  loading="lazy"
                />
              ) : (
                <video
                  aria-label="Animation des competences de Hiba"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-contain p-2"
                  src={skillsVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          </header>

          <div
            aria-label="Categories de competences"
            className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-2.5"
            role="tablist"
          >
            {groups.map(({ icon: Icon, title }) => {
              const isActive = title === activeGroup;

              return (
                <button
                  key={title}
                  aria-selected={isActive}
                  className={`inline-flex h-9 min-w-0 items-center justify-center gap-2 rounded-full border px-4 text-[0.7rem] font-semibold transition duration-300 sm:min-w-32 ${
                    isActive
                      ? "border-accent bg-accent text-accent-foreground shadow-[0_10px_24px_color-mix(in_oklab,var(--accent)_22%,transparent)]"
                      : "border-primary/15 bg-paper text-foreground hover:border-accent/50 hover:text-primary"
                  }`}
                  onClick={() => setActiveGroup(title)}
                  role="tab"
                  type="button"
                >
                  <Icon className="size-4" />
                  {title}
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {selectedGroup.items.map(({ name, logo: Logo }) => (
              <article
                key={name}
                className="group grid h-24 place-items-center border border-primary/10 bg-paper/90 p-3 text-center shadow-[0_10px_26px_color-mix(in_oklab,var(--primary)_7%,transparent)] transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-background sm:h-28"
              >
                <div>
                  <Logo
                    aria-hidden="true"
                    className="mx-auto size-8 text-primary transition duration-300 group-hover:text-accent sm:size-10"
                  />
                  <h2 className="mt-3 text-[0.7rem] font-semibold leading-tight text-foreground sm:text-xs">
                    {name}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default function Skills() {
  return (
    <PageLayout>
      <SkillsContent />
    </PageLayout>
  );
}
