"use client";

import { useState } from "react";
import { Lightbulb, Sparkles } from "lucide-react";
import { getPlumbingTip } from "@/ai/flows/pro-tips-flow";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "../ui/badge";

const tipTopics = [
  "Leaky Faucet",
  "Clogged Drain",
  "Running Toilet",
  "Water Heater Maintenance",
  "Winter Plumbing Protection",
  "Low Water Pressure",
];

export default function AiProTipsSection() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [tip, setTip] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetTip = async (topic: string) => {
    setActiveTopic(topic);
    setIsLoading(true);
    setTip(null);
    try {
      const generatedTip = await getPlumbingTip(topic);
      setTip(generatedTip);
    } catch (error) {
      console.error("Error fetching plumbing tip:", error);
      setTip("Sorry, I couldn't fetch a tip right now. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tips" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="w-fit mb-2">AI Plumbing Tips</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" /> AI-Powered Tips
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            Select a common issue to get an instant, AI-generated plumbing tip.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Plumbing Tip Generator</CardTitle>
            <CardDescription>
              Choose a topic below to get helpful advice.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 mb-6">
              {tipTopics.map((topic) => (
                <Button
                  key={topic}
                  variant={activeTopic === topic ? "default" : "outline"}
                  onClick={() => handleGetTip(topic)}
                  disabled={isLoading}
                >
                  {topic}
                </Button>
              ))}
            </div>
            <div className="p-6 rounded-lg bg-secondary min-h-[150px]">
              {isLoading && (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[70%]" />
                </div>
              )}
              {tip && !isLoading && (
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              )}
              {!tip && !isLoading && (
                <p className="text-center text-muted-foreground pt-8">
                  Your tip will appear here...
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Disclaimer: AI-generated tips are for informational purposes
              only. Always consult a professional for serious plumbing issues.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
