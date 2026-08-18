import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamNames, TeamNameCategory } from "@/data/teamNames";
import { RefreshCw, Zap } from "lucide-react";

const CATEGORY_OPTIONS: { value: TeamNameCategory; label: string }[] = [
  { value: "funny", label: "Funny" },
  { value: "inappropriate", label: "Inappropriate" },
  { value: "playerThemed", label: "Player-Themed" },
  { value: "popCulture", label: "Pop Culture" },
];

export default function GeneratorInline() {
  const [selectedCategory, setSelectedCategory] = useState<TeamNameCategory>("funny");
  const [generatedName, setGeneratedName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [keyword, setKeyword] = useState("");

  // Expanded pool of ideas for the "Give me more ideas" functionality
  const allIdeas = [
    "Mahomes", "Swifties", "Touchdown", "Blitz", "Dynasty", "Thunder", "Express",
    "Brady", "Rodgers", "Allen", "Lamar", "Wilson", "Burrow", "Herbert",
    "Chiefs", "Bills", "Cowboys", "Packers", "Ravens", "Bengals", "Chargers",
    "Fantasy", "Draft", "Waiver", "Playoff", "Championship", "Victory",
    "Gridiron", "Endzone", "Fumble", "Interception", "Sack", "Rush",
    "Beast", "Savage", "Elite", "Legendary", "Unstoppable", "Dominant",
    "Pigskin", "Helmet", "Cleats", "Jersey", "Stadium", "Huddle"
  ];

  const [currentIdeas, setCurrentIdeas] = useState(["Mahomes", "Swifties", "Touchdown", "Blitz"]);

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
    if (isGenerating) return;
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

  const refreshIdeas = () => {
    // Get 4 random ideas from the pool, ensuring they're different from current ones
    const availableIdeas = allIdeas.filter(idea => !currentIdeas.includes(idea));
    const shuffled = [...availableIdeas].sort(() => 0.5 - Math.random());
    const newIdeas = shuffled.slice(0, 4);
    setCurrentIdeas(newIdeas);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            generateRandomName();
          }}
        >
          <div className="bg-background border-b px-4 py-4 md:py-3">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Type a player, word, or idea..."
              aria-label="Keyword for your team name"
              className="w-full rounded-md border px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="px-4 py-4 border-b bg-muted/20 space-y-4">
            <div
              role="group"
              aria-label="Team name category"
              className="flex flex-wrap gap-2 justify-center"
            >
              {CATEGORY_OPTIONS.map((option) => {
                const isSelected = selectedCategory === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedCategory(option.value)}
                    className={
                      isSelected
                        ? "px-3 py-1.5 rounded-full bg-primary text-primary-foreground border border-primary font-medium"
                        : "px-3 py-1.5 rounded-full bg-white border text-muted-foreground hover:bg-primary/10 transition"
                    }
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <Button
              type="submit"
              disabled={isGenerating}
              size="lg"
              className="w-full h-12 text-base font-semibold shadow-md hover:shadow-lg [&_svg]:size-5"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="animate-spin" aria-hidden="true" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap aria-hidden="true" />
                  Generate
                </>
              )}
            </Button>
          </div>
        </form>

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
          {currentIdeas.map((idea) => (
            <button
              key={idea}
              onClick={() => setKeyword(idea)}
              className="px-3 py-1 rounded-full bg-white border text-muted-foreground hover:bg-primary/10 transition"
            >
              {idea}
            </button>
          ))}
          <button
            onClick={refreshIdeas}
            className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition font-medium"
          >
            Give me more ideas
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
