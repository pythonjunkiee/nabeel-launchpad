import { useState, FormEvent } from "react";
import { motion, Variants } from "framer-motion";
import { Send, Lock, Mail, User, MessageSquare, Copy, Check, Linkedin, Github } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";
import { Terminal } from "../Terminal";
import { MagneticButton } from "../MagneticButton";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - will be replaced with Lovable Cloud
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("nxbeelanwar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Email Copied!",
      description: "nxbeelanwar@gmail.com",
    });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Let's build something amazing together"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <div className="glass p-6 md:p-8 rounded-2xl border border-border">
            {/* Terminal-style header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">
                Get in touch
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <User className="w-4 h-4 text-primary" />
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none font-mono"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Quick Contact & Terminal */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Quick Contact */}
          <div className="glass p-6 rounded-2xl border border-border">
            <h3 className="font-display text-lg font-semibold mb-4">
              Quick Connect
            </h3>

            <div className="space-y-3">
              {/* Email */}
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm font-mono">
                    nxbeelanwar@gmail.com
                  </span>
                </div>
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
              </button>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nxbeel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono">
                  linkedin.com/in/nxbeel
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/pythonjunkiee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono">github.com/pythonjunkiee</span>
              </a>
            </div>
          </div>

          {/* AI Lab Terminal */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">→</span> Interactive Terminal
            </h3>
            <Terminal />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}