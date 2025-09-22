'use client';

import { useState, useEffect } from 'react';
import { personalizedSportsSuggestions, PersonalizedSportsSuggestionsOutput } from '@/ai/flows/personalized-sports-suggestions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, AlertTriangle, CheckCircle2 } from 'lucide-react';

export function PersonalizedSuggestions() {
  const [suggestions, setSuggestions] = useState<PersonalizedSportsSuggestionsOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rollNo, setRollNo] = useState<string | null>(null);

  useEffect(() => {
    const storedRollNo = localStorage.getItem('studentRollNo');
    setRollNo(storedRollNo);

    async function getSuggestions() {
      if (!storedRollNo) {
        setLoading(false);
        setError("Could not retrieve profile information to generate suggestions.");
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const input = {
          profileInfo: {
            rollNo: storedRollNo,
            year: 'Second Year',
          },
          activityHistory: 'Participated in the annual marathon and played cricket last semester.',
        };
        const result = await personalizedSportsSuggestions(input);
        setSuggestions(result);
      } catch (e) {
        setError('Failed to load sports suggestions. Please try again later.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    getSuggestions();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Lightbulb className="text-accent" />
                <span>For You</span>
            </CardTitle>
          <CardDescription>Generating personalized recommendations...</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-6 w-2/3" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-card to-secondary/30">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Lightbulb className="text-accent" />
                <span>For You</span>
            </CardTitle>
          <CardDescription>Based on your profile, you might enjoy these activities:</CardDescription>
        </CardHeader>
      <CardContent>
        {suggestions && suggestions.suggestions.length > 0 ? (
          <ul className="space-y-2">
            {suggestions.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No suggestions available at the moment.</p>
        )}
      </CardContent>
    </Card>
  );
}
