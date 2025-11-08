import { useTypingEffect } from '@/utils/hooks/useTypingEffect ';
import React from 'react';


interface PreloaderProps {
  onFinished: () => void;
}

const PRELOADER_LINES = [
  "Booting reality_engine.js...",
  "Establishing quantum link...",
  "Compiling memes... 42% complete.",
  'Bypassing firewall... with "please".',
  'Running "npm install epic-portfolio"...',
  "Resolving 1 of 99 bugs in production...",
  "Hiding API keys... somewhere safe.",
  "Decrypting user credentials...",
  "Welcome, human.",
];

const Preloader: React.FC<PreloaderProps> = ({ onFinished }) => {
  const { displayedText, status } = useTypingEffect({
    lines: PRELOADER_LINES,
    onFinished,
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 font-mono text-cyan-400">
      <div className="text-left">
        <p
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: `${displayedText}<span class="animate-ping">█</span>`,
          }}
        />
      </div>
      <p id="preloader-status" className="mt-8 text-sm tracking-widest">
        {status}
      </p>
    </div>
  );
};

export default Preloader;