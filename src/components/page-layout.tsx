import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { FallingGarden } from "./interactive-hero-scene";

export function PageLayout({ children }: { children: ReactNode }) {
  return <div className="relative min-h-screen overflow-hidden bg-background neural-grid"><FallingGarden /><div className="relative z-10"><SiteHeader />{children}<SiteFooter /></div></div>;
}