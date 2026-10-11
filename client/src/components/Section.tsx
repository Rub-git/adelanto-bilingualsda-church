import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "muted" | "primary" | "dark";
}

export function Section({ children, className, id, bg = "white" }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bgStyles = {
    white: "bg-background",
    muted: "bg-muted/50",
    primary: "bg-primary text-primary-foreground",
    dark: "bg-slate-900 text-white",
  };

  return (
    <section 
      id={id}
      className={cn("py-20 md:py-32 relative overflow-hidden", bgStyles[bg], className)}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
