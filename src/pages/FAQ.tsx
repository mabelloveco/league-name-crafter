import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How does the generator work?", "acceptedAnswer": { "@type": "Answer", "text": "Type a keyword (e.g., a player) and click Generate on the home page. Blank = random from the chosen category." } },
    { "@type": "Question", "name": "Is it free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can generate and copy names at no cost." } },
    { "@type": "Question", "name": "Can I use these names in my league?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. These are for entertainment. Check league rules for restricted words." } },
    { "@type": "Question", "name": "What categories are supported?", "acceptedAnswer": { "@type": "Answer", "text": "Funny, Inappropriate, Player-Themed, and Pop Culture. More over time." } },
    { "@type": "Question", "name": "Can I request names or a new category?", "acceptedAnswer": { "@type": "Answer", "text": "Yes—use the Contact page to suggest players, puns, or themes." } }
  ]
};

export default function FAQ() {
  return (
    <>
      <SEOHead
        title="FAQ — Team Name Lab"
        description="Frequently asked questions about Team Name Lab and the fantasy football team name generator."
        canonicalUrl="/faq"
        schemaMarkup={schemaMarkup}
      />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">FAQ</h1>

        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardHeader><CardTitle>How does the generator work?</CardTitle></CardHeader>
            <CardContent className="text-muted-foreground">
              Use the generator on the home page. Add a keyword to personalize or leave blank for random.
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Is it free?</CardTitle></CardHeader>
            <CardContent className="text-muted-foreground">Yes.</CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Can I use these names in my league?</CardTitle></CardHeader>
            <CardContent className="text-muted-foreground">
              Yes. These are for entertainment. Check your league’s rules.
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>What categories are supported?</CardTitle></CardHeader>
            <CardContent className="text-muted-foreground">
              Funny, Inappropriate, Player-Themed, and Pop Culture.
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Can I request names or a new category?</CardTitle></CardHeader>
            <CardContent className="text-muted-foreground">
              Use the Contact page to send suggestions.
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

