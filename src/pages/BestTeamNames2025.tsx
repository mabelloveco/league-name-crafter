import { Link } from "react-router-dom";
import { Copy, Zap } from "lucide-react";
import { AdSpace } from "@/components/AdSpace";
import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const PAGE_PUBLISHED = "2025-09-11";
const PAGE_MODIFIED = "2026-08-18";
const PAGE_TITLE = "Best Fantasy Football Team Names for 2025";
const PAGE_DESCRIPTION =
  "A 2025 archive of fantasy football team names: pop culture, AI and tech, player puns, trash talk, and other memorable names from that season.";

type TeamNameEntry = {
  name: string;
  tagline: string;
};

const popCultureNames: TeamNameEntry[] = [
  { name: "Barbie's Pink Cleats", tagline: "Riding the Barbie wave" },
  { name: "Oppenheimer's Bombs", tagline: "For the explosive plays" },
  { name: "Wednesday's Addams Family", tagline: "Dark horse energy" },
  { name: "Succession Planning", tagline: "Business meets football" },
  { name: "House of the Dragon(s)", tagline: "Medieval conquest vibes" },
  { name: "Stranger Things Happened", tagline: "For those miracle wins" },
  { name: "The Last of Us(ers)", tagline: "Survival mode activated" },
  { name: "Guardians of the End Zone", tagline: "Marvel meets football" },
  { name: "Top Gun: Touchdownerick", tagline: "Cruise control to victory" },
  { name: "Everything Everywhere All at Once", tagline: "Chaos theory football" },
];

const aiTechNames: TeamNameEntry[] = [
  { name: "ChatGPT My Lineup", tagline: "Let the robots decide" },
  { name: "Artificial Intelligentsia", tagline: "Smart picks only" },
  { name: "The Algorithm", tagline: "Data-driven dominance" },
  { name: "Bitcoin Billionaires", tagline: "Crypto money, fantasy success" },
  { name: "TikTok Touchdown", tagline: "Short attention span, big wins" },
  { name: "Elon's Twitter Meltdown", tagline: "Chaos management" },
  { name: "Meta-Physical Football", tagline: "Virtual reality vibes" },
  { name: "NFT: No Fantasy Talent", tagline: "Self-deprecating humor" },
];

const quarterbackNames: TeamNameEntry[] = [
  { name: "Josh Allen-ergy Medication", tagline: "For explosive reactions" },
  { name: "Lamar Jackson Pollock", tagline: "Abstract art in motion" },
  { name: "Mahomes Depot", tagline: "Building championship dreams" },
  { name: "Tua Much Talent", tagline: "Miami magic" },
  { name: "Herbert's Secret Garden", tagline: "Growing greatness" },
  { name: "Burrow Into Victory", tagline: "Digging deep for wins" },
  { name: "Love Actually Wins", tagline: "Jordan Love believers" },
  { name: "Dak to the Future", tagline: "Time-traveling Cowboys" },
  { name: "Kyler Swift", tagline: "Young quarterback energy" },
];

const runningBackNames: TeamNameEntry[] = [
  { name: "McCaffrey's Coffee Shop", tagline: "Caffeinated excellence" },
  { name: "Barkley's Bark", tagline: "Loud and proud" },
  { name: "Cook's Kitchen Nightmares", tagline: "Serving up touchdowns" },
  { name: "Henry's Derrick-ing Crew", tagline: "Demolition expert" },
  { name: "Jacobs Ladder to Heaven", tagline: "Climbing to the top" },
  { name: "Mixon It Up", tagline: "Chemistry experiment" },
  { name: "Ekeler's Excellent Adventure", tagline: "Time-traveling fun" },
  { name: "Chubb's Fish Tales", tagline: "Big catch energy" },
  { name: "Aaron Jones Locker", tagline: "Secure storage for wins" },
];

