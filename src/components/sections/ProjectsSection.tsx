import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Satellite,
  Cloud,
  ExternalLink,
  Github,
  Layers,
  Hand,
  MapPin,
  ShoppingCart,
} from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";
import { TiltCard } from "../TiltCard";

interface Project {
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  build: string[];
  evaluate: string[];
  improve: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  links?: { label: string; href: string; icon: React.ElementType }[];
}

const projects: Project[] = [
  {
    title: "Illegal Fishing Detection System",
    category: "Computer Vision",
    icon: Satellite,
    description:
      "End-to-end CNN-based ship detection system achieving 97.7% accuracy on satellite imagery.",
    build: [
      "Developed CNN-based ship detection system on 3,200+ satellite images with 97.7% accuracy",
      "Deployed as a Streamlit web app enabling live image upload, vessel detection, and likelihood-based inference",
      "Implemented GeoJSON mapping to detect Marine Protected Area intrusions",
    ],
    evaluate: [
      "Real-time inference and spatial mapping capabilities",
      "Ability to flag suspicious activity based on vessel patterns",
    ],
    improve: [
      "Integration with cloud pipelines for scalability",
      "Alerting systems for real-time notifications",
      "Larger datasets for improved generalization",
    ],
    tags: ["Python", "TensorFlow", "CNN", "Streamlit", "GeoJSON"],
    metrics: [
      { label: "Accuracy", value: "97.7%" },
      { label: "Images", value: "3,200+" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/pythonjunkiee", icon: Github },
    ],
  },
  {
    title: "GAN-Based Satellite Image Restoration",
    category: "Deep Learning",
    icon: Layers,
    description:
      "Comparative study of 5 GAN models for satellite de-clouding, achieving state-of-the-art results.",
    build: [
      "Compared 5 GAN models (Pix2Pix, CycleGAN, Attention GAN, etc.) for satellite de-clouding",
      "Processed 2000+ satellite images for training and evaluation",
    ],
    evaluate: [
      "Applied attention modules to improve clarity",
      "Boosted SSIM by 12% and PSNR by 17% over baseline",
      "Achieved 33.2 dB PSNR, 0.941 SSIM, and 17.8 FID with Attention GAN leading in visual quality",
    ],
    improve: [
      "Deployment on cloud for large-scale imagery processing",
      "Real-time de-clouding pipeline integration",
    ],
    tags: ["PyTorch", "GANs", "Pix2Pix", "CycleGAN", "Attention Mechanism"],
    metrics: [
      { label: "PSNR", value: "33.2 dB" },
      { label: "SSIM", value: "0.941" },
      { label: "FID", value: "17.8" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/pythonjunkiee", icon: Github },
    ],
  },
  {
    title: "Cloud Load Balancing Research",
    category: "Research Paper",
    icon: Cloud,
    description:
      "Co-authored research analyzing cloud load-balancing algorithms published in SIOT Reapress.",
    build: [
      "Co-authored research analyzing cloud load-balancing algorithms: Min-Min, Max-Min, Round Robin",
      "Published in SIOT Reapress journal",
    ],
    evaluate: [
      "Assessed trade-offs in scalability, VM migration, algorithm overhead for distributed systems",
      "Comprehensive comparison of algorithm performance metrics",
    ],
    improve: [
      "Proposed improvements for dynamic workload handling",
      "Enhanced resource utilization strategies",
      "Improved fault tolerance mechanisms",
    ],
    tags: ["Cloud Computing", "Load Balancing", "Distributed Systems", "Research"],
    links: [
      { label: "Publication", href: "#", icon: ExternalLink },
    ],
  },
  {
    title: "Hand Gesture Recognition",
    category: "Computer Vision",
    icon: Hand,
    description:
      "Real-time ASL hand gesture recognition system using MediaPipe and ML classifiers for live webcam inference.",
    build: [
      "Built real-time hand gesture detection for 24 ASL characters (A-Y) using MediaPipe hand landmarks",
      "Implemented KNN and Random Forest classifiers for gesture classification",
      "Custom landmark normalization for translation-invariant recognition",
    ],
    evaluate: [
      "Real-time webcam inference with visual bounding box feedback",
      "Compared KNN vs Random Forest classifier performance",
      "Robust detection with 0.3 minimum confidence threshold",
    ],
    improve: [
      "Extend to full ASL alphabet including motion-based characters (J, Z)",
      "Add word/sentence formation from detected characters",
      "Deploy as web application for broader accessibility",
    ],
    tags: ["Python", "MediaPipe", "OpenCV", "Scikit-learn", "KNN", "Random Forest"],
    metrics: [
      { label: "Characters", value: "24 ASL" },
      { label: "Inference", value: "Real-time" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/pythonjunkiee/Hand-Guester-Recognition", icon: Github },
    ],
  },
  {
    title: "MPA Intrusion Detection – GIS Project",
    category: "Geospatial Analysis",
    icon: MapPin,
    description:
      "GIS-focused spatial analysis project to detect vessel intrusions into Marine Protected Areas using GeoJSON data.",
    build: [
      "Developed spatial analysis pipeline using GeoPandas and Shapely for MPA intrusion detection",
      "Implemented point-in-polygon analysis to identify vessel positions within protected boundaries",
      "Processed GeoJSON data for MPA boundaries and vessel positions with CRS handling",
    ],
    evaluate: [
      "Spatial join-based detection of intruding vessels",
      "Matplotlib visualization of MPA boundaries and vessel positions",
      "Accurate CRS transformation for geospatial consistency",
    ],
    improve: [
      "Integration with real-time AIS vessel tracking data",
      "Interactive map dashboard using Folium or Leaflet",
      "Alert system for live intrusion notifications",
    ],
    tags: ["Python", "GeoPandas", "Shapely", "Matplotlib", "GeoJSON", "GIS"],
    links: [
      { label: "GitHub", href: "https://github.com/pythonjunkiee/GIS-intrusion-", icon: Github },
    ],
  },
  {
    title: "Smart Sales Assistant",
    category: "ML / NLP",
    icon: ShoppingCart,
    description:
      "End-to-end sales intelligence platform with lead scoring, retrieval-based chatbot, and conversion forecasting.",
    build: [
      "Built a Random Forest lead scoring model on mock CRM data",
      "Implemented TF-IDF retrieval-based chatbot for FAQ handling",
      "Integrated Prophet for monthly conversion forecasting",
      "Deployed all components via a Streamlit dashboard",
    ],
    evaluate: [
      "Lead scoring pipeline with preprocessing and feature engineering",
      "Chatbot retrieval accuracy on FAQ dataset",
      "Prophet forecast quality on time-series conversion data",
    ],
    improve: [
      "Replace retrieval chatbot with LLM-powered conversational agent",
      "Add real CRM integrations (Salesforce, HubSpot)",
      "Deploy as a production web app with authentication",
    ],
    tags: ["Python", "Scikit-learn", "Prophet", "TF-IDF", "Streamlit", "NLP"],
    links: [
      { label: "GitHub", href: "https://github.com/pythonjunkiee/Smart-Sales-assistant", icon: Github },
    ],
  },
];

type TabKey = "build" | "evaluate" | "improve";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Record<number, TabKey>>({});

  const getTab = (index: number): TabKey => activeTab[index] || "build";

  const setTab = (index: number, tab: TabKey) => {
    setActiveTab((prev) => ({ ...prev, [index]: tab }));
  };

  return (
    <SectionWrapper
      id="projects"
      title="Projects & Research"
      subtitle="Building intelligent systems that solve real-world problems"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={itemVariants}>
            <TiltCard>
              <div className="h-full glass rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-colors">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="px-3 py-1.5 rounded-lg bg-primary/10"
                        >
                          <span className="text-xs text-muted-foreground">
                            {metric.label}:{" "}
                          </span>
                          <span className="text-sm font-bold text-primary">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tabs */}
                <div className="px-6">
                  <div className="flex gap-1 p-1 rounded-lg bg-muted/50">
                    {(["build", "evaluate", "improve"] as TabKey[]).map(
                      (tab) => (
                        <button
                          key={tab}
                          onClick={() => setTab(index, tab)}
                          className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-md transition-all capitalize ${
                            getTab(index) === tab
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-6 pt-4 min-h-[160px]">
                  <ul className="space-y-2">
                    {project[getTab(index)].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">▸</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.links && (
                    <div className="flex gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                        >
                          <link.icon className="w-3.5 h-3.5" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}