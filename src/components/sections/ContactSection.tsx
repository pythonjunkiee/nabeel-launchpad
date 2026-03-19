import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Copy, Check, Linkedin, Github } from "lucide-react";
import { SectionWrapper, itemVariants } from "../SectionWrapper";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/nxbeelanwar@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Could not send message. Please try again later.", variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("nxbeelanwar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ title: "Email Copied!", description: "nxbeelanwar@gmail.com" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-2xl text-white text-sm outline-none transition-all font-poppins" +
    " placeholder:text-white/30 bg-white/[0.06] ring-1 ring-white/15 focus:ring-white/35 focus:bg-white/[0.10]";

  return (
    <SectionWrapper id="contact" title="Contact" subtitle="Let's build something amazing together">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <motion.div variants={itemVariants}>
          <div className="liquid-glass rounded-3xl p-6 md:p-8">
            {/* macOS traffic-light dots */}
            <div className="flex items-center gap-1.5 mb-6">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#ff5f57" }} />
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#febc2e" }} />
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#28c840" }} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest">
                  <User className="w-3.5 h-3.5" /> Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest">
                  <Mail className="w-3.5 h-3.5" /> Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest">
                  <MessageSquare className="w-3.5 h-3.5" /> Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full liquid-glass-strong rounded-full flex items-center justify-center gap-2 px-6 py-3 text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
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

        {/* Quick connect */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="liquid-glass rounded-3xl p-6">
            {/* macOS traffic-light dots */}
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#ff5f57" }} />
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#febc2e" }} />
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#28c840" }} />
            </div>
            <h3 className="font-poppins font-medium text-white text-sm mb-5">Quick Connect</h3>
            <div className="space-y-3">
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-4 liquid-glass rounded-2xl text-left hover:scale-[1.02] transition-transform group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white/70" />
                  </div>
                  <span className="text-sm text-white/70 font-mono">nxbeelanwar@gmail.com</span>
                </div>
                {copied
                  ? <Check className="w-4 h-4 text-white/60" />
                  : <Copy className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />}
              </button>

              <a
                href="https://www.linkedin.com/in/nxbeel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-4 liquid-glass rounded-2xl hover:scale-[1.02] transition-transform"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-white/70" />
                </div>
                <span className="text-sm text-white/70 font-mono">linkedin.com/in/nxbeel</span>
              </a>

              <a
                href="https://github.com/pythonjunkiee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-4 liquid-glass rounded-2xl hover:scale-[1.02] transition-transform"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Github className="w-4 h-4 text-white/70" />
                </div>
                <span className="text-sm text-white/70 font-mono">github.com/pythonjunkiee</span>
              </a>
            </div>
          </div>

          {/* Availability note */}
          <div className="liquid-glass rounded-3xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="text-xs text-white/50 uppercase tracking-widest">Status</span>
            </div>
            <p className="text-white font-medium text-sm">Open to Roles</p>
            <p className="text-white/40 text-xs mt-1">Abu Dhabi, UAE · Remote-friendly</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
