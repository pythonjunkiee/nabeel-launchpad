import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Menu,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Bloom() {
  return (
    <div
      className="relative min-h-screen overflow-hidden font-poppins"
      style={{ "--radius": "1rem" } as React.CSSProperties}
    >
      {/* ── Video Background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Main two-panel layout ── */}
      <div className="relative z-10 flex min-h-screen">
        {/* ════════════════════════════════════════
            LEFT PANEL  —  w-full on mobile, 52% on lg
            ════════════════════════════════════════ */}
        <div className="relative w-full lg:w-[52%] flex flex-col min-h-screen">
          {/* Glass overlay card */}
          <div className="absolute inset-4 lg:inset-6 liquid-glass-strong rounded-3xl" />

          {/* All left content lives above the overlay */}
          <div className="relative z-10 flex flex-col h-full min-h-screen">
            {/* ── Nav ── */}
            <nav className="flex items-center justify-between px-8 pt-8 pb-4">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="bloom logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="font-semibold text-2xl tracking-tighter text-white select-none">
                  bloom
                </span>
              </div>

              <button className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-white/80 text-sm hover:scale-105 active:scale-95 transition-transform">
                <Menu className="w-4 h-4" />
                Menu
              </button>
            </nav>

            {/* ── Hero Center ── */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-8">
              <img
                src="/logo.png"
                alt="bloom"
                width={80}
                height={80}
                className="rounded-2xl mb-8 opacity-90"
              />

              <h1
                className="text-6xl lg:text-7xl font-medium text-white mb-10 leading-[1.1]"
                style={{ letterSpacing: "-0.05em" }}
              >
                Innovating the
                <br />
                spirit of{" "}
                <em className="font-serif text-white/80 not-italic italic font-normal">
                  bloom
                </em>{" "}
                AI
              </h1>

              {/* CTA button */}
              <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-3 text-white font-medium hover:scale-105 active:scale-95 transition-transform mb-8">
                Explore Now
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <Download className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Three feature pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {["Artistic Gallery", "AI Generation", "3D Structures"].map(
                  (label) => (
                    <span
                      key={label}
                      className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80"
                    >
                      {label}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* ── Bottom Quote ── */}
            <div className="px-8 pb-8 text-center">
              <p className="text-xs tracking-widest uppercase text-white/50 mb-3">
                Visionary Design
              </p>
              <blockquote className="text-white/80 text-base mb-4">
                <span className="font-poppins">&ldquo;We imagined a realm with </span>
                <span className="font-serif italic">no ending</span>
                <span className="font-poppins">.&rdquo;</span>
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-white/30" />
                <span className="text-xs text-white/50 tracking-widest uppercase">
                  Marcus Aurelio
                </span>
                <div className="h-px w-12 bg-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            RIGHT PANEL  —  hidden on mobile, 48% on lg
            ════════════════════════════════════════ */}
        <div className="hidden lg:flex w-[48%] flex-col p-6 gap-4">
          {/* ── Top bar ── */}
          <div className="flex items-center justify-between">
            {/* Social icons pill */}
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white/80 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <ArrowRight className="w-4 h-4 text-white/50" />
            </div>

            {/* Account button */}
            <button className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-white/80 text-sm hover:scale-105 active:scale-95 transition-transform">
              <Sparkles className="w-4 h-4" />
              Account
            </button>
          </div>

          {/* ── Community card ── */}
          <div className="liquid-glass rounded-3xl p-6 w-56">
            <h3 className="text-white font-medium mb-2 text-sm">
              Enter our ecosystem
            </h3>
            <p className="text-white/60 text-xs leading-relaxed">
              Join thousands of creators shaping the future of floral design
              with AI.
            </p>
          </div>

          {/* ── Bottom feature section ── */}
          <div className="mt-auto">
            <div className="liquid-glass rounded-[2.5rem] p-4 flex flex-col gap-3">
              {/* Two side-by-side feature cards */}
              <div className="flex gap-3">
                <div className="liquid-glass rounded-3xl p-5 flex-1 flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Wand2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Processing</p>
                    <p className="text-white/50 text-xs mt-1 leading-relaxed">
                      Real-time AI generation engine
                    </p>
                  </div>
                </div>

                <div className="liquid-glass rounded-3xl p-5 flex-1 flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      Growth Archive
                    </p>
                    <p className="text-white/50 text-xs mt-1 leading-relaxed">
                      Curated botanical library
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom feature card */}
              <div className="liquid-glass rounded-3xl p-4 flex items-center gap-4">
                <img
                  src="/assets/hero-flowers.png"
                  alt="flowers"
                  width={96}
                  height={64}
                  className="rounded-2xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm">
                    Advanced Plant Sculpting
                  </p>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed line-clamp-2">
                    Craft hyper-realistic 3D botanical forms driven by
                    generative AI.
                  </p>
                </div>
                <button className="liquid-glass w-8 h-8 rounded-full flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform flex-shrink-0 text-lg font-light">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
