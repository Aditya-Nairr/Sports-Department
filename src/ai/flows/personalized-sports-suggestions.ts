// A personalized sports suggestion AI agent.
//
// - personalizedSportsSuggestions - A function that suggests sports based on user profile and activity.
// - PersonalizedSportsSuggestionsInput - The input type for the personalizedSportsSuggestions function.
// - PersonalizedSportsSuggestionsOutput - The return type for the personalizedSportsSuggestions function.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSportsSuggestionsInputSchema = z.object({
  profileInfo: z.object({
    rollNo: z.string().describe('The student roll number.'),
    year: z.string().describe('The student year of study (e.g., First Year, Second Year).'),
  }).describe('The profile information of the student.'),
  activityHistory: z.string().describe('The past sports activity of the student.'),
});
export type PersonalizedSportsSuggestionsInput = z.infer<typeof PersonalizedSportsSuggestionsInputSchema>;

const PersonalizedSportsSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of personalized sports suggestions for the student.'),
});
export type PersonalizedSportsSuggestionsOutput = z.infer<typeof PersonalizedSportsSuggestionsOutputSchema>;

export async function personalizedSportsSuggestions(input: PersonalizedSportsSuggestionsInput): Promise<PersonalizedSportsSuggestionsOutput> {
  return personalizedSportsSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSportsSuggestionsPrompt',
  input: {schema: PersonalizedSportsSuggestionsInputSchema},
  output: {schema: PersonalizedSportsSuggestionsOutputSchema},
  prompt: `You are a sports recommendation expert. Based on the student's profile and activity history, suggest sports that they might be interested in.

Student Profile: Roll No: {{{profileInfo.rollNo}}}, Year: {{{profileInfo.year}}}
Activity History: {{{activityHistory}}}

Suggestions:`,
});

const personalizedSportsSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedSportsSuggestionsFlow',
    inputSchema: PersonalizedSportsSuggestionsInputSchema,
    outputSchema: PersonalizedSportsSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
