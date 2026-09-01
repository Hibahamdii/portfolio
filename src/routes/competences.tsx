import { createFileRoute } from "@tanstack/react-router";
import { BrainCircuit, CodeXml, Database, Palette, Zap } from "lucide-react";
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
  return (
      <Wrapper className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-14">
        <header className="mb-8 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_14rem]">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">Ma boite a outils</p>
            <h1 className="mt-3 text-4xl text-primary sm:text-5xl">
              Web, mobile, IoT
              <br />
              et intelligence artificielle.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Expertise en developpement multiplateforme, programmation IoT avec LoRaWAN, et machine
              learning pour des solutions numeriques innovantes.
            </p>
          </div>

          <video
            aria-label="Animation des compétences de Hiba"
            width={1024}
            height={1024}
            className="mx-auto hidden w-full max-w-56 object-contain sm:block"
            src={skillsVideo}
            autoPlay
            muted
            loop
          />
        </header>

        <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
          {groups.map(({ icon: Icon, title, items }) => (
            <section
              key={title}
              className="border border-primary/15 bg-background/90 p-5 shadow-[8px_8px_0_color-mix(in_oklab,var(--primary)_10%,transparent)] backdrop-blur-sm transition duration-300 hover:border-accent/50 hover:bg-paper"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-md border border-primary/20 bg-paper text-accent">
                  <Icon className="size-5" />
                </span>
                <h2 className="text-2xl text-primary">{title}</h2>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map(({ name, logo: Logo }) => (
                  <li
                    key={name}
                    className="group inline-flex items-center gap-2 rounded-md border border-primary/15 bg-paper px-3 py-2 transition-colors hover:border-accent hover:bg-background"
                  >
                    <Logo
                      aria-hidden="true"
                      className="size-4 text-primary transition-colors group-hover:text-accent"
                    />
                    <span className="text-xs font-semibold text-foreground">{name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
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
