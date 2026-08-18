import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import { playerThemedNames, teamNames } from "@/data/teamNames";
import { Link } from "react-router-dom";
import { Zap, Copy, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PAGE_UPDATED = "2026-08-18";
const currentSeasonNameCount =
  playerThemedNames.quarterback.length +
  playerThemedNames.runningBack.length +
  playerThemedNames.wideReceiver.length +
  playerThemedNames.tightEnd.length;

const chunkNames = (names: readonly string[], chunkSize = 8) => {
  const chunks: string[][] = [];
  for (let i = 0; i < names.length; i += chunkSize) {
    chunks.push([...names.slice(i, i + chunkSize)]);
  }
  return chunks;
};

const popularPlayers = [
  {
    name: "Jahmyr Gibbs",
    label: "Lions RB",
    examples: ["Gibbs and Take", "Run It Gibbs", "Jahmyr Time"],
  },
  {
    name: "Bijan Robinson",
    label: "Falcons RB",
    examples: ["Bijan Mustard", "Bijan and the Jets", "Robinson Crusoe"],
  },
  {
    name: "Ja'Marr Chase",
    label: "Bengals WR",
    examples: ["Chase the Bag", "Chase Bank", "Catch Chase If You Can"],
  },
  {
    name: "Puka Nacua",
    label: "Rams WR",
    examples: ["Puka Shells", "Nacua Matata", "Puka Punch"],
  },
  {
    name: "Jaxon Smith-Njigba",
    label: "Seahawks WR",
    examples: ["JSN of a Gun", "Jaxon 5", "Njigba Vibes"],
  },
  {
    name: "Christian McCaffrey",
    label: "49ers RB",
    examples: ["CMC Hammer Time", "Run CMC", "McCaffrey's Marvels"],
  },
  {
    name: "Josh Allen",
    label: "Bills QB",
    examples: ["Josh Allen My Heart", "Allen the Family", "Josh Allen Wrench"],
  },
  {
    name: "Drake Maye",
    label: "Patriots QB",
    examples: ["Maye the Force Be With You", "It's Gonna Be Maye", "Maye Day"],
  },
  {
    name: "Travis Kelce",
    label: "Chiefs TE",
    examples: ["Kelce's Kingdom", "Here Comes Kelce", "Catching Kelce"],
  },
] as const;

const sectionLinks = [
  { href: "#popular-2026", label: "Popular 2026" },
  { href: "#quarterback", label: "Quarterbacks" },
  { href: "#running-back", label: "Running Backs" },
  { href: "#wide-receiver", label: "Wide Receivers" },
  { href: "#tight-end", label: "Tight Ends" },
  { href: "#classic", label: "Classic / Retired" },
] as const;

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
    headline: "Player-Themed Fantasy Football Team Names for 2026",
    description:
      "2026 fantasy football team names inspired by players you're drafting now, including Maye, Nix, Penix, Gibbs, and Chase, plus a classic retired-player section.",
    author: {
      "@type": "Organization",
      name: "Team Name Lab",
    },
    datePublished: PAGE_UPDATED,
    dateModified: PAGE_UPDATED,
  };

  const renderNameGrid = (names: readonly string[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {chunkNames(names).map((chunk, chunkIndex) => (
        <Card key={chunkIndex} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="space-y-3">
              {chunk.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors"
                >
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
  );

  return (
    <>
      <SEOHead
        title="Player-Themed Fantasy Football Team Names for 2026"
        description="2026 fantasy football team names inspired by players you're drafting now, including Maye, Nix, Penix, Gibbs, and Chase, plus a classic retired-player section."
        keywords="player themed fantasy football names 2026, Drake Maye team names, Bo Nix fantasy names, Penix Attack, Jahmyr Gibbs puns, Ja'Marr Chase team names, NFL player team names"
        canonicalUrl="/player-themed-names"
        schemaMarkup={schemaMarkup}
      />

      <div className="min-h-screen bg-gradient-field">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center mb-8">
            <AdSpace size="header" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Player-Themed Fantasy Football Team Names for 2026
                </h1>
                <p className="text-sm text-muted-foreground mb-4">Updated August 2026</p>
                <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Name your team after the players people are actually drafting this year. This list is built around
                  2026 ADP and current NFL rosters, with retired legends in their own section instead of mixed into
                  the current board.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {sectionLinks.map((link) => (
                    <Button key={link.href} asChild variant="outline" size="sm">
                      <a href={link.href}>{link.label}</a>
                    </Button>
                  ))}
                </div>
                <Button asChild size="lg" className="h-12 px-8 text-base font-semibold shadow-md hover:shadow-lg [&_svg]:size-5">
                  <a href="#popular-2026">
                    <Zap aria-hidden="true" />
                    Browse 2026 Player Names
                  </a>
                </Button>
              </div>

              <Card id="popular-2026" className="mb-8 scroll-mt-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-secondary" />
                    Popular 2026 Player Team Names
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Current stars and players people are drafting now. Early-round names from 2026 expert consensus
                    rankings, not a recycled list from the Brady era.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {popularPlayers.map((player) => (
                      <div key={player.name} className="space-y-2">
                        <h3 className="font-semibold text-primary">
                          {player.name} — {player.label}
                        </h3>
                        <ul className="space-y-1">
                          {player.examples.map((example) => (
                            <li
                              key={example}
                              className="text-sm text-muted-foreground flex items-center justify-between bg-accent/30 p-2 rounded"
                            >
                              <span>{example}</span>
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

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Why player names still work in 2026</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground">
                    Current ranking pages are updating for 2026 with new puns around Maye, Nix, Penix, Gibbs, and
                    Chase. A team name lands better when it matches the roster you just drafted, not a receiver who
                    changed teams two seasons ago.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Retired-player names still have a place in keeper leagues and throwback chats. They just should
                    not read like this year&apos;s draft board. Brady, Manning, and Favre live in the classic section
                    below.
                  </p>
                </CardContent>
              </Card>

              <div id="quarterback" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Quarterback Team Names</h2>
                  <p className="text-muted-foreground">
                    Mahomes, Allen, Lamar, Maye, Nix, Penix, and the rest of the 2026 quarterback conversation.
                    Drake Maye is a top-five fantasy quarterback in 2026 expert rankings after last year&apos;s
                    breakout. Bo Nix and Michael Penix Jr. are the pun machines on current name lists, even with
                    Penix working back from a 2025 ACL injury in Atlanta.
                  </p>
                </div>
                {renderNameGrid(playerThemedNames.quarterback)}
              </div>

              <div id="running-back" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Running Back Team Names</h2>
                  <p className="text-muted-foreground">
                    Gibbs and Bijan are the consensus top of 2026 drafts. Christian McCaffrey, Jonathan Taylor,
                    James Cook, Ashton Jeanty, and Derrick Henry still populate early-to-mid boards. Henry is in
                    his third season with the Baltimore Ravens, not Tennessee.
                  </p>
                </div>
                {renderNameGrid(playerThemedNames.runningBack)}
              </div>

              <div id="wide-receiver" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Wide Receiver Team Names</h2>
                  <p className="text-muted-foreground">
                    Chase, Puka, Jaxon Smith-Njigba, Amon-Ra St. Brown, CeeDee Lamb, and Justin Jefferson are the
                    names dominating 2026 WR drafts. Cooper Kupp is with the Seattle Seahawks. Stefon Diggs signed
                    with the Washington Commanders in August 2026 after a 2025 season in New England.
                  </p>
                </div>
                {renderNameGrid(playerThemedNames.wideReceiver)}
              </div>

              <div id="tight-end" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Tight End Team Names</h2>
                  <p className="text-muted-foreground">
                    Travis Kelce is back with the Kansas City Chiefs for a 14th season. Brock Bowers and Trey
                    McBride are the 2026 tight ends people are drafting first; George Kittle remains in San Francisco.
                  </p>
                </div>
                {renderNameGrid(playerThemedNames.tightEnd)}
              </div>

              <div id="classic" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Classic / Retired Player Names</h2>
                  <p className="text-muted-foreground">
                    Brady, Manning, Brees, Favre, Montana, Elway, Marino, and other legacy puns. These still work
                    for throwback leagues. They are not current 2026 draft targets, so they stay here instead of
                    sitting next to Maye and Gibbs.
                  </p>
                </div>
                {renderNameGrid(playerThemedNames.classicRetired)}
              </div>

              <Card className="mt-12">
                <CardHeader>
                  <CardTitle>Creating Player-Themed Names</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Naming Strategies</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Replace words in song titles with player names</li>
                        <li>Use player nicknames creatively</li>
                        <li>Reference famous plays or moments</li>
                        <li>Combine multiple players in one name</li>
                        <li>Check current team before using city or mascot puns</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">2026 Players Worth Naming Around</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Jahmyr Gibbs (Lions RB)</li>
                        <li>Bijan Robinson (Falcons RB)</li>
                        <li>Ja&apos;Marr Chase (Bengals WR)</li>
                        <li>Josh Allen (Bills QB)</li>
                        <li>Drake Maye (Patriots QB)</li>
                        <li>Derrick Henry (Ravens RB)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

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
                  <CardContent className="space-y-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">{currentSeasonNameCount}</div>
                      <div className="text-sm text-muted-foreground">2026 player names</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{playerThemedNames.classicRetired.length}</div>
                      <div className="text-sm text-muted-foreground">Classic / retired names</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-foreground">{teamNames.playerThemed.length}</div>
                      <div className="text-sm text-muted-foreground">Total in the generator</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <AdSpace size="inline" reserve={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerThemedNames;
