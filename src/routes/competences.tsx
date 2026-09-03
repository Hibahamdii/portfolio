import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  SiAngular,
  SiBlender,
  SiCss,
  SiDart,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpenjdk,
  SiPandas,
  SiPhp,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import { PageLayout } from "@/components/page-layout";
import { PageTransition } from "@/components/page-transition";
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

const skills = [
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiOpenjdk,
  SiUnity,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiFigma,
  SiBlender,
  SiDocker,
  SiGit,
  SiGithub,
];

type ContentWrapper = "main" | "section";

export function SkillsContent({ as: Wrapper = "main" }: { as?: ContentWrapper } = {}) {
  const useFallback = useIosTransparentVideoFallback();

  return (
    <Wrapper className="mx-auto max-w-7xl px-5 py-10 lg:px-10 lg:py-12">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden border border-primary/15 bg-background/90 px-4 py-8 shadow-[8px_8px_0_color-mix(in_oklab,var(--primary)_10%,transparent)] sm:px-7 lg:px-10"
      >
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

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {skills.map((Logo, index) => (
              <motion.div
                key={index}
                className="group flex aspect-square items-center justify-center border border-primary/10 bg-paper/85 p-3 shadow-[0_8px_20px_color-mix(in_oklab,var(--primary)_6%,transparent)] transition duration-300 hover:-translate-y-1 hover:border-accent/45"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <Logo
                  aria-hidden="true"
                  className="size-7 text-primary transition duration-300 group-hover:text-accent sm:size-9"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Wrapper>
  );
}

export default function Skills() {
  return (
    <PageLayout>
      <PageTransition>
        <SkillsContent />
      </PageTransition>
    </PageLayout>
  );
}