import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";
import { teamNames } from "@/data/teamNames";
import { Link } from "react-router-dom";
import { Zap, Copy, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InappropriateNames = () => {
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
    "headline": "Inappropriate Fantasy Football Team Names - Bold and Edgy Options",
    "description": "Discover edgy and bold fantasy football team names for leagues that appreciate boundary-pushing humor. Find the perfect inappropriate name for your team.",
    "author": {
      "@type": "Organization",
      "name": "Team Name Lab"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  const nameChunks = [];
  const chunkSize = 10;
  for (let i = 0; i < teamNames.inappropriate.length; i += chunkSize) {
    nameChunks.push(teamNames.inappropriate.slice(i, i + chunkSize));
  }

  return (
    <>
      <SEOHead
        title="Inappropriate Fantasy Football Team Names - Bold and Edgy Options"
        description="Discover edgy and bold fantasy football team names for leagues that appreciate boundary-pushing humor. Find the perfect inappropriate name for your team."
        keywords="inappropriate fantasy football team names, edgy team names, bold football names, adult fantasy football names"
        canonicalUrl="/inappropriate-names"
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
                  Inappropriate Fantasy Football Team Names
                </h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                  For leagues that aren't afraid to push boundaries. These edgy team names bring bold humor 
                  and unforgettable personality to your fantasy football experience. Use with discretion!
                </p>
                <Link to="/">
                  <Button variant="hero" size="lg">
                    <Zap className="mr-2 h-5 w-5" />
                    Generate Random Inappropriate Name
                  </Button>
                </Link>
              </div>

              {/* Warning Notice */}
              <Card className="mb-8 border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-destructive mb-2">Content Advisory</h3>
                      <p className="text-sm text-muted-foreground">
                        These team names contain edgy humor and adult themes. Please ensure your league is comfortable 
                        with this type of content before using. We recommend checking with your commissioner and fellow 
                        league members first. Remember, the goal is fun for everyone!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Edgy Names Work */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>The Power of Bold Team Names</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground">
                    Inappropriate team names can be incredibly effective in the right league setting. They create memorable 
                    impressions, establish a bold personality, and can even serve as psychological warfare against opponents. 
                    The key is knowing your audience and ensuring everyone in your league appreciates this style of humor.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    These names work best in established leagues where everyone knows each other well and has a similar 
                    sense of humor. They're conversation starters, trash-talking ammunition, and often become legendary 
                    within your fantasy community. Just remember: confidence is key when sporting an edgy team name!
                  </p>
                </CardContent>
              </Card>

              {/* Name Grid */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-foreground">
                  Our Collection of {teamNames.inappropriate.length} Bold Names
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

              {/* Guidelines Section */}
              <Card className="mt-12">
                <CardHeader>
                  <CardTitle>Guidelines for Using Inappropriate Names</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Know Your League</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Check with your commissioner first</li>
                        <li>• Consider workplace appropriateness</li>
                        <li>• Ensure everyone's comfort level</li>
                        <li>• Have a backup name ready</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Best Practices</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Clever over crude</li>
                        <li>• Innuendo over explicit</li>
                        <li>• Witty over offensive</li>
                        <li>• Fun over shocking</li>
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
                      <div className="text-3xl font-bold text-primary">{teamNames.inappropriate.length}</div>
                      <div className="text-sm text-muted-foreground">Bold Names Available</div>
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

export default InappropriateNames;