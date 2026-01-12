import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  trigger: number; // Scroll percentage to trigger
}

const achievements: Achievement[] = [
  {
    id: "fishing",
    title: "97.7% Accuracy Achieved",
    description: "Illegal Fishing Detection System",
    trigger: 50,
  },
  {
    id: "research",
    title: "Cloud Research Published",
    description: "Load Balancing Strategies – SIOT Reapress",
    trigger: 80,
  },
];

export function AchievementBadge() {
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(
    []
  );
  const [currentAchievement, setCurrentAchievement] =
    useState<Achievement | null>(null);
  const [dismissed, setDismissed] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      achievements.forEach((achievement) => {
        if (
          scrollPercent >= achievement.trigger &&
          !unlockedAchievements.includes(achievement.id) &&
          !dismissed.includes(achievement.id)
        ) {
          setUnlockedAchievements((prev) => [...prev, achievement.id]);
          setCurrentAchievement(achievement);

          // Auto-dismiss after 4 seconds
          setTimeout(() => {
            setCurrentAchievement(null);
          }, 4000);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [unlockedAchievements, dismissed]);

  const dismissAchievement = () => {
    if (currentAchievement) {
      setDismissed((prev) => [...prev, currentAchievement.id]);
      setCurrentAchievement(null);
    }
  };

  return (
    <AnimatePresence>
      {currentAchievement && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="glass rounded-xl border border-primary/30 p-4 shadow-xl shadow-primary/10">
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="p-2 rounded-lg bg-primary/20 animate-glow-pulse">
                <Trophy className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                  Achievement Unlocked
                </p>
                <p className="font-display font-bold text-foreground">
                  {currentAchievement.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentAchievement.description}
                </p>
              </div>

              {/* Dismiss */}
              <button
                onClick={dismissAchievement}
                className="p-1 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 4, ease: "linear" }}
              className="mt-3 h-1 bg-primary/30 rounded-full origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}