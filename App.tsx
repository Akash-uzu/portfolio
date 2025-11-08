import { useState } from "react";
import { TerminalLoader, MatrixRain } from "./src/components/Loader";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import About from "./src/components/About";
import AiChat from "./src/components/AiChat";
import Skills from "./src/components/Skills";
import Experience from "./src/components/Experience";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <TerminalLoader
          onFinish={() => setLoaded(true)}
          theme="cyber"
          messages={[
            "Initializing SYN-OS v5 Neural Kernel...",
            "Activating cognitive clusters...",
            "Loading identity profile: AKASH",
            "Connecting distributed neural matrix...",
            "Synchronizing skill modules...",
            "Preparing visual interface...",
            "Boot sequence complete. Welcome back.",
          ]}
          speed = {1}
        />
      )}

      {/* <MatrixRain /> */}

      {loaded && (
        <div className="bg-gray-950/80 backdrop-blur-sm min-h-screen">
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
    </>
  );
};

export default App;
