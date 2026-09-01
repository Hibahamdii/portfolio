import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { BrainCircuit, BriefcaseBusiness, CodeXml, FileText } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import experienceVideo from "@/assets/anim-whiteboard-transparent.webm";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience - Hiba Hamdi" },
      {
        name: "description",
        content: "Les experiences de Hiba Hamdi en developpement multimedia, Data et IA.",
      },
      { property: "og:title", content: "Experience - Hiba Hamdi" },
      {
        property: "og:description",
        content:
          "Un parcours pratique entre developpement, creation numerique et intelligence artificielle.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

const steps = [
  {
    year: "2023-2024",
    title: "Formation & premiers stages",
    company: "Higher Institute of Technological Studies of Sidi Bouzid & Tunisie Telecom",
    text: "Debuts a la Higher Institute of Technological Studies of Sidi Bouzid. Stage d'initiation a Tunisie Telecom (telecom infrastructure). Decouverte des fondamentaux du developpement.",
    attestationUrl: "",
    icon: CodeXml,
  },
  {
    year: "2025-2026",
    title: "Projet de fin d'etudes - IoT & IA",
    company: "Smart Ways Innovation",
    text: "Stage PFE a Smart Ways Innovation. Developpement d'un systeme intelligent d'irrigation basé sur LoRaWAN, prediction meteorologique et IA. Competences: Angular, Flutter, IoT, machine learning.",
    attestationUrl: "",
    icon: BrainCircuit,
  },
  {
    year: "Juillet 2026 - Auj.",
    title: "Stage de perfectionnement professionnel",
    company: "ATS Informatique Sidi Bouzid",
    text: "ATS Informatique Sidi Bouzid. Consolidation des competences en developpement et apprentissage des procedures professionnelles. Travail sur des projets reels.",
    attestationUrl: "",
    icon: BriefcaseBusiness,
  },
];

const highlights = ["Design", "Code", "Data", "IA"];

function Experience() {
  return (
    <PageLayout>
      <main className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-18">
        <header className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-semibold uppercase text-accent">Mon parcours pratique</p>
            <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-[1.05] text-primary sm:text-6xl">
              Une progression entre creation, technique et experimentation.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Chaque experience m'aide a transformer une idee en interface, un besoin en prototype,
              et une curiosite technique en projet concret.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-px overflow-hidden border border-primary/20 bg-primary/20 sm:grid-cols-4">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="bg-background px-4 py-3 text-center text-xs font-semibold uppercase text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="absolute inset-x-10 bottom-4 h-24 rounded-full bg-forest-soft blur-2xl" />
            <video
              src={experienceVideo}
              className="relative mx-auto w-full max-w-sm object-contain"
              autoPlay
              muted
              loop
            />
          </motion.div>
        </header>

        <section className="mt-16 grid gap-10 lg:grid-cols-[18rem_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase text-accent">Timeline</p>
            <h2 className="mt-3 text-4xl text-primary">Etapes cles</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Une lecture simple du parcours, du multimedia vers la data et l'IA.
            </p>
          </aside>

          <div className="relative space-y-4 before:absolute before:left-0 before:top-5 before:h-[calc(100%-2.5rem)] before:w-px before:bg-primary/15">
            {steps.map((step, index) => {
              return (
                <motion.article
                  key={step.year}
                  className="relative rounded-lg border border-primary/15 bg-paper p-6 transition duration-300 hover:border-accent/50 hover:shadow-lg"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="flex flex-col gap-3">
                    {/* Title and Year */}
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                      <span className="text-xs font-semibold uppercase text-accent mt-1 block">{step.year}</span>
                    </div>

                    {/* Company Name */}
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">{step.company}</span>
                    </p>

                    {/* Attestation */}
                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-primary/15 pt-4">
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-md border border-primary/20 bg-background text-accent">
                          <FileText className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-primary">Attestation de stage</p>
                          <p className="text-xs text-muted-foreground">
                            {step.attestationUrl ? "Document disponible" : "Document a ajouter"}
                          </p>
                        </div>
                      </div>

                      {step.attestationUrl ? (
                        <a
                          href={step.attestationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-accent transition-colors hover:text-primary"
                        >
                          Voir
                        </a>
                      ) : (
                        <span className="rounded-md border border-dashed border-primary/30 px-3 py-2 text-xs font-semibold uppercase text-primary/60">
                          PDF / Image
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>


      </main>
    </PageLayout>
  );
}
