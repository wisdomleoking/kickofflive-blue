import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn('Warning: GEMINI_API_KEY not found. Pitch insights will use fallback messages.');
}

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Provides a high-level tactical insight for the dashboard.
 * @returns A tactical insight string, or a fallback message if the API call fails
 */
export const getPitchInsight = async (): Promise<string> => {
  // Return fallback if API key is not configured
  if (!ai) {
    return 'Tactical analysis: High-press systems are dominating the midfield transitions this weekend.';
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Give me one high-value tactical insight for today's top European soccer fixtures.",
      config: {
        systemInstruction:
          'You are KickOff Oracle. Provide a single, brilliant tactical observation about soccer matches for a prediction journal. Do not mention money, betting, or gambling.',
      },
    });

    if (!response.text || response.text.trim().length === 0) {
      throw new Error('Empty response from API');
    }

    return response.text;
  } catch (error) {
    // Log error for debugging (in production, you might want to use a proper logger)
    console.error(
      'Failed to fetch pitch insight:',
      error instanceof Error ? error.message : 'Unknown error'
    );

    // Return a fallback message
    return 'Tactical analysis: High-press systems are dominating the midfield transitions this weekend.';
  }
};

export const getDailyInsight = getPitchInsight;