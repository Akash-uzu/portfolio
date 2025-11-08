import { useState, useEffect } from "react";

type TerminalLoaderProps = {
  onFinish: () => void;
  messages?: string[];
  theme?: "cyber" | "green" | "purple" | "matrix" | "synthwave";
  speed?: number;
  showProgress?: boolean;
  enableScanlines?: boolean;
  enableGlitch?: boolean;
};

const themeStyles = {
  cyber: {
    bg: "from-slate-900 via-cyan-950 to-slate-900",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    accent: "text-cyan-300",
    header: "from-cyan-600/20 to-cyan-800/20",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    progressBg: "bg-cyan-950/50",
    progressBar: "bg-gradient-to-r from-cyan-500 to-blue-500",
    cursor: "bg-cyan-400",
  },
  green: {
    bg: "from-black via-green-950 to-black",
    border: "border-green-500/40",
    text: "text-green-400",
    accent: "text-green-300",
    header: "from-green-600/20 to-green-800/20",
    glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
    progressBg: "bg-green-950/50",
    progressBar: "bg-gradient-to-r from-green-500 to-emerald-500",
    cursor: "bg-green-400",
  },
  purple: {
    bg: "from-slate-900 via-purple-950 to-slate-900",
    border: "border-purple-500/30",
    text: "text-purple-400",
    accent: "text-purple-300",
    header: "from-purple-600/20 to-purple-800/20",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    progressBg: "bg-purple-950/50",
    progressBar: "bg-gradient-to-r from-purple-500 to-pink-500",
    cursor: "bg-purple-400",
  },
  matrix: {
    bg: "from-black via-emerald-950 to-black",
    border: "border-emerald-400/50",
    text: "text-emerald-300",
    accent: "text-emerald-200",
    header: "from-emerald-600/20 to-emerald-900/20",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.4)]",
    progressBg: "bg-emerald-950/50",
    progressBar: "bg-gradient-to-r from-emerald-400 to-green-400",
    cursor: "bg-emerald-300",
  },
  synthwave: {
    bg: "from-purple-900 via-pink-900 to-purple-900",
    border: "border-pink-500/40",
    text: "text-pink-300",
    accent: "text-yellow-300",
    header: "from-pink-600/30 to-purple-600/30",
    glow: "shadow-[0_0_40px_rgba(236,72,153,0.4)]",
    progressBg: "bg-purple-950/50",
    progressBar: "bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500",
    cursor: "bg-pink-400",
  },
};

const TerminalLoader = ({
  onFinish,
  messages = [
    " Initializing quantum core...",
    " Establishing secure connection...",
    " Loading neural network modules...",
    " Preparing interface systems...",
    " Boot sequence complete.",
  ],
  theme = "cyber",
  speed = 50,
  showProgress = true,
  enableScanlines = true,
  enableGlitch = false,
}: TerminalLoaderProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const t = themeStyles[theme];

  useEffect(() => {
    if (currentLine >= messages.length) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onFinish, 700);
      }, 300);
      return;
    }

    const msg = messages[currentLine];

    if (currentChar < msg.length) {
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
        setLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = msg.substring(0, currentChar + 1);
          return newLines;
        });
      }, speed * 0.35); 
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
        setProgress(((currentLine + 1) / messages.length) * 100);
      }, 90);
      return () => clearTimeout(timer);
    }
  }, [currentChar, currentLine, messages, onFinish, speed]);

  useEffect(() => {
    if (!enableGlitch) return;
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 2500);
    return () => clearInterval(interval);
  }, [enableGlitch]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br ${
        t.bg
      } flex items-center justify-center z-[200]
      transition-all duration-700 ease-out
      ${fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative w-full max-w-4xl px-6">
        <div
          className={`relative bg-black/40 backdrop-blur-xl border-2 ${
            t.border
          } ${t.glow}
          rounded-2xl overflow-hidden transition-transform duration-300
          ${glitch ? "translate-x-1 translate-y-1" : ""}`}
        >
          {enableScanlines && (
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]" />
          )}

          <div
            className={`bg-gradient-to-r ${t.header} border-b ${t.border} px-5 py-3 flex justify-between`}
          >
            <span className={`font-mono text-sm ${t.accent}`}>
              BOOT-CONSOLE :: AKASH-NODE
            </span>
            <span className={`text-xs ${t.text} opacity-60 font-mono`}>
              v4.2.1
            </span>
          </div>

          <div className="p-5 space-y-2 font-mono text-sm">
            {lines.map((line, i) => (
              <div key={i} className={`${t.text}`}>
                <span className={`${t.accent} opacity-50`}>
                  [{String(i + 1).padStart(2, "0")}]
                </span>{" "}
                {line}
                {i === currentLine && (
                  <span
                    className={`inline-block w-2 h-4 ${t.cursor} animate-pulse ml-1`}
                  />
                )}
              </div>
            ))}

            {showProgress && (
              <div className="pt-4">
                <div
                  className={`h-2 ${t.progressBg} rounded-full border ${t.border} overflow-hidden`}
                >
                  <div
                    className={`h-full ${t.progressBar} transition-all`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;
