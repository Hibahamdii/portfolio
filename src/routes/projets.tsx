import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, FileText, Presentation } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import projectEcolens from "@/assets/project-ecolens.jpg";
import projectMedina from "@/assets/project-medina.jpg";
import projectNabta from "@/assets/project-nabta.jpg";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets - Hiba Hamdi" },
      {
        name: "description",
        content: "Projets web, multimedia et IA imagines par Hiba Hamdi.",
      },
      { property: "og:title", content: "Projets - Hiba Hamdi" },
      {
        property: "og:description",
        content: "Une selection de creations numeriques entre nature et technologie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    id: "1",
    title: "Système intelligent d'irrigation LoRaWAN",
    category: "IoT & IA",
    description: "Plateforme d'agriculture intelligente avec capteurs (humidité/température). L'IA combine données météorologiques et historique pour prédire les besoins en eau. Interface mobile pour alertes et contrôle, tableau de bord web pour gestion des parcelles.",
    tools: ["Angular", "Flutter", "LoRaWAN", "Machine Learning", "MQTT"],
    github_url: "https://github.com",
    report_url: "/assets/rapport-smart-irrigation.pdf",
    presentation_url: "https://1drv.ms/p/c/ea8750f8cea2756a/IQALnzzE2wkMR7SS6Sywn3NoAY8ZBh-gFjPWMSPaKqwcsfo",
    displayDate: "Feb 2026 - Jun 2026",
    image_url: projectNabta,
  },
  {
    id: "2",
    title: "Hotel Management System",
    category: "Web Application",
    description: "Système complet de gestion hôtelière pour numériser et automatiser les opérations. Gestion des réservations, check-in/out, facturation automatisée, et tableau de bord pour suivi du statut des chambres en temps réel.",
    tools: ["Python", "SQL", "Backend", "Database"],
    github_url: "https://github.com",
    report_url: "/assets/rapport-hotel-management.pdf",
    presentation_url: "",
    displayDate: "Jul 2026",
    image_url: projectEcolens,
  },
  {
    id: "3",
    title: "Portfolio Multimédia",
    category: "Web Design",
    description: "Portfolio créatif mettant en valeur les projets et compétences à travers une interface intuitive et responsive. Intégration de multimedia, animations fluides et expérience utilisateur optimisée.",
    tools: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github_url: "https://github.com",
    report_url: "",
    presentation_url: "",
    displayDate: "2026",
    image_url: projectMedina,
  },
];

function Projects() {
  return (
    <PageLayout>
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-accent">
            Mon laboratoire creatif
          </p>
          <h1 className="text-5xl text-primary sm:text-6xl">
            Des idees qui prennent racine.
          </h1>
          <p className="mt-5 font-editorial text-2xl text-muted-foreground">
            IoT, intelligence artificielle et developpement web - toujours avec une histoire
            a raconter.
          </p>
        </header>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-min">
            {projects.map((p) => {
              return (
                <article
                  key={p.id}
                  className="group relative flex flex-col overflow-hidden rounded-md border border-primary/15 bg-paper transition duration-300 hover:-translate-y-2 hover:shadow-[0_16px_0_color-mix(in_oklab,var(--primary)_22%,transparent)] w-[400px] flex-shrink-0"
                >
                  <div className="flex w-full flex-col h-full">
                    {p.image_url && (
                      <div className="aspect-[3/2] overflow-hidden border-b border-primary/15">
                        <img
                          src={p.image_url}
                          alt={`Apercu du projet ${p.title}`}
                          width={1200}
                          height={800}
                          loading="lazy"
                          className="size-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="relative flex grow flex-col p-7">
                      <span className="text-xs font-semibold uppercase text-accent">
                        {p.category}
                      </span>
                      <h2 className="mt-6 text-3xl text-primary">{p.title}</h2>
                      <p className="mt-2 text-xs text-accent">{p.displayDate}</p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground line-clamp-3">
                        {p.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tools.map((tool) => (
                          <span
                            key={tool}
                            className="border border-primary/20 px-2 py-1 text-xs text-primary"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex flex-col gap-3 pt-8">
                        <div className="flex gap-2">
                          {p.github_url && (
                            <Button variant="garden" size="sm" asChild className="flex-1">
                              <a
                                href={p.github_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Github className="size-4" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {p.report_url && (
                            <Button variant="gardenOutline" size="sm" asChild className="flex-1">
                              <a
                                href={p.report_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FileText className="size-4" />
                                Rapport
                              </a>
                            </Button>
                          )}
                          {p.presentation_url && (
                            <Button variant="gardenOutline" size="sm" asChild className="flex-1">
                              <a
                                href={p.presentation_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Presentation className="size-4" />
                                Présentation
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
