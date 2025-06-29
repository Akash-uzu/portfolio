
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might have better error handling or a fallback.
  // For this example, we'll proceed, but the service will fail if the key is missing.
  console.warn("Gemini API key not found. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const analyzeResume = async (query: string, resumeContext: string): Promise<string> => {
  if (!API_KEY) {
    return "Error: Gemini API key is not configured. Please contact the site owner.";
  }

  const model = "gemini-2.5-flash-preview-04-17";
  
  const systemInstruction = `You are a friendly and professional AI assistant for a developer named Akash. Your task is to answer questions about his resume. Be concise, helpful, and answer only based on the provided resume context. Do not invent information. Here is the resume:\n\n---\n\n${resumeContext}`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // For faster response
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "Sorry, I encountered an error while analyzing the resume. Please try again later.";
  }
};
