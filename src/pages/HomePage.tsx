import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import GeneratorInline from "@/components/GeneratorInline"; // use inline generator component
import { Trophy, Zap, Users, Star } from "lucide-react";

const leagueButtonClassName =
  "h-11 rounded-xl bg-card px-6 font-semibold text-foreground shadow-[0_4px_14px_hsl(var(--foreground)/0.08)] ring-1 ring-foreground/5 transition-shadow duration-200 hover:bg-card hover:shadow-[0_6px_18px_hsl(var(--foreground)/0.12)]";

const HomePage = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Team Name Lab",
    url: "https://teamnamelab.com",
    description:
      "Generate funny, inappropriate, and creative fantasy football team names instantly. The ultimate fantasy football team name generator with thousands of options.",
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
        <div className="w-full flex justify-center py-3 bg-muted">
          <AdSpace size="header" reserve={false} />
        </div>

        {/* HERO + GENERATOR */}
        <section className="relative overflow-x-hidden py-12 md:py-16 bg-muted">
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

              <div className="relative mx-auto mt-14 max-w-3xl md:mt-16">
                <svg
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[120px] w-[140vw] max-w-none -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 1400 120"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 58 C 180 58, 280 100, 420 72 S 680 18, 860 62 S 1140 108, 1400 52"
                    stroke="hsl(var(--border))"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative z-10 rounded-[2.5rem] bg-card px-8 py-12 shadow-[0_12px_40px_-12px_hsl(var(--foreground)/0.12)] md:rounded-[3rem] md:px-16 md:py-16">
                  <span className="mb-5 inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                    Step 2
                  </span>
                  <h2 className="mx-auto mb-4 max-w-lg text-2xl font-bold tracking-tight text-foreground md:text-4xl md:leading-tight">
                    Did you register your team?
                  </h2>
                  <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    Use your new team name when creating or managing your fantasy football team on Yahoo Fantasy, ESPN Fantasy Football, or Sleeper.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button asChild variant="ghost" className={leagueButtonClassName}>
                      <a
                        href="https://football.fantasysports.yahoo.com/f1/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Yahoo Fantasy
                      </a>
                    </Button>
                    <Button asChild variant="ghost" className={leagueButtonClassName}>
                      <a
                        href="https://fantasy.espn.com/football/league/create"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ESPN Fantasy Football
                      </a>
                    </Button>
                    <Button asChild variant="ghost" className={leagueButtonClassName}>
                      <a
                        href="https://sleeper.com/create"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sleeper
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/funny-names">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Trophy className="w-12 h-12 mx-auto text-primary mb-4" />
                    <CardTitle>Funny Names</CardTitle>
                    <CardDescription>Hilarious puns and clever wordplay that'll have your league laughing</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/inappropriate-names">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Star className="w-12 h-12 mx-auto text-secondary mb-4" />
                    <CardTitle>Inappropriate Names</CardTitle>
                    <CardDescription>Edgy and bold names for leagues that aren't afraid to push boundaries</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/player-themed-names">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                    <CardTitle>Player-Themed</CardTitle>
                    <CardDescription>Creative names based on your favorite NFL stars and personalities</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link to="/pop-culture-names">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Zap className="w-12 h-12 mx-auto text-secondary mb-4" />
                    <CardTitle>Pop Culture</CardTitle>
                    <CardDescription>Names inspired by movies, TV shows, and trending cultural references</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
                <Link to="/best-team-names-2025">
                  <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <Star className="w-12 h-12 mx-auto text-primary mb-4" />
                      <CardTitle>OP Best Fantasy Football Team Names</CardTitle>
                      <CardDescription>Discover the top fantasy football team names for 2025</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
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
                  {/* Placeholder image for sidebar ad removed */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inline Ad at bottom - only show if ads are available */}
  {/* Inline Ad at bottom - placeholder image if no real ad */}
      </div>
    </>
  );
};

export default HomePage;
