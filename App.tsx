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

      ctx.fillStyle = "#06b6d4";
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
      className="fixed top-0 left-0 w-full h-full z-[-1] opacity-100"
    ></canvas>
  );
};

const Preloader: React.FC = () => {
  useEffect(() => {
    const preloaderTextElement = document.getElementById("preloader-text");
    const statusElement = document.getElementById("preloader-status");
    if (!preloaderTextElement || !statusElement) return;

    // const lines = [
    //   "Initiating synthetic consciousness...",
    //   "Linking to Akash's neural grid...",
    //   "Retrieving solo dev logs...",
    //   "Syncing React Native skill modules...",
    //   "Extracting clean UI from memory banks...",
    //   "Translating thoughts into components...",
    //   "Finalizing deployment matrix...",
    //   "Synchronization complete — Akash's portfolio is ready.",
    // ];
    const lines = [
      "Initiating consciousness...",
      "Connecting to Akash's neural network...",
      "Collecting all his projects...",
      "Loading skill modules...",
      "Analyzing UI for maximum coolness...",
      "Translating thoughts into components...",
      "Finalizing deployment matrix...",
      "Synchronization complete. Akash's portfolio is ready.",
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentHtml = "";
    let timeoutId: number;

    const type = () => {
      if (lineIndex < lines.length) {
        if (lineIndex === 2)
          statusElement.innerText = "CALIBRATING AWESOMENESS...";
        if (lineIndex === 5) statusElement.innerText = "DEPLOYING CHAOS...";
        if (lineIndex === 8) statusElement.innerText = "SYSTEM READY.";

        if (charIndex < lines[lineIndex].length) {
          currentHtml += lines[lineIndex].charAt(charIndex);
          preloaderTextElement.innerHTML =
            currentHtml + '<span class="animate-ping">█</span>';
          charIndex++;
          timeoutId = window.setTimeout(type, 10);
        } else {
          currentHtml += "<br/>";
          lineIndex++;
          charIndex = 0;
          timeoutId = window.setTimeout(type, 150);
        }
      }
    };
    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => {
          if (preloader) preloader.style.display = "none";
          setIsLoading(false);
        }, 500);
      } else {
        setIsLoading(false);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-transparent font-sans leading-relaxed">
      <MatrixRain />
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
    </div>
  );
};

export default App;
