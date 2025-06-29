import { useState, useEffect } from 'react';

interface TypingEffectOptions {
  lines: string[];
  onFinished: () => void;
  typingSpeed?: number;
  lineDelay?: number;
}

interface StatusUpdates {
  [key: number]: string;
}

const statusUpdates: StatusUpdates = {
  2: "CALIBRATING AWESOMENESS...",
  5: "DEPLOYING CHAOS...",
  8: "SYSTEM READY.",
};

export const useTypingEffect = ({
  lines,
  onFinished,
  typingSpeed = 25,
  lineDelay = 150,
}: TypingEffectOptions) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [status, setStatus] = useState('INITIALIZING...');

  useEffect(() => {
    if (lineIndex >= lines.length) {
      // Wait a moment after the last line before finishing
      const finishTimer = setTimeout(() => {
        onFinished();
      }, 500);
      return () => clearTimeout(finishTimer);
    }

    // Update status text if a specific line index is reached
    if (statusUpdates[lineIndex]) {
      setStatus(statusUpdates[lineIndex]);
    }

    const currentLine = lines[lineIndex];

    const typingTimer = setTimeout(() => {
      if (charIndex < currentLine.length) {
        // Add next character
        setDisplayedText((prev) => prev + currentLine.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else {
        // Move to the next line
        setDisplayedText((prev) => prev + '<br/>');
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, charIndex < currentLine.length ? typingSpeed : lineDelay);

    return () => clearTimeout(typingTimer);

  }, [lineIndex, charIndex, lines, onFinished, typingSpeed, lineDelay]);

  return { displayedText, status };
};