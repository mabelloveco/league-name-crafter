import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import { teamNames, TeamNameCategory } from "@/data/teamNames";
import { Copy, RefreshCw, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Generator = () => {
  const [selectedCategory, setSelectedCategory] = useState<TeamNameCategory>("funny");
  const [generatedName, setGeneratedName] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [keyword, setKeyword] = useState<string>("");

  const { toast } = useToast();

  const categories = [
    { key: "funny" as TeamNameCategory, label: "Funny", description: "Hilarious puns and wordplay" },
    { key: "inappropriate" as TeamNameCategory, label: "Inappropriate", description: "Edgy and bold names" },
    { key: "playerThemed" as TeamNameCategory, label: "Player-Themed", description: "Based on NFL stars" },
    { key: "popCulture" as TeamNameCategory, label: "Pop Culture", description: "Movies, TV, and trends" },
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
      if (k.length > 0) {
        const t = templates[Math.floor(Math.random() * templates.length)];
        setGeneratedName(t(k));
        setIsGenerating(false);
        return;
      }
      const categoryNames = teamNames[selectedCategory];
      const randomIndex = Math.floor(Math.random() * categoryNames.length);
      setGeneratedName(categoryNames[randomIndex]);
      setIsGenerating(false);
    }, 300);
  };

  const copyToClipboard = async () => {
    if (!generatedName) return;
    try {
      await navigator.clipboard.writeText(generatedName);
      toast({ title: "Copied!", description: "Team name copied to clipboard" });
    } catch {
      toast({
        title: "Copy failed",
        description: "Please try selecting and copying the text manually",
        variant: "destructive",
      });
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Fantasy Football Team Name Generator",
    "url": "https://teamnamelab.com/generator",
    "description": "Generate random fantasy football team names from multiple categories including funny, inappropriate, player-themed, and pop culture names.",
    "applicationCategory": "SportsApplication",
    "operatingSystem": "Web Browser",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the generator work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Click Generate Team Name. If you enter a keyword, the tool blends it into templates. Otherwise it picks from your selected category."
        }
      },
      { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can generate and copy names at no cost." } },
      {
        "@type": "Question",
        "name": "Can I use these names in my league?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. These are for entertainment. Check your league rules if they restrict certain words." }
      },
      {
        "@type": "Question",
        "name": "What categories do you support?",
        "acceptedAnswer": { "@type": "Answer", "text": "Funny, Inappropriate, Player-Themed, and Pop Culture." }
      },
      { "@type": "Question", "name": "Can I request a name or category?", "acceptedAnswer": { "@type": "Answer", "text": "Yes—use the Contact page to suggest players, puns, or themes." } }
    ]
  };

  return (
    <>
      <SEOHead
        title="Fantasy Football Team Name Generator"
        description="Generate random fantasy football team names instantly! Choose from funny, inappropriate, player-themed, and pop culture categories. Click to generate your perfect team name now."
        keywords="fantasy football name generator, random team names, fantasy football generator, team name maker"
        canonicalUrl="/generator"
        schemaMarkup={schemaMarkup}
      />

      <div className="min-h-screen bg-gradient-field">
        <div className="container mx-auto px-4 py-8">
          {/* Header Ad */}
          <div className="flex justify-center mb-8">
            <AdSpace size="header" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Generator */}
            <div className="lg:col-span-3">
              <div className="mx-auto max-w-4xl">
                <Card className="mb-8">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">
                      Fantasy Football Team Name Generator
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Select a category or personalize and generate your perfect team name
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Personalize input */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personalize (optional)</h3>
                      <input
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Type a player or word, e.g. Mahomes"
                        className="w-full rounded-xl border px-4 py-3 h-14 text-base md:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        aria-label="Personalize team name with a keyword"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        We’ll mix your word into the name. Leave blank to use random names from a category.
                      </p>
                    </div>

                    {/* Category Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Choose Your Style</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {categories.map((category) => (
                          <Button
                            key={category.key}
                            variant={selectedCategory === category.key ? "default" : "generator"}
                            className="h-auto py-4 px-4 flex flex-col items-center space-y-2"
                            onClick={() => setSelectedCategory(category.key)}
                          >
                            <span className="font-semibold">{category.label}</span>
                            <span className="text-xs opacity-80">{category.description}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Generator Button */}
                    <div className="text-center">
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={generateRandomName}
                        disabled={isGenerating}
                        className="text-lg px-8 py-6 h-auto"
                      >
                        {isGenerating ? (
                          <>
                            <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Zap className="mr-2 h-5 w-5" />
                            Generate Team Name
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Generated Name Display */}
                    {generatedName && (
                      <div className="text-center space-y-4">
                        <div className="bg-gradient-accent rounded-lg p-6 border-2 border-primary/20">
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Your Team Name:
                          </h2>
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

                {/* FAQ */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Fantasy Team Name Generator FAQ</CardTitle>
                    <CardDescription>Quick answers to common questions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">How does the generator work?</h4>
                      <p className="text-sm text-muted-foreground">
                        Click “Generate Team Name.” If you enter a keyword like <em>Mahomes</em>, we blend it into templates. Otherwise we pick from the selected category.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Is it free?</h4>
                      <p className="text-sm text-muted-foreground">Yes. You can generate and copy names for free.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Can I use these names in my league?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes. Names are for entertainment. Check your league rules if they restrict inappropriate words.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">What categories do you support?</h4>
                      <p className="text-sm text-muted-foreground">
                        Funny, Inappropriate, Player-Themed, and Pop Culture.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Can I request a name or category?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes—use the Contact page and suggest players, puns, or themes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <AdSpace size="sidebar" className="mx-auto" />
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Category Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.key} className="flex justify-between items-center">
                        <span className="text-sm">{category.label}</span>
                        <span className="text-sm font-mono text-muted-foreground">
                          {teamNames[category.key].length} names
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Inline Ad */}
          <div className="flex justify-center mt-12">
            <AdSpace size="inline" />
          </div>
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
};

export default Generator;


