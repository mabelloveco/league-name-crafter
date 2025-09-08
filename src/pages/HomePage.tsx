import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import GeneratorInline from "@/components/GeneratorInline"; // use inline generator component
import { Trophy, Zap, Users, Star } from "lucide-react";

const HomePage = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Team Name Lab",
    url: "https://teamnamelab.com",
    description:
      "Generate funny, inappropriate, and creative fantasy football team names instantly. The ultimate fantasy football team name generator with thousands of options.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://teamnamelab.com/generator",
      "query-input": "required name=search_term_string",
    },
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
        {/* Header Ad (no reserve so it won't leave gaps until ads serve) */}
        <div className="w-full flex justify-center py-3 bg-gradient-field">
          <AdSpace size="header" reserve={false} />
        </div>

        {/* HERO + GENERATOR */}
        <section className="relative py-12 md:py-16 bg-gradient-field">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 md:mb-6">
                Fantasy Football
                <span className="block text-primary">Team Names</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                Generate the perfect team name for your fantasy football league. From hilarious puns to player references, find your winning identity.
              </p>

              {/* Inline generator inside hero */}
              <div className="max-w-4xl mx-auto">
                <GeneratorInline />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Trophy className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Funny Names</CardTitle>
                  <CardDescription>Hilarious puns and clever wordplay that'll have your league laughing</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="w-12 h-12 mx-auto text-secondary mb-4" />
                  <CardTitle>Inappropriate Names</CardTitle>
                  <CardDescription>Edgy and bold names for leagues that aren't afraid to push boundaries</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Player-Themed</CardTitle>
                  <CardDescription>Creative names based on your favorite NFL stars and personalities</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-12 h-12 mx-auto text-secondary mb-4" />
                  <CardTitle>Pop Culture</CardTitle>
                  <CardDescription>Names inspired by movies, TV shows, and trending cultural references</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Content + Sidebar Ad */}
        <section className="py-10 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    The Ultimate Fantasy Football Team Name Generator
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Your fantasy football team name is more than just a label – it's your identity, your trash-talking ammunition, and your legacy in the league.
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Why Your Team Name Matters</h3>
                  <p className="text-muted-foreground mb-6">
                    A great fantasy football team name sets the tone for your season. A funny name can get laughs, an inappropriate one can intimidate, and a clever reference shows you know your football.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Collapse until ads go live */}
                  <AdSpace size="sidebar" reserve={false} className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inline Ad at bottom */}
        <section className="py-6 md:py-8 bg-background">
          <div className="container mx-auto px-4 text-center">
            {/* Collapse until ads go live */}
            <AdSpace size="inline" reserve={false} className="mx-auto" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
