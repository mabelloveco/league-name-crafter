
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teamNames, TeamNameCategory } from "@/data/teamNames";
import { Copy, RefreshCw, Zap, Mic } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * Compact, chat-style generator UI.
 * - No gradient/fade button
 * - Wide rounded prompt bar
 * - Small idea chips
 * - Works across screen sizes
 */
export default function GeneratorInline() {
  const [selectedCategory, setSelectedCategory] = useState<TeamNameCategory>("funny");
  const [generatedName, setGeneratedName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { toast } = useToast();

  const categories = [
    { key: "funny" as TeamNameCategory, label: "Funny", description: "Hilarious puns" },
    { key: "inappropriate" as TeamNameCategory, label: "Inappropriate", description: "Edgy & bold" },
    { key: "playerThemed" as TeamNameCategory, label: "Player-Themed", description: "NFL stars" },
    { key: "popCulture" as TeamNameCategory, label: "Pop Culture", description: "Movies & TV" },
  ];

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
    }, 250);
  };

  const copyToClipboard = async () => {
    if (!generatedName) return;
    try {
      await navigator.clipboard.writeText(generatedName);
      toast({ title: "Copied", description: "Team name copied to clipboard" });
    } catch {
      toast({
        title: "Copy failed",
        description: "Select the text and copy manually",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Generate a Team Name</CardTitle>
        <CardDescription>Type a prompt or pick a style, then generate</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Chat-style prompt bar */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="rounded-2xl border bg-background/80 shadow-sm p-3 md:p-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                title="Mic (visual only)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
                aria-disabled="true"
              >
                <Mic className="h-5 w-5 opacity-60" />
              </button>

              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Type a player or word, e.g., Mahomes"
                className="flex-1 rounded-xl border px-4 py-3 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Prompt"
              />

              <Button
                variant="default"
                size="lg"
                onClick={generateRandomName}
                disabled={isGenerating}
                className="h-12 px-6"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Generating
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Generate
                  </>
                )}
              </Button>
            </div>

            {/* Small idea chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              {["Mahomes", "Swifties", "Gridiron", "Underdogs"].map((s) => (
                <button
                  key={s}
                  onClick={() => setKeyword(s)}
                  className="rounded-full border px-3 py-1 text-xs md:text-sm text-muted-foreground hover:text-foreground"
                  type="button"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category buttons, compact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Choose Your Style</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {categories.map((c) => (
              <Button
                key={c.key}
                variant={selectedCategory === c.key ? "default" : "secondary"}
                className="h-12 justify-center"
                onClick={() => setSelectedCategory(c.key)}
              >
                {c.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Result */}
        {generatedName && (
          <div className="text-center space-y-4">
            <div className="rounded-xl p-6 border">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Your Team Name</h2>
              <p className="text-3xl md:text-4xl font-black text-primary break-words">
                {generatedName}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" onClick={copyToClipboard} className="flex items-center">
                <Copy className="mr-2 h-4 w-4" />
                Copy Name
              </Button>
              <Button variant="outline" onClick={generateRandomName} disabled={isGenerating}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate Another
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
git pull --rebase origin main
git add src/components/GeneratorInline.tsx
git commit -m "Redesign generator as chat-style prompt; compact ideas; no fade"
git push

<Button variant="outline" onClick={generateRandomName} disabled={isGenerating}>


