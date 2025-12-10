import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o "Andy Bot", um assistente virtual especializado de uma designer de interface (UI) chamada Andy (Aniie Beck).
O estilo da Andy é minimalista, focado em usabilidade, com uma estética forte em "dark mode" e tons de lilás escuro.
Seu objetivo é ajudar potenciais clientes a entender os serviços, dar orçamentos estimados e discutir ideias de design.

Informações de Contato da Andy:
- WhatsApp: (13) 99779-8645
- Instagram: @aniiebeck

Serviços oferecidos:
1. Landing Pages (A partir de R$ 2.500)
2. Design de Aplicativos Mobile (A partir de R$ 5.000)
3. Design Systems Completos (A partir de R$ 10.000)
4. Consultoria de UX/UI (R$ 400/hora)

Tom de voz: Profissional, criativo, conciso e prestativo. Use emojis roxos ocasionalmente 💜.
Se o cliente perguntar sobre prazos, diga que depende do projeto, mas Landing Pages levam cerca de 1 semana e Apps cerca de 3-4 semanas.
Sempre tente direcionar o usuário para chamar no WhatsApp ou Instagram para fechar negócio.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });

    // Convert history to format expected by Gemini (if maintaining state via chat object is desired, 
    // but here we use a simple generateContent for stateless simplicity with context in prompt or simple chat structure)
    // For better chat experience, we use chats.create
    
    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        },
        history: history.map(h => ({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }]
        }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    
    if (response.text) {
        return response.text;
    }
    
    return "Desculpe, não consegui processar sua resposta no momento.";

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Estou tendo dificuldades técnicas no momento. Por favor, tente novamente mais tarde ou use o formulário de contato.";
  }
};