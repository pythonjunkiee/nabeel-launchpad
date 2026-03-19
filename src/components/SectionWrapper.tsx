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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function SectionWrapper({ children, id, className, title, subtitle }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-20 md:py-28 relative scroll-mt-4", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div variants={itemVariants} className="mb-14 md:mb-16">
            {title && (
              <h2 className="font-poppins font-medium text-3xl md:text-4xl lg:text-5xl text-white mb-3 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base text-white/50 max-w-2xl">
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
