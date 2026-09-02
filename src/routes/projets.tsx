import { createFileRoute } from "@tanstack/react-router";
import { Github, FileText, Presentation, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import projectHotelManagement from "@/assets/project-hotel-management.png";
import projectPortfolioMockup from "@/assets/project-portfolio-mockup.png";
import projectSmartIrrigationMockup from "@/assets/project-smart-irrigation-mockup.png";

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
    report_url: "/rapport-smart-irrigation.pdf",
    presentation_url: "https://1drv.ms/p/c/ea8750f8cea2756a/IQALnzzE2wkMR7SS6Sywn3NoAY8ZBh-gFjPWMSPaKqwcsfo",
    displayDate: "Feb 2026 - Jun 2026",
    image_url: projectSmartIrrigationMockup,
  },
  {
    id: "2",
    title: "Hotel Management System",
    category: "Web Application",
    description: "Système complet de gestion hôtelière pour numériser et automatiser les opérations. Gestion des réservations, check-in/out, facturation automatisée, et tableau de bord pour suivi du statut des chambres en temps réel.",
    tools: ["Python", "SQL", "Backend", "Database"],
    github_url: "https://github.com",
    report_url: "/rapport-hotel-management.pdf",
    presentation_url: "",
    displayDate: "Jul 2026",
    image_url: projectHotelManagement,
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
    image_url: projectPortfolioMockup,
  },
];

type ContentWrapper = "main" | "section";

export function ProjectsContent({ as: Wrapper = "main" }: { as?: ContentWrapper } = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentPage = Math.floor(activeIndex / itemsPerPage);
  const visibleProjects = projects.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setActiveIndex((currentPage + 1) * itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setActiveIndex((currentPage - 1) * itemsPerPage);
    }
  };
  return (
      <Wrapper className="mx-auto max-w-7xl px-5 py-10 lg:px-10 lg:py-12">
        <header className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent sm:text-sm">
            Projets / Portfolio
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            IoT, intelligence artificielle et developpement web - toujours avec une histoire
            a raconter.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {visibleProjects.map((p, index) => {
            return (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-primary/15 bg-paper transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <style>{`
                  @keyframes fadeInUp {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>

                {/* Image Section with Overlay */}
                {p.image_url && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                    <img
                      src={p.image_url}
                      alt={`Apercu du projet ${p.title}`}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="size-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Description Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <p className="text-sm leading-5 text-white">
                        {p.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="flex flex-col gap-3 p-5">
                  {/* Title and Date */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold text-primary line-clamp-2 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs text-accent/70">
                      {p.displayDate}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold uppercase bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 border border-primary/20 text-primary/70 rounded hover:border-accent hover:text-accent transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                    {p.tools.length > 3 && (
                      <span className="text-xs px-2 py-1 text-primary/50">
                        +{p.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 pt-2">
                    {p.github_url && (
                      <Button 
                        variant="garden" 
                        size="sm" 
                        asChild 
                        className="flex-1 gap-1.5 text-xs"
                      >
                        <a
                          href={p.github_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="size-3.5" />
                          Code
                        </a>
                      </Button>
                    )}
                    {p.report_url && (
                      <Button 
                        variant="gardenOutline" 
                        size="sm" 
                        asChild
                        className="flex-1 gap-1.5 text-xs"
                      >
                        <a
                          href={p.report_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FileText className="size-3.5" />
                          Rapport
                        </a>
                      </Button>
                    )}
                    {p.presentation_url && (
                      <Button 
                        variant="gardenOutline" 
                        size="sm" 
                        asChild
                        className="flex-1 gap-1.5 text-xs"
                      >
                        <a
                          href={p.presentation_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Presentation className="size-3.5" />
                          Présen.
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Navigation Bar */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between gap-8 mt-12 p-6 bg-background/40 backdrop-blur-sm border border-primary/10 rounded-xl">
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="p-2.5 rounded-full border border-primary/30 text-primary hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous projects"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className="p-2.5 rounded-full border border-primary/30 text-primary hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next projects"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 h-1 bg-primary/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-accent/60 transition-all duration-500"
                style={{
                  width: `${((currentPage + 1) / totalPages) * 100}%`,
                }}
              />
            </div>

            {/* Counter */}
            <div className="text-right">
              <p className="text-2xl font-bold text-accent">
                {currentPage + 1}
              </p>
            </div>
          </div>
        )}
      </Wrapper>
  );
}

export default function Projects() {
  return (
    <PageLayout>
      <ProjectsContent />
    </PageLayout>
  );
}
