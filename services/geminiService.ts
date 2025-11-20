import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are the Agombia Herbal Assistant. 
        Agombia Capsules are a premium Ghanaian herbal medicine.
        
        Key Benefits of Agombia:
        1. Relieves waist pains and general body aches.
        2. Boosts the immune system.
        3. Enhances vitality and energy levels in men and women.
        4. Supports digestive health.
        
        Tone: Friendly, respectful, trustworthy, and culturally grounded (use simple, clear English).
        
        IMPORTANT DISCLAIMER: You are an AI assistant. You do not provide medical advice. Always advise users to consult a physician for serious conditions.
        
        If asked about ingredients: "Agombia is made from a proprietary blend of pure, natural tropical herbs found in Ghana's rainforests."
        If asked about dosage: "Take 2 capsules twice daily after meals."
        `,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    throw new Error("Chat session could not be initialized.");
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm having trouble connecting to the herbal knowledge base. Please try again later.";
  }
};