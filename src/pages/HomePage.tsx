import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import { Trophy, Zap, Users, Star } from "lucide-react";

const HomePage = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Team Name Lab",
    "url": "https://teamnamelab.com",
    "description": "Generate funny, inappropriate, and creative fantasy football team names instantly. The ultimate fantasy football team name generator with thousands of options.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://teamnamelab.com/generator",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEOHead
        title="Fantasy Football Team Names Generator - Team Name Lab"
        description="Generate the perfect fantasy football team name instantly! Choose from funny, inappropriate, player-themed, and pop culture categories. Free fantasy football team name generator with thousands of creative options."
        keywords="fantasy football team names, funny team names, inappropriate team names, fantasy football generator, creative team names, fantasy sports"
        canonicalUrl="/"
        schemaMarkup={schemaMarkup}
      />

      <div className="min-h-screen">
        {/* Header Ad Space */}
        <div className="w-full flex justify-center py-4 bg-gradient-field">
          <AdSpace size="header" />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-field">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Fantasy Football
                <span className="block text-primary">Team Names</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Generate the perfect team name for your fantasy football league. From hilarious puns to player references, find your winning identity.
              </p>
              <Link to="/generator">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                  <Zap className="mr-2 h-5 w-5" />
                  Generate a Team Name
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <Trophy className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Funny Names</CardTitle>
                  <CardDescription>
                    Hilarious puns and clever wordplay that'll have your league laughing
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <Star className="w-12 h-12 mx-auto text-secondary mb-4" />
                  <CardTitle>Inappropriate Names</CardTitle>
                  <CardDescription>
                    Edgy and bold names for leagues that aren't afraid to push boundaries
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Player-Themed</CardTitle>
                  <CardDescription>
                    Creative names based on your favorite NFL stars and personalities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <Zap className="w-12 h-12 mx-auto text-secondary mb-4" />
                  <CardTitle>Pop Culture</CardTitle>
                  <CardDescription>
                    Names inspired by movies, TV shows, and trending cultural references
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Content Section with Sidebar Ad */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    The Ultimate Fantasy Football Team Name Generator
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    Your fantasy football team name is more than just a label – it's your identity, your trash-talking ammunition, and your legacy in the league. Whether you're looking for something hilarious that'll get laughs at the draft, inappropriate names that push the envelope, or clever references to your favorite players, Team Name Lab has you covered.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Why Your Team Name Matters
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    A great fantasy football team name sets the tone for your entire season. It's the first thing your opponents see when they face you, and it can be a powerful psychological tool. A funny name can defuse tension, an inappropriate one can intimidate, and a clever player reference shows you know your football. Our generator helps you find that perfect balance of creativity, humor, and personality.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Categories We Cover
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Funny Team Names</h4>
                      <p className="text-sm text-muted-foreground">
                        From clever puns to wordplay that'll have your league rolling with laughter. Perfect for keeping things light and fun.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Inappropriate Names</h4>
                      <p className="text-sm text-muted-foreground">
                        For leagues that appreciate edgier humor. These names push boundaries while staying creative and memorable.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Player-Themed Names</h4>
                      <p className="text-sm text-muted-foreground">
                        Show your football knowledge with names based on current stars, legends, and rising talents in the NFL.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Pop Culture References</h4>
                      <p className="text-sm text-muted-foreground">
                        Blend your love of football with movies, TV shows, music, and internet culture for unique combinations.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link to="/generator">
                      <Button variant="secondary" size="lg">
                        Start Generating Names Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar with Ad */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <AdSpace size="sidebar" className="mx-auto" />
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Links</CardTitle>
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
                          Player Names →
                        </Button>
                      </Link>
                      <Link to="/pop-culture-names" className="block">
                        <Button variant="ghost" className="w-full justify-start">
                          Pop Culture →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inline Ad Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 text-center">
            <AdSpace size="inline" className="mx-auto" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;