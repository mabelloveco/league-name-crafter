import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import { teamNames } from "@/data/teamNames";
import { Link } from "react-router-dom";
import { Zap, Copy, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PlayerThemedNames = () => {
  const { toast } = useToast();

  const copyToClipboard = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      toast({
        title: "Copied!",
        description: `"${name}" copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try selecting and copying the text manually",
        variant: "destructive",
      });
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Player-Themed Fantasy Football Team Names - NFL Star Inspired",
    "description": "Discover creative fantasy football team names inspired by NFL players. From Mahomes to Brady, find the perfect player-themed name for your fantasy team.",
    "author": {
      "@type": "Organization",
      "name": "Team Name Lab"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  const nameChunks = [];
  const chunkSize = 10;
  for (let i = 0; i < teamNames.playerThemed.length; i += chunkSize) {
    nameChunks.push(teamNames.playerThemed.slice(i, i + chunkSize));
  }

  // Popular players for examples
  const popularPlayers = [
    { name: "Patrick Mahomes", examples: ["Mahomes Sweet Mahomes", "Patrick's Playmakers", "KC Kingdom"] },
    { name: "Josh Allen", examples: ["Josh Allen My Heart", "Buffalo Bills Mafia", "Allen's Army"] },
    { name: "Travis Kelce", examples: ["Kelce's Kingdom", "Tight End Titans", "Kelce's Killers"] },
    { name: "Christian McCaffrey", examples: ["CMC Hammer Time", "Run CMC", "McCaffrey's Marvels"] },
    { name: "Cooper Kupp", examples: ["Cooper's Troopers", "Kupp Cakes", "Ram Tough"] },
    { name: "Derrick Henry", examples: ["Henry's Haulers", "King Henry", "Titan Thunder"] }
  ];

  return (
    <>
      <SEOHead
        title="Player-Themed Fantasy Football Team Names - NFL Star Inspired"
        description="Discover creative fantasy football team names inspired by NFL players. From Mahomes to Brady, find the perfect player-themed name for your fantasy team."
        keywords="player themed fantasy football names, NFL player team names, Mahomes fantasy names, Brady team names, fantasy football player puns"
        canonicalUrl="/player-themed-names"
        schemaMarkup={schemaMarkup}
      />

      <div className="min-h-screen bg-gradient-field">
        <div className="container mx-auto px-4 py-8">
          {/* Header Ad */}
          <div className="flex justify-center mb-8">
            <AdSpace size="header" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Player-Themed Fantasy Football Team Names
                </h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Show your football knowledge with team names inspired by NFL superstars. From clever puns on player names 
                  to references that showcase your fandom, these names prove you know the game inside and out.
                </p>
                <Link to="/">
                  <Button variant="hero" size="lg">
                    <Zap className="mr-2 h-5 w-5" />
                    Generate Random Player Name
                  </Button>
                </Link>
              </div>

              {/* Popular Player Examples */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-secondary" />
                    Popular Player Name Ideas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {popularPlayers.map((player, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold text-primary">{player.name}</h4>
                        <ul className="space-y-1">
                          {player.examples.map((example, exIndex) => (
                            <li key={exIndex} className="text-sm text-muted-foreground flex items-center justify-between bg-accent/30 p-2 rounded">
                              <span>"{example}"</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(example)}
                                className="h-6 w-6 p-0"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Why Player Names Work */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Why Player-Themed Names Are Perfect</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground">
                    Player-themed team names are the perfect way to show your football IQ while having fun. They demonstrate 
                    that you follow the sport closely, know the players beyond just their stats, and can make clever connections 
                    between player names and wordplay. These names often age like fine wine, becoming even more legendary as 
                    players' careers develop.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    The best player-themed names work on multiple levels - they're funny to casual fans but have deeper meaning 
                    for serious football followers. Whether you're referencing a player's signature move, personality, or even 
                    their off-field interests, these names create instant connections with other football fans in your league.
                  </p>
                </CardContent>
              </Card>

              {/* Name Grid */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-foreground">
                  Ideas for You
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nameChunks.map((chunk, chunkIndex) => (
                    <Card key={chunkIndex} className="hover:shadow-lg transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          {chunk.map((name, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                              <span className="font-medium text-foreground">{name}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(name)}
                                className="h-8 w-8 p-0"
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Tips Section */}
              <Card className="mt-12">
                <CardHeader>
                  <CardTitle>Creating Player-Themed Names</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Naming Strategies</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Replace words in song titles with player names</li>
                        <li>• Use player nicknames creatively</li>
                        <li>• Reference famous plays or moments</li>
                        <li>• Combine multiple players in one name</li>
                        <li>• Use team affiliations and locations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Trending Players</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Patrick Mahomes (Chiefs QB)</li>
                        <li>• Josh Allen (Bills QB)</li>
                        <li>• Cooper Kupp (Rams WR)</li>
                        <li>• Derrick Henry (Titans RB)</li>
                        <li>• Travis Kelce (Chiefs TE)</li>
                        <li>• Stefon Diggs (Bills WR)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <AdSpace size="sidebar" className="mx-auto" />
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Explore Other Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link to="/funny-names" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        Funny Names →
                      </Button>
                    </Link>
                    <Link to="/inappropriate-names" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        Inappropriate Names →
                      </Button>
                    </Link>
                    <Link to="/pop-culture-names" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        Pop Culture Names →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{teamNames.playerThemed.length}</div>
                      <div className="text-sm text-muted-foreground">Player Names Available</div>
                    </div>
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
    </>
  );
};

export default PlayerThemedNames;