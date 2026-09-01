import type { MouseEvent } from "react";
import { BrainCircuit, Braces, Code2, Database, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import homeHeroVideo from "@/assets/anim-laptop-floor-transparent.webm";

const techMarks = [
  { label: "Python", short: "Py", icon: Code2, position: "left-[2%] top-[16%]" },
  { label: "JavaScript", short: "JS", icon: Braces, position: "right-[2%] top-[8%]" },
  {
    label: "Intelligence artificielle",
    short: "IA",
    icon: BrainCircuit,
    position: "right-[-1%] top-[40%]",
  },
  { label: "Data Science", short: "Data", icon: Database, position: "left-[-2%] top-[47%]" },
] as const;

export function InteractiveHeroScene() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const y = useSpring(pointerY, { stiffness: 80, damping: 20 });

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 18);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 14);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      className="hero-scene relative mx-auto aspect-square w-full max-w-[560px]"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
    >
      <div className="absolute inset-[10%] rounded-[48%_52%_42%_58%] bg-forest-soft" />
      <div className="absolute inset-[17%] rounded-full border border-primary/20" />
      <div className="absolute inset-[24%] rounded-full border border-dashed border-accent/25" />

      {techMarks.map(({ label, short, icon: Icon, position }, index) => (
        <motion.div
          key={label}
          className={`tech-orbit absolute z-20 ${position}`}
          style={index % 2 === 0 ? { x, y } : { x: 0, y: 0 }}
          animate={{ translateY: [0, index % 2 === 0 ? -9 : 9, 0] }}
          transition={{ duration: 4 + index * 0.45, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12, rotate: index % 2 === 0 ? -3 : 3 }}
          aria-label={label}
          title={label}
        >
          <span className="grid size-12 place-items-center rounded-md border border-primary/25 bg-paper text-accent shadow-md sm:size-14">
            <Icon className="size-5 sm:size-6" aria-hidden="true" />
          </span>
          <span className="mt-1 block text-center text-[10px] font-semibold text-primary sm:text-xs">
            {short}
          </span>
        </motion.div>
      ))}

      <motion.video
        src={homeHeroVideo}
        alt="Animation du laptop avec fleur"
        className="absolute inset-0 z-10 h-full w-full object-contain drop-shadow-xl"
        style={{ x, y }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        autoPlay
        muted
        loop
      />

      <Sparkles
        className="absolute bottom-[13%] right-[12%] z-20 size-8 animate-pulse text-accent"
        aria-hidden="true"
      />
    </div>
  );
}

export function FallingGarden() {
  return (
    <div
      className="falling-garden pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {Array.from({ length: 14 }, (_, index) => (
        <span key={index} className={index % 3 === 0 ? "garden-petal" : "garden-leaf"} />
      ))}
    </div>
  );
}
