import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AiChat from "./components/AiChat";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);

    const rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#06b6d4"; // cyan-500
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] opacity-20"
    ></canvas>
  );
};

// in index.tsx

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === true) {
      return;
    }

    const textElement = document.getElementById("preloader-text");
    if (!textElement) return;

    const bootSequence = [
      { text: "Booting KERNEL v4.K4.5H...", delay: 50 },
      { text: "Initializing system resources...", delay: 100 },
      { text: "Loading user profile: AKASH E", delay: 100 },
      // This line will now render correctly
      {
        text: "[<span class='text-green-400'> OK </span>] Established connection to neural grid.",
        delay: 200,
      },
      { text: "Scanning memory for skills...", delay: 150 },
      { type: "progress", duration: 1500, label: "React Native" },
      { type: "progress", duration: 1200, label: "UI/UX Design" },
      { type: "progress", duration: 800, label: "Backend APIs" },
      {
        text: "[<span class='text-green-400'> OK </span>] Skill modules loaded.",
        delay: 200,
      },
      { text: "Analyzing project archives...", delay: 100 },
      { text: "Decompressing creative assets...", delay: 300 },
      { text: "Rendering final output...", delay: 500 },
      { type: "art" },
      { text: "System ready. Welcome.", delay: 300 },
    ];

    const asciiArt = `
<pre class="text-cyan-300">
      .o.       oooo    oooo       .o.        .oooooo..o ooooo   ooooo 
     .888.       888   .8P'       .888.      d8P'     Y8  888'    888' 
    .8"888.      888  d8'        .8"888.     Y88bo.       888     888  
   .8'  888.     88888[         .8'  888.      "Y8888o.   888ooooo888  
  .88ooo8888.    888 88b.      .88ooo8888.         "Y88b  888     888  
 .8'      888.   888   88b.   .8'      888.  oo     .d8P  888     888  
o88o     o8888o o888o  o888o o88o     o8888o 8""88888P'  o888o   o888o                                               
</pre>`;

    const typeLine = async (line: string, element: HTMLElement) => {
      let currentLine = "";
      for (let i = 0; i < line.length; i++) {
        currentLine += line.charAt(i);
        element.innerHTML = currentLine;
        textElement.scrollTop = textElement.scrollHeight;
        await sleep(15 + Math.random() * 15);
      }
    };

    const renderProgressBar = async (duration: any, label: any) => {
      const line = document.createElement("div");
      textElement.appendChild(line);

      let bar = "[";
      const totalSteps = 40;
      line.innerHTML = `<span class="text-yellow-400">${label.padEnd(
        15
      )}</span>: ${bar}`;

      for (let i = 0; i < totalSteps; i++) {
        bar += "█";
        line.innerHTML = `<span class="text-yellow-400">${label.padEnd(
          15
        )}</span>: <span class="text-cyan-400">${bar.padEnd(
          totalSteps + 1,
          " "
        )}]</span>`;
        textElement.scrollTop = textElement.scrollHeight;
        await sleep(duration / totalSteps);
      }
      line.innerHTML += " <span class='text-green-400'>DONE</span>";
    };

    const runBootSequence = async () => {
      for (const item of bootSequence) {
        textElement.scrollTop = textElement.scrollHeight;

        if (item.type === "progress") {
          await renderProgressBar(item.duration, item.label);
        } else if (item.type === "art") {
          const artElement = document.createElement("div");
          artElement.innerHTML = asciiArt;
          textElement.appendChild(artElement);
        } else {
          const lineElement = document.createElement("div");
          textElement.appendChild(lineElement);
          lineElement.classList.add("typing-effect");
          await typeLine(`> ${item.text}`, lineElement);
          lineElement.classList.remove("typing-effect");
        }
        if (item.delay) {
          await sleep(item.delay);
        }
      }

      await sleep(500);
      onComplete();
    };

    runBootSequence();

    return () => {
      effectRan.current = true;
    };
  }, [onComplete]);

  return null;
};
const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloadComplete = () => {
    const preloader = document.getElementById("preloader");
    const root = document.getElementById("root");
    if (preloader && root) {
      preloader.style.opacity = "0";
      root.style.opacity = "1";
      setTimeout(() => {
        preloader.style.display = "none";
        setIsLoaded(true);
      }, 1000);
    }
  };

  return (
    <>
      <Preloader onComplete={handlePreloadComplete} />
      <div className="min-h-screen bg-transparent font-sans leading-relaxed">
        <MatrixRain />
        {isLoaded && (
          <div className="bg-gray-950/80 backdrop-blur-sm">
            <Header />
            <main className="container mx-auto max-w-5xl px-4 py-8">
              <Hero />
              <About />
              <AiChat />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
