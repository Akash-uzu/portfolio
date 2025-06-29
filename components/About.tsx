import React from 'react';
import SectionWrapper from './SectionWrapper';

const DeveloperAvatar: React.FC = () => (
    <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center group">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
            <defs>
                <linearGradient id="grad-emerald-avatar" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgb(52 211 153)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(5 150 105)', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path 
                d="M100 25 L175 62.5 V137.5 L100 175 L25 137.5 V62.5 Z" 
                fill="rgb(31 41 55 / 0.5)" 
                stroke="url(#grad-emerald-avatar)" 
                strokeWidth="2" 
                className="transition-transform duration-500 group-hover:scale-105"
            />
            <g stroke="url(#grad-emerald-avatar)" strokeWidth="1.5" fill="none" opacity="0.6" className="transition-opacity duration-500 group-hover:opacity-100">
                <path d="M100 100 V 70 H 130 V 50" />
                <path d="M100 100 V 130 H 70 V 150" />
                <path d="M100 100 H 140" />
                <path d="M100 100 H 60" />
                <circle cx="140" cy="100" r="3" fill="rgb(16 185 129)" />
                <circle cx="60" cy="100" r="3" fill="rgb(16 185 129)" />
                <circle cx="130" cy="50" r="3" fill="rgb(16 185 129)" />
                <circle cx="70" cy="150" r="3" fill="rgb(16 185 129)" />
                <rect x="125" y="65" width="10" height="10" strokeWidth="1" />
                <rect x="65" y="125" width="10" height="10" strokeWidth="1" />
            </g>
        </svg>
    </div>
);

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
        <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
                <DeveloperAvatar />
            </div>
            <div className="md:w-2/3 text-lg text-gray-400 space-y-4">
                <p>
                    I'm a React and React Native developer with over two years of experience, specializing in building high-performance, cross-platform applications from the ground up. My passion lies in taking full ownership of projects, from initial architecture to final deployment.
                </p>
                <p>
                    Recently, I've been diving deep into the world of Artificial Intelligence, actively integrating Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to build smarter, more intuitive products.
                </p>
                <p>
                    My goal is to leverage my skills in both app development and AI to create robust, user-centric solutions for impactful organizations. I thrive on independent problem-solving and collaborating with teams to bring ambitious ideas to life.
                </p>
            </div>
        </div>
    </SectionWrapper>
  );
}

export default About;