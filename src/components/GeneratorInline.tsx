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
    <Card className="w-full max-w-4xl mx-auto shadow-2xl border-0 rounded-3xl overflow-hidden bg-gradient-to-br from-white via-white to-muted/20 backdrop-blur-sm">
      <CardContent className="p-0">
        {/* Modern hero-style input section */}
        <div className="bg-gradient-to-r from-background via-background to-muted/10 px-6 md:px-8 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6">
            <div className="flex-1">
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Type a player, word, or idea..."
                className="w-full rounded-2xl border-2 border-muted/40 px-6 py-4 md:py-5 text-lg md:text-xl font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-200 shadow-sm hover:shadow-md bg-white/80 backdrop-blur-sm"
              />
            </div>
            <Button
              onClick={generateRandomName}
              disabled={isGenerating}
              className="px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary-glow text-white rounded-2xl hover:from-primary-glow hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:hover:scale-100 min-w-[140px] md:min-w-[160px]"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-3 h-6 w-6 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="mr-3 h-6 w-6" />
                  Generate
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced result display */}
        {generatedName && (
          <div className="px-6 md:px-8 py-8 md:py-10 text-center bg-gradient-to-br from-muted/20 to-muted/10">
            <h2 className="text-lg md:text-xl font-semibold text-muted-foreground mb-4">
              Your Team Name:
            </h2>
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary break-words leading-tight bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {generatedName}
            </p>
            <div className="mt-6 pt-4 border-t border-muted/30">
              <Button
                onClick={generateRandomName}
                variant="outline"
                className="text-sm font-medium border-primary/30 text-primary hover:bg-primary/10 rounded-xl px-6 py-2"
              >
                Generate Another
              </Button>
            </div>
          </div>
        )}

        {/* Enhanced suggestion buttons */}
        <div className="bg-gradient-to-r from-muted/20 to-muted/10 px-6 md:px-8 py-4 md:py-5">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="text-sm font-medium text-muted-foreground mb-2 w-full text-center">Try these ideas:</span>
            {["Mahomes", "Swifties", "Touchdown", "Blitz"].map((idea) => (
              <button
                key={idea}
                onClick={() => setKeyword(idea)}
                className="px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-muted/30 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
              >
                {idea}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
