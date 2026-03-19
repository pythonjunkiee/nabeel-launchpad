import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Satellite, Cloud, ExternalLink, Github,
  Layers, Hand, MapPin, ShoppingCart, ShoppingBag, Newspaper, ChevronDown,
} from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";

interface Project {
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  build?: string[];
  evaluate?: string[];
  improve?: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  links?: { label: string; href: string; icon: React.ElementType }[];
}

const projects: Project[] = [
  {
    title: "Illegal Fishing Detection System",
    category: "Deep Learning / GIS",
    icon: Satellite,
    description: "End-to-end CNN-based ship detection system achieving 97.7% accuracy on satellite imagery.",
    build: [
      "Developed CNN-based ship detection on 3,200+ satellite images with 97.7% accuracy",
      "Deployed as a Streamlit web app enabling live image upload and vessel detection",
      "Implemented GeoJSON mapping to detect Marine Protected Area intrusions",
    ],
    evaluate: [
      "Real-time inference and spatial mapping capabilities",
      "Ability to flag suspicious activity based on vessel patterns",
    ],
    improve: [
      "Integration with cloud pipelines for scalability",
      "Alerting systems for real-time notifications",
    ],
    tags: ["Python", "TensorFlow", "CNN", "Streamlit", "GeoJSON"],
    metrics: [{ label: "Accuracy", value: "97.7%" }, { label: "Images", value: "3,200+" }],
    links: [{ label: "GitHub", href: "https://github.com/pythonjunkiee/Illegal-Ship-Detection", icon: Github }],
  },
  {
    title: "GAN-Based Satellite Image Restoration",
    category: "Deep Learning",
    icon: Layers,
    description: "Comparative study of 5 GAN models for satellite de-clouding, achieving state-of-the-art results.",
    build: [
      "Compared 5 GAN models (Pix2Pix, CycleGAN, Attention GAN, etc.) for satellite de-clouding",
      "Processed 2000+ satellite images for training and evaluation",
    ],
    evaluate: [
      "Boosted SSIM by 12% and PSNR by 17% over baseline",
      "Achieved 33.2 dB PSNR, 0.941 SSIM, and 17.8 FID with Attention GAN",
    ],
    improve: ["Deployment on cloud for large-scale imagery processing"],
    tags: ["PyTorch", "GANs", "Pix2Pix", "CycleGAN", "Attention Mechanism"],
    metrics: [{ label: "PSNR", value: "33.2 dB" }, { label: "SSIM", value: "0.941" }, { label: "FID", value: "17.8" }],
    links: [{ label: "GitHub", href: "https://github.com/pythonjunkiee/generative-adversarial-networks", icon: Github }],
  },
  {
    title: "Cloud Load Balancing Research",
    category: "Research Paper",
    icon: Cloud,
    description: "Co-authored research analysing cloud load-balancing algorithms, published in SIOT Reapress.",
    tags: ["Cloud Computing", "Load Balancing", "Distributed Systems", "Research"],
    links: [{ label: "Publication", href: "https://siot.reapress.com/journal/article/view/34", icon: ExternalLink }],
  },
  {
    title: "Hand Gesture Recognition",
    category: "Computer Vision",
    icon: Hand,
    description: "Real-time ASL hand gesture recognition using MediaPipe and ML classifiers for live webcam inference.",
    build: [
      "Built real-time detection for 24 ASL characters (A-Y) using MediaPipe hand landmarks",
      "Implemented KNN and Random Forest classifiers for gesture classification",
    ],
    evaluate: ["Real-time webcam inference with visual bounding box feedback"],
    improve: ["Extend to full ASL alphabet including J, Z"],
    tags: ["Python", "MediaPipe", "OpenCV", "Scikit-learn", "KNN"],
    metrics: [{ label: "Characters", value: "24 ASL" }, { label: "Inference", value: "Real-time" }],
    links: [{ label: "GitHub", href: "https://github.com/pythonjunkiee/Hand-Guester-Recognition", icon: Github }],
  },
  {
    title: "MPA Intrusion Detection – GIS",
    category: "Geospatial Analysis",
    icon: MapPin,
    description: "GIS spatial analysis to detect vessel intrusions into Marine Protected Areas using GeoJSON data.",
    build: [
      "Spatial analysis pipeline using GeoPandas and Shapely",
      "Point-in-polygon analysis for vessel boundary detection",
    ],
    evaluate: ["Spatial join-based detection with Matplotlib visualisation"],
    improve: ["Integration with real-time AIS vessel tracking data"],
    tags: ["Python", "GeoPandas", "Shapely", "Matplotlib", "GeoJSON"],
    links: [{ label: "GitHub", href: "https://github.com/pythonjunkiee/GIS-intrusion-", icon: Github }],
  },
  {
    title: "Smart Sales Assistant",
    category: "ML / NLP",
    icon: ShoppingCart,
    description: "End-to-end sales intelligence platform with lead scoring, retrieval chatbot, and conversion forecasting.",
    build: [
      "Random Forest lead scoring model on mock CRM data",
      "TF-IDF retrieval-based chatbot for FAQ handling",
      "Prophet integration for monthly conversion forecasting",
    ],
    evaluate: ["Lead scoring pipeline with feature engineering"],
    improve: ["Replace chatbot with LLM-powered conversational agent"],
    tags: ["Python", "Scikit-learn", "Prophet", "TF-IDF", "Streamlit"],
    links: [{ label: "GitHub", href: "https://github.com/pythonjunkiee/Smart-Sales-assistant", icon: Github }],
  },
  {
    title: "Lyra Fashion",
    category: "Full-Stack Web App",
    icon: ShoppingBag,
    description: "A luxury fashion e-commerce storefront built with React and TypeScript — featuring a premium glass morphism UI, product catalog, and interactive shopping cart.",
    build: [
      "Built a luxury fashion storefront with React, TypeScript, and Vite featuring a glass morphism design system",
      "Designed a reusable component library — product cards, cart drawer, modals — using Tailwind CSS",
      "Implemented product catalog with category filtering, search, and responsive masonry-style grid",
      "Created a shopping cart with persistent local state and smooth Framer Motion animations",
      "Integrated Lucide React icons and custom micro-interactions for premium feel",
    ],
    evaluate: [
      "Fully responsive across all breakpoints with a mobile-first design approach",
      "Fast HMR development with Vite and end-to-end TypeScript type safety",
      "Premium UI with animated transitions, hover effects, and smooth page interactions",
    ],
    improve: [
      "Backend + auth via Supabase for user accounts, wishlists, and order history",
      "Stripe payment gateway integration for a full checkout flow",
      "AI outfit recommendation engine based on browsing and purchase history",
      "Admin dashboard for product and inventory management",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    links: [{ label: "GitHub", href: "https://github.com/pythonjunkiee/lyra-fashion-builder", icon: Github }],
  },
  {
    title: "UAE Insight Chronicle",
    category: "Full-Stack Web App",
    icon: Newspaper,
    description: "A UAE-focused platform delivering insights on news, events, and developments across the Emirates.",
    build: ["Work in progress"],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/pythonjunkiee/uae-insight-chronicle", icon: Github }],
  },
];

type TabKey = "build" | "evaluate" | "improve";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Record<number, TabKey>>({});
  const [expanded, setExpanded] = useState<number | null>(null);

  const getTab = (i: number): TabKey => activeTab[i] || "build";
  const setTab = (i: number, tab: TabKey) =>
    setActiveTab((prev) => ({ ...prev, [i]: tab }));

  return (
    <SectionWrapper
      id="projects"
      title="Projects & Research"
      subtitle="Building intelligent systems that solve real-world problems"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project, index) => {
          const isExpanded = expanded === index;
          const hasTabs = project.build || project.evaluate || project.improve;

          return (
            <motion.div
              key={project.title}
              variants={itemVariants}
              layout
              animate={isExpanded ? { scale: 1.03, zIndex: 10 } : { scale: 1, zIndex: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="liquid-glass rounded-3xl overflow-hidden flex flex-col group relative"
              style={{ transformOrigin: "center top" }}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    animate={isExpanded ? { scale: 1.12, rotate: 6 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                  >
                    <project.icon className="w-5 h-5 text-white/70" />
                  </motion.div>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white/45 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-poppins font-medium text-white text-base mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-white/48 leading-relaxed">{project.description}</p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="liquid-glass rounded-full px-3 py-1">
                        <span className="text-[10px] text-white/38">{m.label}: </span>
                        <span className="text-xs text-white font-medium">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Expand toggle */}
              {hasTabs && (
                <button
                  onClick={() => setExpanded(isExpanded ? null : index)}
                  className="mx-6 mb-3 flex items-center justify-between liquid-glass rounded-2xl px-4 py-2 text-xs text-white/45 hover:text-white/70 transition-colors"
                >
                  <span>{isExpanded ? "Collapse details" : "Expand details"}</span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.span>
                </button>
              )}

              {/* Expandable tabs */}
              <AnimatePresence>
                {isExpanded && hasTabs && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6">
                      <div className="flex gap-1 p-1 liquid-glass rounded-2xl mb-4">
                        {(["build", "evaluate", "improve"] as TabKey[])
                          .filter((tab) => project[tab] && project[tab]!.length > 0)
                          .map((tab) => (
                            <button
                              key={tab}
                              onClick={() => setTab(index, tab)}
                              className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-xl transition-all capitalize ${
                                getTab(index) === tab
                                  ? "bg-white/20 text-white"
                                  : "text-white/38 hover:text-white/65"
                              }`}
                            >
                              {tab}
                            </button>
                          ))}
                      </div>
                      <ul className="space-y-2 pb-4 min-h-[80px]">
                        {(project[getTab(index)] || []).map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                            className="text-sm text-white/48 flex items-start gap-2"
                          >
                            <span className="text-white/25 mt-0.5 shrink-0">▸</span>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer */}
              <div className="px-6 pb-6 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="liquid-glass rounded-full px-2.5 py-1 text-[10px] text-white/45">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div className="flex gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-glass rounded-full flex items-center gap-1.5 px-3 py-1.5 text-xs text-white/55 hover:text-white hover:scale-105 transition-all"
                      >
                        <link.icon className="w-3.5 h-3.5" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
