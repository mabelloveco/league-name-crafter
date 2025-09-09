import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamNames, TeamNameCategory } from "@/data/teamNames";
import { RefreshCw, Zap } from "lucide-react";

export default function GeneratorInline() {
  const [selectedCategory] = useState<TeamNameCategory>("funny");
  const [generatedName, setGeneratedName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [keyword, setKeyword] = useState("");

  const templates: Array<(k: string) => string> = [
    (k) => `${k} Dynasty`,
    (k) => `${k} Blitz`,
    (k) => `${k} Fanatics`,
    (k) => `Run ${k}`,
    (k) => `${k} Thunder`,
    (k) => `${k} Legends`,
    (k) => `${k} Express`,
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

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        {/* Chat-style input */}
        <div className="bg-background border-b px-4 py-3 space-y-3">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Type a player, word, or idea..."
            className="w-full rounded-md border px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex justify-center">
            <Button
              onClick={generateRandomName}
              disabled={isGenerating}
              className="px-6 py-3 text-base font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-5 w-5" />
                  Generate
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Result */}
        {generatedName && (
          <div className="px-6 py-6 text-center">
            <h2 className="text-lg font-medium text-muted-foreground mb-2">
              Your Team Name:
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-primary break-words">
              {generatedName}
            </p>
          </div>
        )}

        {/* Compact ideas section */}
        <div className="bg-muted/30 px-4 py-3 text-sm flex flex-wrap gap-2 justify-center">
          {["Mahomes", "Swifties", "Touchdown", "Blitz"].map((idea) => (
            <button
              key={idea}
              onClick={() => setKeyword(idea)}
              className="px-3 py-1 rounded-full bg-white border text-muted-foreground hover:bg-primary/10 transition"
            >
              {idea}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
