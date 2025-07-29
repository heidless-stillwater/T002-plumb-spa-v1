'use server';
/**
 * @fileOverview A Genkit flow for generating plumbing tips.
 *
 * - getPlumbingTip - A function that returns a plumbing tip for a given topic.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const proTipsFlow = ai.defineFlow(
  {
    name: 'proTipsFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (topic) => {
    const prompt = `You are a helpful master plumber named FlowPro.
    A user has asked for a quick tip about "${topic}".

    Provide a concise, helpful tip (2-3 sentences) that a homeowner could find useful.
    The tone should be friendly, professional, and encouraging.
    Do not recommend specific brands.
    End by suggesting they call a professional for complex issues.
    Do not use markdown.`;

    const { output } = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-2.0-flash',
      config: {
        maxOutputTokens: 150,
      },
    });

    return output!;
  }
);

export async function getPlumbingTip(topic: string): Promise<string> {
  return proTipsFlow(topic);
}
