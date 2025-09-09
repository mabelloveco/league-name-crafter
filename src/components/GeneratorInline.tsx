import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamNames, TeamNameCategory } from "@/data/teamNames";
import { RefreshCw, Zap, Trophy, Star, Users } from "lucide-react";

export default function GeneratorInline() {
  const [selectedCategory, setSelectedCategory] = useState<TeamNameCategory>("funny");
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

  const categories = [
    { key: 'funny' as TeamNameCategory, label: 'Funny', icon: Trophy, description: 'Hilarious puns and wordplay' },
    { key: 'inappropriate' as TeamNameCategory, label: 'Inappropriate', icon: Star, description: 'Edgy and bold names' },
    { key: 'playerThemed' as TeamNameCategory, label: 'Player-Themed', icon: Users, description: 'Based on NFL stars' },
    { key: 'popCulture' as TeamNameCategory, label: 'Pop Culture', icon: Zap, description: 'Movies, TV, trends' },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        {/* Chat-style input */}
        <div className="flex items-center bg-background border-b px-4 py-3">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Type a player, word, or idea..."
            className="flex-1 rounded-md border px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button
            onClick={generateRandomName}
            disabled={isGenerating}
            className="ml-3 px-6 py-3 text-base font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition"
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

        {/* Category Selection - New compact layout */}
        <div className="border-t bg-background px-4 py-4">
          <p className="text-sm text-muted-foreground mb-3 text-center">Choose a category:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.key;
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`p-3 rounded-lg border text-left transition-colors hover:bg-muted/50 ${
                    isSelected 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border bg-background text-muted-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{category.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
