import React from 'react';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';
import HeroIllustration from './icons/HeroIllustration';
import { ArrowRightIcon } from './icons/UiIcons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex items-center min-h-[85vh] py-20 sm:py-0">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="text-left animate-fade-in-right">
            <p className="text-lg text-emerald-400 font-mono mb-2">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Akash E
            </h1>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-400">
              I build things for the web & mobile.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-gray-400">
              I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products integrated with AI.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4 items-center group">
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-emerald-500/50">
                View My Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300">
                Get In Touch <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-12 flex space-x-6">
                <a href="https://github.com/akash1021998" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    <GitHubIcon className="h-7 w-7" />
                </a>
                <a href="https://linkedin.com/in/akash1021" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    <LinkedInIcon className="h-7 w-7" />
                </a>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="hidden md:block animate-fade-in-left">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;