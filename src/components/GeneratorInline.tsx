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
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-2 border-primary/40 rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        {/* Chat-style input */}
        <div className="flex items-center bg-background border-b border-primary/20 px-6 py-4">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Type a player, word, or idea..."
            className="flex-1 rounded-md border border-primary/30 px-5 py-4 text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <Button
            onClick={generateRandomName}
            disabled={isGenerating}
            className="ml-4 px-8 py-4 text-lg font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-6 w-6 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Zap className="mr-2 h-6 w-6" />
                Generate
              </>
            )}
          </Button>
        </div>

        {/* Result */}
        {generatedName && (
          <div className="px-8 py-8 text-center">
            <h2 className="text-xl font-medium text-muted-foreground mb-3">
              Your Team Name:
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-primary break-words">
              {generatedName}
            </p>
          </div>
        )}

        {/* Compact ideas section */}
        <div className="bg-muted/30 px-6 py-4 text-base flex flex-wrap gap-3 justify-center">
          {["Mahomes", "Swifties", "Touchdown", "Blitz"].map((idea) => (
            <button
              key={idea}
              onClick={() => setKeyword(idea)}
              className="px-4 py-2 rounded-full bg-white border border-primary/30 text-muted-foreground hover:bg-primary/10 hover:border-primary/50 transition"
            >
              {idea}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