const wideReceiverNames: TeamNameEntry[] = [
  { name: "Hill's Moving Company", tagline: "Speed delivery service" },
  { name: "Adams Family Values", tagline: "Spooky good catches" },
  { name: "Jefferson Airplane Mode", tagline: "Flying high offline" },
  { name: "Chase Bank Robbery", tagline: "Stealing touchdowns" },
  { name: "Diggs Deep Analysis", tagline: "Statistical superiority" },
  { name: "Evans' Better Call Saul", tagline: "Legal touchdown advice" },
  { name: "Cooper's Chicken Coop", tagline: "Farm-fresh catches" },
  { name: "Brown's Delivery Service", tagline: "Special delivery TDs" },
  { name: "Hopkins' Advanced Calculus", tagline: "Mathematical precision" },
];

const funnyNames: TeamNameEntry[] = [
  { name: "Last Place Loading...", tagline: "Embrace the tank" },
  { name: "404: Talent Not Found", tagline: "Tech humor meets football failure" },
  { name: "My Team's Mid", tagline: "Gen Z honesty" },
  { name: "Built Ford Tough (To Beat)", tagline: "Reverse psychology" },
  { name: "Participation Trophy FC", tagline: "At least you showed up" },
  { name: "The Benchwarmer Battalion", tagline: "Second string supremacy" },
  { name: "Waiver Wire Warriors", tagline: "Free agent excellence" },
  { name: "Practice Squad Heroes", tagline: "Developmental league legends" },
];

const trashTalkNames: TeamNameEntry[] = [
  { name: "Your Mom's Fantasy Team", tagline: "Classic roast" },
  { name: "Scoreboard Doesn't Lie", tagline: "Results speak volumes" },
  { name: "Undefeated in My Mind", tagline: "Mental championship" },
  { name: "Champions League Rejects", tagline: "Too good for this league" },
  { name: "Professional Widow Makers", tagline: "Ending fantasy marriages" },
  { name: "The Dream Crushers", tagline: "Hope elimination specialists" },
  { name: "Playoff Spoilers", tagline: "Ruining everyone's fun" },
  { name: "Commissioner's Nightmare", tagline: "Rule-bending chaos" },
];

const foodNames: TeamNameEntry[] = [
  { name: "Taylor's Ham, Egg & Cheese", tagline: "Regional breakfast pride" },
  { name: "Avocado Toast Touchdowns", tagline: "Millennial fuel" },
  { name: "Craft Beer Champions", tagline: "Hoppy about winning" },
  { name: "Taco Tuesday Triumphs", tagline: "Weekly celebration" },
  { name: "Pizza Delivery Defense", tagline: "30 minutes or less" },
  { name: "Chicken Tender Moments", tagline: "Comfort food comfort wins" },
  { name: "Energy Drink Overdose", tagline: "Caffeinated chaos" },
  { name: "Protein Shake Prophets", tagline: "Gym bro excellence" },
];

const memorableNames: TeamNameEntry[] = [
  { name: "Inevitable Disappointment FC", tagline: "Honest self-assessment" },
  { name: "The Josh Gordon Rehabilitation Center", tagline: "Hope springs eternal" },
  { name: "Kelce's Swift Delivery", tagline: "Pop culture perfection" },
  { name: "Tom Brady's Retirement Home", tagline: "Aging gracefully" },
  { name: "The Coaching Carousel", tagline: "Musical chairs mastery" },
  { name: "Red Zone Roulette", tagline: "High-stakes gambling" },
  { name: "Fourth Down and Forever", tagline: "Desperation mode" },
  { name: "The Hail Mary Specialists", tagline: "Miracle workers" },
  { name: "Garbage Time Heroes", tagline: "Late-game legends" },
  { name: "The Waiver Wire Wizards", tagline: "Free agent magic" },
];

const catalogNames: TeamNameEntry[] = [
  ...popCultureNames,
  ...aiTechNames,
  ...quarterbackNames,
  ...runningBackNames,
  ...wideReceiverNames,
  ...funnyNames,
  ...trashTalkNames,
  ...foodNames,
  ...memorableNames,
];

const findName = (name: string): TeamNameEntry => {
  const match = catalogNames.find((entry) => entry.name === name);
  if (!match) {
    throw new Error(`Missing 2025 archive name: ${name}`);
  }
  return match;
};

const standoutNames: TeamNameEntry[] = [
  findName("Barbie's Pink Cleats"),
  findName("Oppenheimer's Bombs"),
  findName("ChatGPT My Lineup"),
  findName("Elon's Twitter Meltdown"),
  findName("Josh Allen-ergy Medication"),
  findName("Mahomes Depot"),
  findName("McCaffrey's Coffee Shop"),
  findName("Kelce's Swift Delivery"),
  findName("404: Talent Not Found"),
  findName("Last Place Loading..."),
];

