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
    <Card className="w-full max-w-5xl mx-auto shadow-2xl border-2 rounded-3xl overflow-hidden backdrop-blur-sm bg-white/95">
      <CardContent className="p-0">
        {/* Modern chat-style input */}
        <div className="flex flex-col sm:flex-row items-stretch bg-gradient-to-r from-background to-muted/30 border-b px-6 py-6 gap-4">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Type a player, word, or idea..."
            className="flex-1 rounded-2xl border-2 px-6 py-4 text-lg md:text-xl lg:text-2xl font-medium focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all duration-300 shadow-inner bg-white/80"
          />
          <Button
            onClick={generateRandomName}
            disabled={isGenerating}
            className="px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-5 w-5 md:h-6 md:w-6 animate-spin" />
                <span className="hidden sm:inline">Generating...</span>
                <span className="sm:hidden">...</span>
              </>
            ) : (
              <>
                <Zap className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                Generate
              </>
            )}
          </Button>
        </div>

        {/* Result */}
        {generatedName && (
          <div className="px-8 py-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-xl font-semibold text-muted-foreground mb-4">
              Your Team Name:
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent break-words leading-tight">
              {generatedName}
            </p>
          </div>
        )}

        {/* Enhanced ideas section */}
        <div className="bg-gradient-to-r from-muted/40 to-muted/20 px-6 py-4 text-sm flex flex-wrap gap-3 justify-center border-t">
          <span className="text-muted-foreground font-medium hidden sm:inline">Try these ideas:</span>
          {["Mahomes", "Swifties", "Touchdown", "Blitz"].map((idea) => (
            <button
              key={idea}
              onClick={() => setKeyword(idea)}
              className="px-4 py-2 rounded-full bg-white/80 border-2 border-primary/20 text-muted-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:scale-105"
            >
              {idea}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
