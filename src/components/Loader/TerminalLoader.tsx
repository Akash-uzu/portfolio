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
    "⚡ Initializing quantum core...",
    "🔐 Establishing secure connection...",
    "📡 Loading neural network modules...",
    "🚀 Preparing interface systems...",
    "✨ Boot sequence complete.",
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

  const t = themeStyles[theme];

  useEffect(() => {
    if (currentLine >= messages.length) {
      setTimeout(onFinish, 500);
      return;
    }

    const message = messages[currentLine];

    if (currentChar < message.length) {
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
        setLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = message.substring(0, currentChar + 1);
          return newLines;
        });
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
        setProgress(((currentLine + 1) / messages.length) * 100);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentChar, currentLine, messages, onFinish, speed]);

  useEffect(() => {
    if (enableGlitch) {
      const glitchInterval = setInterval(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }, 3000);
      return () => clearInterval(glitchInterval);
    }
  }, [enableGlitch]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br ${t.bg} flex items-center justify-center z-[200] animate-in fade-in duration-500`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${t.cursor} rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-4xl px-4">
        <div
          className={`relative bg-black/40 backdrop-blur-xl border-2 ${
            t.border
          } rounded-2xl ${
            t.glow
          } overflow-hidden transform transition-all duration-300 ${
            glitch ? "translate-x-1 translate-y-1" : ""
          }`}
        >
          {enableScanlines && (
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none animate-pulse" />
          )}

          <div
            className={`relative bg-gradient-to-r ${t.header} backdrop-blur-sm border-b ${t.border} px-6 py-3 flex items-center justify-between`}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 animate-pulse" />
                <div
                  className="w-3 h-3 rounded-full bg-yellow-500/80 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
              <div
                className={`text-sm font-mono ${t.accent} flex items-center gap-2`}
              >
                <span className="animate-pulse">●</span>
                BOOT-CONSOLE :: AKASH-NODE
              </div>
            </div>
            <div className={`text-xs ${t.text} font-mono opacity-60`}>
              v4.2.1-quantum
            </div>
          </div>

          <div className="p-6 min-h-[300px] flex flex-col gap-3">
            <div className={`${t.text} font-mono text-sm space-y-2`}>
              {lines.map((line, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 animate-in slide-in-from-left duration-200"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className={`${t.accent} opacity-50 select-none`}>
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span className="flex-1">{line}</span>
                  {i === currentLine && (
                    <span
                      className={`inline-block w-2 h-4 ${t.cursor} animate-pulse ml-1`}
                    />
                  )}
                </div>
              ))}
            </div>

            {showProgress && (
              <div className="mt-auto pt-4">
                <div
                  className={`h-2 ${t.progressBg} rounded-full overflow-hidden backdrop-blur-sm border ${t.border}`}
                >
                  <div
                    className={`h-full ${t.progressBar} transition-all duration-300 ease-out relative overflow-hidden`}
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
                  </div>
                </div>
                <div
                  className={`text-xs ${t.text} opacity-60 mt-2 text-right font-mono`}
                >
                  {Math.round(progress)}% COMPLETE
                </div>
              </div>
            )}
          </div>

          <div
            className={`absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 ${t.border} rounded-tl-2xl`}
          />
          <div
            className={`absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 ${t.border} rounded-br-2xl`}
          />
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
export default TerminalLoader;