const sectionLinks = [
  { href: "#standout", label: "Standout Names" },
  { href: "#pop-culture", label: "Pop Culture" },
  { href: "#ai-tech", label: "AI & Tech" },
  { href: "#players", label: "Player-Specific" },
  { href: "#quarterbacks", label: "Quarterbacks" },
  { href: "#running-backs", label: "Running Backs" },
  { href: "#wide-receivers", label: "Wide Receivers" },
  { href: "#funny", label: "Funny / Self-Deprecating" },
  { href: "#trash-talk", label: "Trash Talk" },
  { href: "#food", label: "Food & Drink" },
  { href: "#tips", label: "Tips" },
  { href: "#memorable", label: "More Memorable Names" },
] as const;

const relatedCategories = [
  { to: "/funny-names", label: "Funny Fantasy Football Team Names" },
  { to: "/inappropriate-names", label: "Inappropriate Fantasy Football Team Names" },
  { to: "/player-themed-names", label: "Player-Themed Fantasy Football Team Names" },
  { to: "/pop-culture-names", label: "Pop Culture Fantasy Football Team Names" },
] as const;

const chunkNames = (names: readonly TeamNameEntry[], chunkSize = 5) => {
  const chunks: TeamNameEntry[][] = [];
  for (let i = 0; i < names.length; i += chunkSize) {
    chunks.push([...names.slice(i, i + chunkSize)]);
  }
  return chunks;
};

