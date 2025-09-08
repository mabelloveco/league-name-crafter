import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AdSpace } from "@/components/AdSpace";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Generator = () => {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the name generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The generator is on the homepage directly under the hero for one-click access."
        }
      },
      {
        "@type": "Question",
        "name": "How do I personalize a name?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Type a keyword like a player name. We blend it into templates such as “Mahomes Dynasty” or “Run Mahomes”."
        }
      },
      {
        "@type": "Question",
        "name": "What categories are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Funny, Inappropriate, Player-Themed, and Pop Culture."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use these names in my league?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. They’re for entertainment. Check your league rules for word restrictions."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Name Generator Q&A — Team Name Lab"
        description="Answers about how the fantasy football team name generator works, categories, and personalization."
        canonicalUrl="/generator"
        schemaMarkup={faqLd}
      />
      <div className="min-h-screen">
        <div className="w-full flex justify-center py-4 bg-gradient-field">
          <AdSpace size="header" />
        </div>

        <section className="py-10 md:py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 text-center">Generator Q&amp;A</h1>
              <p className="text-muted-foreground text-center mb-8">
                The generator now loads on the homepage. Use the button below to start.
              </p>

              <div className="flex justify-center mb-10">
                <Link to="/"><Button size="lg">Open Generator</Button></Link>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Short, practical answers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <h3 className="font-semibold mb-1">Where is the name generator?</h3>
                    <p className="text-sm text-muted-foreground">
                      On the homepage under the hero for one-click access.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">How do I personalize a name?</h3>
                    <p className="text-sm text-muted-foreground">
                      Type a keyword like a player or theme. We combine it with templates.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">What categories are available?</h3>
                    <p className="text-sm text-muted-foreground">
                      Funny, Inappropriate, Player-Themed, and Pop Culture.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Is it free?</h3>
                    <p className="text-sm text-muted-foreground">Yes. Copy and use names at no cost.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center mt-8">
                <AdSpace size="inline" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Generator;
