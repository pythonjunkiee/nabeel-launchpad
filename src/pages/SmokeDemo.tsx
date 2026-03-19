/**
 * SmokeDemo.tsx — /smoke-demo route
 *
 * Shows three variants of SmokeBackground:
 *   Default  – neutral grey smoke
 *   Purple   – violet smoke tint
 *   Ember    – warm red/orange smoke tint
 *
 * Each card is a full-height section so you can scroll between them.
 */

import { useState } from "react";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

const variants = [
  {
    label:       "Default — Grey",
    smokeColor:  "#808080",
    description: "Neutral grey smoke. Use as a subtle atmospheric background.",
  },
  {
    label:       "Violet",
    smokeColor:  "#8A2BE2",
    description: "Purple-tinted wisps. Great for a mystical or creative aesthetic.",
  },
  {
    label:       "Ember",
    smokeColor:  "#FF4500",
    description: "Warm orange haze. Ideal for dramatic hero sections.",
  },
];

/** Static preset demos */
const Default    = () => <SmokeBackground />;
const Customized = () => <SmokeBackground smokeColor="#FF0000" />;

/** Interactive picker demo */
const Interactive = () => {
  const [color, setColor] = useState("#8A2BE2");

  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden">
      <SmokeBackground smokeColor={color} className="absolute inset-0" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
        <label className="text-white text-xs font-medium" htmlFor="smoke-color-picker">
          Smoke colour
        </label>
        <input
          id="smoke-color-picker"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-8 h-8 rounded-full cursor-pointer border-0 bg-transparent"
        />
        <span className="text-white/60 text-xs font-mono">{color}</span>
      </div>
    </div>
  );
};

export { Default, Customized, Interactive };

// ---------------------------------------------------------------------------
// Full demo page
// ---------------------------------------------------------------------------
export default function SmokeDemo() {
  return (
    <div className="min-h-screen bg-black font-poppins">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        <div>
          <h1 className="text-4xl font-medium text-white mb-3">
            SmokeBackground <em className="font-serif italic font-normal text-white/60" style={{ fontStyle: "italic" }}>demo</em>
          </h1>
          <p className="text-white/50 text-sm max-w-xl">
            A WebGL2 fragment-shader smoke animation. Pass any hex colour via{" "}
            <code className="text-white/80 bg-white/10 px-1.5 py-0.5 rounded text-xs">smokeColor</code>{" "}
            to tint the bright wisps.
          </p>
        </div>

        {/* Preset variants */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-white/70 uppercase tracking-widest text-xs">
            Preset variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {variants.map((v) => (
              <div key={v.label} className="rounded-2xl overflow-hidden border border-white/10">
                <div className="relative h-48">
                  <SmokeBackground smokeColor={v.smokeColor} className="absolute inset-0" />
                  <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white font-medium text-sm">{v.label}</span>
                  </div>
                </div>
                <div className="bg-white/5 p-4">
                  <p className="text-white/50 text-xs leading-relaxed">{v.description}</p>
                  <code className="text-white/40 text-[10px] font-mono mt-2 block">{v.smokeColor}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive picker */}
        <div className="space-y-4">
          <h2 className="text-white/70 uppercase tracking-widest text-xs">Interactive</h2>
          <Interactive />
        </div>

        {/* Usage snippet */}
        <div className="space-y-4">
          <h2 className="text-white/70 uppercase tracking-widest text-xs">Usage</h2>
          <pre className="bg-white/5 rounded-2xl p-6 text-xs text-white/70 font-mono overflow-x-auto leading-relaxed border border-white/10">
{`import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

// Default grey smoke
<SmokeBackground />

// With a custom tint colour
<SmokeBackground smokeColor="#8A2BE2" />

// As a full-screen fixed background layer
<div className="fixed inset-0 z-[2] opacity-25 mix-blend-screen pointer-events-none">
  <SmokeBackground smokeColor="#ffffff" />
</div>`}
          </pre>
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
        >
          ← Back to portfolio
        </a>
      </div>
    </div>
  );
}
