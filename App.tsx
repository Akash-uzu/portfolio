import { useState } from "react";
import { TerminalLoader } from "./src/components/Loader";
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
          theme="matrix"
          speed={45}
          messages={[
            "Initializing system environment...",
            "Loading profile: AKASH E",
            "Primary stack: React and React Native",
            "Experience: End-to-end product development and deployment",
            "Focus areas: UI systems, rendering performance, scalable architecture",
            "Research interest: Machine Learning and AI-driven interfaces",
            "Current exploration: Using AI to enhance workflow and product reasoning",
            "Approach: Learn deeply, build clearly, improve continuously",
            "System stable. Interface ready.",
          ]}
        />
      )}

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
    </>
  );
};

export default App;
