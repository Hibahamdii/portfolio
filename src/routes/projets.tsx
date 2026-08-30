import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            return (
              <article
                key={p.id}
                className="group relative flex overflow-hidden rounded-md border border-primary/15 bg-paper transition duration-300 hover:-translate-y-2 hover:shadow-[0_16px_0_color-mix(in_oklab,var(--primary)_22%,transparent)]"
              >
                <div className="flex w-full flex-col">
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
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
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
                    <div className="mt-auto flex items-center gap-3 pt-8">
                      {p.github_url && (
                        <Button variant="garden" asChild>
                          <a
                            href={p.github_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Code Source <Github />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </PageLayout>
  );
}
