import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import { teamNames } from "@/data/teamNames";
import { Link } from "react-router-dom";
import { Zap, Copy, Film, Tv, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PopCultureNames = () => {
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
    "headline": "Pop Culture Fantasy Football Team Names - Movies, TV & Trends",
    "description": "Discover fantasy football team names inspired by movies, TV shows, music, and trending pop culture. Find the perfect pop culture reference for your team name.",
    "author": {
      "@type": "Organization",
      "name": "Team Name Lab"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  const nameChunks = [];
  const chunkSize = 10;
  for (let i = 0; i < teamNames.popCulture.length; i += chunkSize) {
    nameChunks.push(teamNames.popCulture.slice(i, i + chunkSize));
  }

  const popCultureCategories = [
    {
      icon: Film,
      title: "Movies",
      examples: ["Game of Throws", "Fast and Furious", "Mission Impossible", "Star Wars Empire"]
    },
    {
      icon: Tv,
      title: "TV Shows",
      examples: ["The Office Linebackers", "Breaking Badgers", "Stranger Throws", "Parks and Rec-eption"]
    },
    {
      icon: Music,
      title: "Music & Trends",
      examples: ["Friends with Benefits", "The Big Bang Theory", "Marvel's Avengers", "DC's Justice League"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Pop Culture Fantasy Football Team Names - Movies, TV & Trends"
        description="Discover fantasy football team names inspired by movies, TV shows, music, and trending pop culture. Find the perfect pop culture reference for your team name."
        keywords="pop culture fantasy football names, movie themed team names, TV show fantasy names, trending team names, culture reference football"
        canonicalUrl="/pop-culture-names"
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
                  Pop Culture Fantasy Football Team Names
                </h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Blend your love of football with movies, TV shows, music, and trending culture. These names create 
                  perfect mashups that show you're connected to both sports and entertainment worlds.
                </p>
                <Link to="/">
                  <Button variant="hero" size="lg">
                    <Zap className="mr-2 h-5 w-5" />
                    Generate Random Pop Culture Name
                  </Button>
                </Link>
              </div>

              {/* Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {popCultureCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader className="text-center">
                      <category.icon className="w-12 h-12 mx-auto text-primary mb-2" />
                      <CardTitle>{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.examples.map((example, exIndex) => (
                          <div key={exIndex} className="text-sm text-muted-foreground bg-accent/30 p-2 rounded flex items-center justify-between">
                            <span>"{example}"</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(example)}
                              className="h-6 w-6 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Pop Culture Names Work */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>The Magic of Pop Culture Mashups</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground">
                    Pop culture team names are conversation starters that work on multiple levels. They show you're current 
                    with trends, have interests beyond football, and can make clever connections between different entertainment 
                    mediums. The best pop culture names often combine beloved franchises with football terminology in unexpected ways.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    These names are particularly effective because they tap into shared cultural experiences. When someone sees 
                    "Game of Throws" or "The Office Linebackers," they instantly get the reference and appreciate the creativity. 
                    Pop culture names also tend to age well, as classic movies and shows remain relevant for years.
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
                  <CardTitle>Creating Pop Culture Mashups</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Mashup Techniques</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Replace key words with football terms</li>
                        <li>• Use character names as team references</li>
                        <li>• Combine show titles with player positions</li>
                        <li>• Reference famous quotes or catchphrases</li>
                        <li>• Mix multiple franchises creatively</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Trending References</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Marvel & DC superhero movies</li>
                        <li>• Popular Netflix series</li>
                        <li>• Classic sitcoms (The Office, Friends)</li>
                        <li>• Blockbuster movie franchises</li>
                        <li>• Viral internet memes</li>
                        <li>• Award-winning dramas</li>
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
                    <Link to="/player-themed-names" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        Player-Themed Names →
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
                      <div className="text-3xl font-bold text-primary">{teamNames.popCulture.length}</div>
                      <div className="text-sm text-muted-foreground">Pop Culture Names Available</div>
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

export default PopCultureNames;