const BestTeamNames2025 = () => {
  const { toast } = useToast();

  const copyToClipboard = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      toast({
        title: "Copied!",
        description: `"${name}" copied to clipboard`,
      });
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
    "@type": "Article",
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    author: {
      "@type": "Organization",
      name: "Team Name Lab",
    },
    publisher: {
      "@type": "Organization",
      name: "Team Name Lab",
    },
    datePublished: PAGE_PUBLISHED,
    dateModified: PAGE_MODIFIED,
    mainEntityOfPage: "https://teamnamelab.com/best-team-names-2025",
  };

  const renderNameGrid = (names: readonly TeamNameEntry[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {chunkNames(names).map((chunk) => (
        <Card key={chunk.map((entry) => entry.name).join("|")} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="space-y-3">
              {chunk.map((entry) => (
                <div
                  key={entry.name}
                  className="flex items-start justify-between gap-3 p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="min-w-0">
                    <span className="font-medium text-foreground break-words">{entry.name}</span>
                    <p className="text-sm text-muted-foreground">{entry.tagline}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(entry.name)}
                    className="h-8 w-8 p-0 shrink-0"
                    aria-label={`Copy ${entry.name}`}
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
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        keywords="best fantasy football team names 2025, 2025 fantasy football names, 2025 player puns, 2025 pop culture team names"
        canonicalUrl="/best-team-names-2025"
        schemaMarkup={schemaMarkup}
      />

      <div className="min-h-screen bg-gradient-field">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <article className="lg:col-span-3">
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>2025 Season</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Badge variant="secondary" className="mb-4 tracking-[0.08em]">
                2025 Season
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{PAGE_TITLE}</h1>

              <p className="text-xl text-muted-foreground mb-4 max-w-3xl">
                A collection of memorable team-name ideas from the 2025 fantasy football season, including pop
                culture mashups, player puns, and league-chat jokes from that year.
              </p>

              <p className="text-sm text-muted-foreground mb-6">
                Published September 11, 2025
                <span className="mx-2">·</span>
                Updated August 18, 2026
              </p>

              <div className="mb-6">
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-12 w-full max-w-full px-6 py-3 text-base font-semibold shadow-md hover:shadow-lg whitespace-normal sm:w-auto [&_svg]:size-5"
                >
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}>
                    <Zap aria-hidden="true" />
                    Generate a Fantasy Football Team Name
                  </Link>
                </Button>
              </div>

              <nav aria-label="Table of contents" className="mb-8">
                <p className="text-sm font-semibold text-foreground mb-3">In this archive</p>
                <div className="flex flex-wrap gap-2">
                  {sectionLinks.map((link) => (
                    <Button key={link.href} asChild variant="outline" size="sm">
                      <a href={link.href}>{link.label}</a>
                    </Button>
                  ))}
                </div>
              </nav>

              <div className="flex justify-center mb-10">
                <AdSpace size="header" />
              </div>

              <section id="standout" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Standout Fantasy Football Team Names From 2025
                  </h2>
                  <p className="text-muted-foreground">
                    A short set of names that captured 2025 movies, tech jokes, and star players. The full lists
                    follow by category.
                  </p>
                </div>
                {renderNameGrid(standoutNames)}
              </section>

              <section id="pop-culture" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">2025 Pop Culture Team Names</h2>
                  <p className="text-muted-foreground">
                    Movie, TV, and franchise mashups that were circulating during the 2025 season.
                  </p>
                </div>
                {renderNameGrid(popCultureNames)}
              </section>

              <section id="ai-tech" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">AI & Tech Names From 2025</h2>
                  <p className="text-muted-foreground">
                    Chatbots, crypto, social apps, and other tech jokes that showed up in 2025 league names.
                  </p>
                </div>
                {renderNameGrid(aiTechNames)}
              </section>

              <section id="players" className="space-y-8 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Player-Specific Names From 2025</h2>
                  <p className="text-muted-foreground">
                    Quarterback, running back, and wide receiver puns from the original 2025 collection.
                  </p>
                </div>

                <div id="quarterbacks" className="space-y-4 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-foreground">Quarterbacks</h3>
                  {renderNameGrid(quarterbackNames)}
                </div>

                <div id="running-backs" className="space-y-4 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-foreground">Running Backs</h3>
                  {renderNameGrid(runningBackNames)}
                </div>

                <div id="wide-receivers" className="space-y-4 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-foreground">Wide Receivers</h3>
                  {renderNameGrid(wideReceiverNames)}
                </div>
              </section>

              <section id="funny" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Funny / Self-Deprecating Names</h2>
                  <p className="text-muted-foreground">
                    Names for the manager who wants the joke to land even if the roster does not.
                  </p>
                </div>
                {renderNameGrid(funnyNames)}
              </section>

              <section id="trash-talk" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Trash Talk Names</h2>
                  <p className="text-muted-foreground">
                    Direct shots, scoreboard jokes, and commissioner headaches from the 2025 list.
                  </p>
                </div>
                {renderNameGrid(trashTalkNames)}
              </section>

              <section id="food" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Food & Drink Names</h2>
                  <p className="text-muted-foreground">
                    Breakfast sandwiches, taco Tuesday, and other food puns from the 2025 collection.
                  </p>
                </div>
                {renderNameGrid(foodNames)}
              </section>

              <section id="tips" className="mb-12 scroll-mt-24">
                <Card>
                  <CardHeader>
                    <CardTitle>Tips for Choosing a Team Name</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">Ways these 2025 names were built</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Pair a football term with a movie, show, or inside joke</li>
                          <li>Use a city, local team, or regional food only your league will get</li>
                          <li>Borrow a headline or meme from the season you are naming</li>
                          <li>Call back to a league trade, collapse, or previous champion</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">Practical checks</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Ask whether the joke still works in Week 14</li>
                          <li>Pick a name that fits a profile picture or avatar</li>
                          <li>Keep it short enough to read on a phone</li>
                          <li>Lean into a personal connection if the pun is close</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="memorable" className="space-y-6 mb-12 scroll-mt-24">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">More Memorable Names From 2025</h2>
                  <p className="text-muted-foreground">
                    Additional names from the original 2025 collection, including football phrases and a few
                    player-and-pop-culture mashups.
                  </p>
                </div>
                {renderNameGrid(memorableNames)}
              </section>
            </article>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {relatedCategories.map((category) => (
                      <Link key={category.to} to={category.to} className="block">
                        <Button variant="ghost" className="w-full justify-start h-auto py-2 whitespace-normal text-left">
                          {category.label} →
                        </Button>
                      </Link>
                    ))}
                  </CardContent>
                </Card>

                <AdSpace size="sidebar" className="mx-auto" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestTeamNames2025;
