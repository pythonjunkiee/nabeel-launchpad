import { motion } from "framer-motion";
import { Download, ArrowLeft, FileText, Award, Briefcase, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "@/components/MagneticButton";

const highlights = [
  { icon: Briefcase, label: "Experience", value: "Fresher (2025 Graduate)" },
  { icon: Code, label: "Focus", value: "ML & Computer Vision" },
  { icon: Award, label: "Achievement", value: "97.7% Detection Accuracy" },
];

const Resume = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Summary Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="glass p-6 rounded-2xl border border-border sticky top-8">
              <h1 className="font-display text-2xl font-bold mb-2">
                Nabeel Anwar Siddiqui
              </h1>
              <p className="text-primary font-medium mb-6">
                ML & Computer Vision Engineer
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-6">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Strengths */}
              <h3 className="font-semibold mb-3">Key Strengths</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Computer Vision",
                  "Deep Learning",
                  "Cloud Computing",
                  "End-to-end Prototypes",
                  "Research & Analysis",
                ].map((strength) => (
                  <span
                    key={strength}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {strength}
                  </span>
                ))}
              </div>

              {/* Download Button */}
              <MagneticButton variant="primary" className="w-full">
                <Download className="w-4 h-4" />
                Download PDF
              </MagneticButton>
            </div>
          </motion.div>

          {/* PDF Viewer Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl border border-border overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  Nabeel_Anwar_Siddiqui_Resume.pdf
                </span>
              </div>

              {/* PDF Placeholder */}
              <div className="aspect-[8.5/11] bg-muted/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">
                    Resume PDF
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Upload your resume PDF to display it here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The PDF viewer will be enabled once the file is uploaded
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;