import React, { useState, FormEvent } from 'react';
import { analyzeResume } from '../services/geminiService';
import { RESUME_TEXT } from '../constants';
import { TerminalIcon, SendIcon } from './icons/UiIcons';

const AiChat: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError('');
    setResponse('');
    setHasInteracted(true);

    try {
      const result = await analyzeResume(query, RESUME_TEXT);
      setResponse(result);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const exampleQuestions = [
    "What are his strongest skills?",
    "Summarize his experience with mobile development.",
    "What AI projects has he worked on?"
  ];

  const handleExampleClick = (question: string) => {
    setQuery(question);
  };

  return (
    <section id="ai-analyst" className="py-16">
      <div className="bg-gray-800/50 rounded-lg p-6 md:p-8 border border-gray-700 shadow-xl">
        <div className="flex items-center mb-4">
          <TerminalIcon className="h-8 w-8 text-emerald-400 mr-3"/>
          <h2 className="text-2xl font-bold text-white">AI Resume Analyst</h2>
        </div>
        <p className="text-gray-400 mb-6">
          Ask my AI assistant a question about my resume. Powered by Google Gemini.
        </p>
        
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., What are his strongest skills?"
            className="flex-grow bg-gray-900 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <SendIcon className="h-5 w-5" />
            )}
          </button>
        </form>

        {!hasInteracted && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-400">Try:</span>
            {exampleQuestions.map(q => (
              <button key={q} onClick={() => handleExampleClick(q)} className="text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded-md transition">
                "{q}"
              </button>
            ))}
          </div>
        )}

        { (isLoading || error || response) && (
            <div className="mt-6 p-4 bg-gray-900/70 rounded-md border border-gray-700 min-h-[80px]">
                {isLoading && <p className="text-gray-400 animate-pulse">Thinking...</p>}
                {error && <p className="text-red-400">{error}</p>}
                {response && <p className="text-gray-300 whitespace-pre-wrap">{response}</p>}
            </div>
        )}
      </div>
    </section>
  );
};

export default AiChat;