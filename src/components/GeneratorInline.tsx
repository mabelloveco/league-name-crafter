import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teamNames, TeamNameCategory } from "@/data/teamNames";
import { Copy, RefreshCw, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function GeneratorInline() {
  const [selectedCategory, setSelectedCategory] = useState<TeamNameCategory>("funny");
  const [generatedName, setGeneratedName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { toast } = useToast();

  const categories = [
    { key: "funny" as TeamNameCategory, label: "Funny", description: "Hilarious puns and wordplay" },
    { key: "inappropriate" as TeamNameCategory, label: "Inappropriate", description: "Edgy and bold names" },
    { key: "playerThemed" as TeamNameCategory, label: "Player-Themed", description: "Based on NFL stars" },
    { key: "popCulture" as TeamNameCategory, label: "Pop Culture", description: "Movies, TV, and trends" },
  ];

  const templates: Array<(k: string) => string> = [
    (k) => `${k} Dynasty`, (k) => `${k} Blitz`, (k) => `${k} Fanatics`,
    (k) => `Run ${k}`, (k) => `${k} Thunder`, (k) => `${k} Legends`, (k) => `${k} Express`,
  ];

  const generateRandomName = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const k = keyword.trim();
      if (k) {
        const t = templates[Math.floor(Math.random() * templates.length)];
        setGeneratedName(t(k));
      } else {
        const list = teamNames[selectedCategory];
        setGeneratedName(list[Math.floor(Math.random() * list.length)]);
      }
      setIsGenerating(false);
    }, 300);
  };

  const copyToClipboard = async () => {
    if (!generatedName) return;
    try {
      await navigator.clipboard.writeText(generatedName);
      toast({ title: "Copied!", description: "Team name copied to clipboard" });
    } catch {
      toast({ title: "Copy failed", description: "Try selecting and copying manually", variant: "destructive" });
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Generate a Team Name</CardTitle>
        <CardDescription>Pick a style or add a keyword, then generate</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Personalize (optional)</h3>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Type a player or word, e.g. Mahomes"
            className="w-full rounded-md border px-3 py-2 text-sm"
            aria-label="Personalize team name with a keyword"
          />
          <p className="text-xs text-muted-foreground mt-1">
            We’ll mix your word into the name. Leave blank for pure random.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Choose Your Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map((c) => (
              <Button
                key={c.key}
                variant={selectedCategory === c.key ? "default" : "generator"}
                className="h-auto py-4 px-4 flex flex-col items-center space-y-2"
                onClick={() => setSelectedCategory(c.key)}
              >
                <span className="font-semibold">{c.label}</span>
                <span className="text-xs opacity-80">{c.description}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            onClick={generateRandomName}
            disabled={isGenerating}
            className="text-lg px-8 py-6 h-auto"
          >
            {isGenerating ? (<><RefreshCw className="mr-2 h-5 w-5 animate-spin" />Generating...</>) : (<><Zap className="mr-2 h-5 w-5" />Generate Team Name</>)}
          </Button>
        </div>

        {generatedName && (
          <div className="text-center space-y-4">
            <div className="bg-gradient-accent rounded-lg p-6 border-2 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Your Team Name:</h2>
              <p className="text-3xl md:text-4xl font-black text-primary break-words">{generatedName}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" onClick={copyToClipboard} className="flex items-center">
                <Copy className="mr-2 h-4 w-4" /> Copy Name
              </Button>
              <Button variant="outline" onClick={generateRandomName} disabled={isGenerating}>
                <RefreshCw className="mr-2 h-4 w-4" /> Generate Another
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
