import { createFileRoute } from "@tanstack/react-router";
import { BrainCircuit, CodeXml, Database, Palette, Zap } from "lucide-react";
import { SiAngular, SiBlender, SiCss, SiDart, SiFlutter, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiJupyter, SiMqtt, SiNumpy, SiPandas, SiPython, SiReact, SiScikitlearn, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";
import { PageLayout } from "@/components/page-layout";
import skillsPose from "@/assets/hiba-skills-pose.png";

export const Route = createFileRoute("/competences")({ head: () => ({ meta: [{ title: "Compétences — Hiba Hamdi" }, { name: "description", content: "Compétences de Hiba Hamdi en développement web, IoT, mobile et IA." }, { property: "og:title", content: "Compétences — Hiba Hamdi" }, { property: "og:description", content: "Expertise en Angular, Flutter, IoT et Machine Learning." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: Skills });

const groups = [
  { 
    icon: CodeXml, 
    title: "Développement Web", 
    items: [
      { name: "HTML5", logo: SiHtml5 }, 
      { name: "CSS3", logo: SiCss }, 
      { name: "JavaScript", logo: SiJavascript }, 
      { name: "TypeScript", logo: SiTypescript }, 
      { name: "React", logo: SiReact },
      { name: "Angular", logo: SiAngular },
      { name: "Tailwind CSS", logo: SiTailwindcss }, 
      { name: "Git", logo: SiGit }, 
      { name: "GitHub", logo: SiGithub }
    ] 
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
    ] 
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
      { name: "Jupyter", logo: SiJupyter }
    ] 
  },
  { 
    icon: Palette, 
    title: "Design", 
    items: [
      { name: "Figma", logo: SiFigma }, 
      { name: "Blender", logo: SiBlender }
    ] 
  },
];

function Skills(){return <PageLayout><main className="mx-auto max-w-7xl px-5 py-16 lg:px-10"><header className="mb-14 grid items-center gap-8 lg:grid-cols-[1fr_20rem]"><div><p className="text-sm font-semibold uppercase text-accent">Ma boîte à outils</p><h1 className="mt-3 text-5xl text-primary sm:text-6xl">Web, mobile, IoT<br/>et intelligence artificielle.</h1><p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">Expertise en développement multiplateforme, programmation IoT avec LoRaWAN, et machine learning pour des solutions numériques innovantes.</p></div><img src={skillsPose} alt="Hiba travaillant sur ses compétences numériques" width={1024} height={1024} loading="lazy" className="mx-auto w-full max-w-xs object-contain" /></header><div className="grid gap-px overflow-hidden border border-primary/20 bg-primary/20 md:grid-cols-2 lg:grid-cols-4">{groups.map(({icon:Icon,title,items})=><section key={title} className="bg-background/95 p-7 backdrop-blur-sm lg:p-9"><Icon className="size-10 text-accent"/><h2 className="mt-5 text-3xl text-primary">{title}</h2><ul className="mt-7 grid gap-3">{items.map(({name,logo:Logo})=><li key={name} className="group flex items-center gap-3 border border-primary/15 bg-paper p-3 transition-colors hover:border-accent"><Logo aria-hidden="true" className="size-6 text-primary transition-colors group-hover:text-accent"/><span className="text-xs font-semibold text-foreground">{name}</span></li>)}</ul></section>)}</div></main></PageLayout>}