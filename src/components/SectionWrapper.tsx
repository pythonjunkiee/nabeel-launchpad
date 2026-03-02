import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function SectionWrapper({
  children,
  id,
  className,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-24 md:py-40 relative", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            {title && (
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-primary">//</span> {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </motion.section>
  );
}

export { itemVariants, containerVariants };