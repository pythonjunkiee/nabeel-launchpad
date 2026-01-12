import { useState, useRef, KeyboardEvent } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  type: "input" | "output";
  content: string;
}

const commands: Record<string, string> = {
  whoami:
    "Nabeel Anwar Siddiqui – Software Developer Engineer based in Abu Dhabi, building intelligent systems and scalable applications.",
  ls: `
📁 Projects:
  ├── illegal-fishing-detection  (97.7% accuracy)
  ├── gan-satellite-restoration  (0.941 SSIM)
  ├── cloud-load-balancing       (SIOT Reapress)
  └── qlub-payment-integration   (85+ restaurants)
`,
  skills: `
🧠 Skills:
  ├── Languages: Python, C, SQL, JavaScript
  ├── ML/DL: TensorFlow, PyTorch, Keras, OpenCV
  ├── Tools: AWS, Docker, Git, Power BI
  └── Domains: Computer Vision, Cloud Computing
`,
  contact: `
📬 Contact:
  ├── Email: nabeelansiddiqui786@gmail.com
  ├── LinkedIn: linkedin.com/in/nabeel-anwar-siddiqui
  └── GitHub: github.com/pythonjunkiee
`,
  working: `
🚀 Currently Working On:
  ├── Project: AI-Powered Maritime Surveillance System
  ├── Stack: Python, TensorFlow, Streamlit, AWS
  ├── Status: In Development 🔧
  └── Goal: Real-time illegal fishing detection with satellite imagery
`,
  help: `
Available commands:
  ├── whoami   → Who is Nabeel?
  ├── ls       → List projects
  ├── skills   → View skill stack
  ├── working  → Current project
  ├── contact  → Get in touch
  ├── clear    → Clear terminal
  └── help     → Show this menu
`,
  clear: "CLEAR",
};

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content: '🖥️  Welcome to Nabeel\'s AI Lab Terminal. Type "help" for commands.',
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "clear") {
      setLines([
        {
          type: "output",
          content: '🖥️  Terminal cleared. Type "help" for commands.',
        },
      ]);
      return;
    }

    const output = commands[trimmedCmd];

    setLines((prev) => [
      ...prev,
      { type: "input", content: cmd },
      {
        type: "output",
        content: output || `Command not found: ${cmd}. Type "help" for available commands.`,
      },
    ]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={focusInput}
      className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-border shadow-2xl"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-muted-foreground font-mono ml-2">
          ai-lab-terminal
        </span>
      </div>

      {/* Terminal Body */}
      <div className="terminal p-4 h-64 overflow-y-auto font-mono text-sm">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`mb-2 ${line.type === "input" ? "text-primary" : "text-muted-foreground"}`}
          >
            {line.type === "input" && (
              <span className="text-primary">$ </span>
            )}
            <span className="whitespace-pre-wrap">{line.content}</span>
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center">
          <span className="text-primary">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-foreground ml-1 caret-primary"
            placeholder="Type a command..."
            autoFocus
          />
          <span className="animate-blink text-primary">▋</span>
        </div>
      </div>
    </motion.div>
  );
}