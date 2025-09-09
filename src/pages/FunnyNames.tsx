import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import { teamNames } from "@/data/teamNames";
import { Link } from "react-router-dom";
import { Zap, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FunnyNames = () => {
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
    "headline": "Funny Fantasy Football Team Names - The Ultimate List",
    "description": "Discover the funniest fantasy football team names that will have your league laughing. From clever puns to hilarious wordplay, find the perfect funny name for your team.",
    "author": {
      "@type": "Organization",
      "name": "Team Name Lab"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  // Split names into chunks for better display
  const nameChunks = [];
  const chunkSize = 10;
  for (let i = 0; i < teamNames.funny.length; i += chunkSize) {
    nameChunks.push(teamNames.funny.slice(i, i + chunkSize));
  }

  return (
    <>
      <SEOHead
        title="Funny Fantasy Football Team Names - The Ultimate List"
        description="Discover the funniest fantasy football team names that will have your league laughing. From clever puns to hilarious wordplay, find the perfect funny name for your team."
        keywords="funny fantasy football team names, hilarious team names, funny football puns, clever team names, fantasy football humor"
        canonicalUrl="/funny-names"
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
                  Funny Fantasy Football Team Names
                </h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Get ready to dominate your league with laughter! These hilarious team names combine clever wordplay, 
                  football puns, and pure comedic genius. Your opponents will be laughing so hard, they'll forget to set their lineups.
                </p>
                <Link to="/">
                  <Button variant="hero" size="lg">
                    <Zap className="mr-2 h-5 w-5" />
                    Generate Random Funny Name
                  </Button>
                </Link>
              </div>

              {/* Why Funny Names Work */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Why Funny Team Names Win</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground">
                    A funny team name is the ultimate icebreaker in any fantasy football league. It sets a lighthearted tone, 
                    makes trash talking more enjoyable, and creates memorable moments that last long after the season ends. 
                    The best funny names often combine football terminology with unexpected twists, creating that perfect "groan-worthy" 
                    pun that everyone secretly loves.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Whether you're going for dad jokes, clever wordplay, or absurd humor, a great funny name shows you don't 
                    take yourself too seriously while still being competitive. Remember: the goal is to make people smile, 
                    not to be the funniest person in the room. Sometimes the best laughs come from the most unexpected places!
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
                    <Card key={chunkIndex} className="hover:shadow-lg ">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          {chunk.map((name, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg hover:bg-accent/50 ">
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
                  <CardTitle>Tips for Creating Your Own Funny Names</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Wordplay Techniques</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Replace words in common phrases with football terms</li>
                        <li>• Use player names as puns (e.g., "Mahomes Sweet Mahomes")</li>
                        <li>• Combine team names with funny concepts</li>
                        <li>• Play with football position names</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">What Makes Names Memorable</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Easy to pronounce and remember</li>
                        <li>• References current pop culture</li>
                        <li>• Creates a vivid mental image</li>
                        <li>• Has a good rhythm when spoken</li>
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
                    <CardTitle className="text-lg">Explore More Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link to="/inappropriate-names" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        Inappropriate Names →
                      </Button>
                    </Link>
                    <Link to="/player-themed-names" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        Player-Themed Names →
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
                      <div className="text-3xl font-bold text-primary">{teamNames.funny.length}</div>
                      <div className="text-sm text-muted-foreground">Funny Names Available</div>
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

export default FunnyNames;