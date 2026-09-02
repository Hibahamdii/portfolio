import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactImage from "@/assets/woman-typing-outfit-transparent.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Hiba Hamdi" },
      {
        name: "description",
        content: "Contactez Hiba Hamdi pour une collaboration en developpement web, IoT et IA.",
      },
      { property: "og:title", content: "Contact - Hiba Hamdi" },
      {
        property: "og:description",
        content: "Une idee IoT ou projet IA a developper ? Ecrivez a Hiba.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type ContentWrapper = "main" | "section";

export function ContactContent({ as: Wrapper = "main" }: { as?: ContentWrapper } = {}) {
  const [sent, setSent] = useState(false);

  return (
      <Wrapper className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-12">
        <section className="self-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent sm:text-sm">
            Contact / Collaboration
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Developpeuse IoT & IA passionnee par les projets qui allient technologie, innovation et
            impact. Disponible pour stages, collaborations et defis techniques.
          </p>

          <div className="mt-7 space-y-4 text-sm text-primary">
            <p className="flex items-center gap-3">
              <Mail className="text-accent" />
              hiba.hamdi@atis.tn
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-accent" />
              Sidi Bouzid, Tunisie
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/hiba-h-038b71395"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-accent transition hover:text-primary"
              >
                <Linkedin className="size-5" /> LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-accent transition hover:text-primary"
              >
                <Github className="size-5" /> GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="grid items-end gap-8 lg:grid-cols-[1fr_18rem]">
          <form
            className="self-center border-l-2 border-primary bg-background/80 p-7 sm:p-10"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <label className="text-sm font-medium" htmlFor="name">
              Votre nom
            </label>
            <Input id="name" required className="mt-2 mb-6 bg-paper" />

            <label className="text-sm font-medium" htmlFor="email">
              Votre e-mail
            </label>
            <Input id="email" type="email" required className="mt-2 mb-6 bg-paper" />

            <label className="text-sm font-medium" htmlFor="message">
              Votre message
            </label>
            <Textarea id="message" required rows={7} className="mt-2 mb-6 bg-paper" />

            <Button variant="garden" size="lg" type="submit">
              Envoyer le message <ArrowUpRight />
            </Button>

            {sent && (
              <p className="mt-5 text-sm font-medium text-primary" role="status">
                Merci ! Votre message a ete envoye.
              </p>
            )}
          </form>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div className="absolute inset-x-8 bottom-4 h-20 rounded-full bg-forest-soft blur-2xl" />
            <img
              src={contactImage}
              alt="Illustration de Hiba pour la page contact"
              className="relative mx-auto w-full object-contain"
            />
          </div>
        </section>
      </Wrapper>
  );
}

export default function Contact() {
  return (
    <PageLayout>
      <ContactContent />
    </PageLayout>
  );
}
