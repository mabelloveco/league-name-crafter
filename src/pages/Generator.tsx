// src/pages/Generator.tsx
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the generator work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Type a keyword such as a player or theme and click Generate on the home page. If you leave it blank, a random name is chosen from the selected category."
      }
    },
    {
      "@type": "Question",
      "name": "Is it free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can generate and copy names at no cost."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use these names in my league?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. These names are for entertainment. Check your league rules if certain words are restricted."
      }
    },
    {
      "@type": "Question",
      "name": "What categories are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Funny, Inappropriate, Player-Themed, and Pop Culture. More will be added over time."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request names or a new category?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—use the Contact page to suggest players, puns, or themes."
      }
    }
  ]
};

export default function GeneratorFAQ() {
  return (
    <>
      <SEOHead
        title="Generator Q&A — Team Name Lab"
        description="Answers to common questions about the Team Name Lab generator, categories, and usage."
        canonicalUrl="/generator"
        schemaMarkup={schemaMarkup}
      />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Generator Q&amp;A</h1>

        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>How does the generator work?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Type a keyword such as a player or theme and click <strong>Generate</strong> on the home page.
              If you leave it blank, a random name is chosen from your selected category.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Is it free?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Yes. You can generate and copy names at no cost.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I use these names in my league?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Yes. These names are for entertainment. Check your league rules if certain words are restricted.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What categories are supported?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Funny, Inappropriate, Player-Themed, and Pop Culture. We add more over time.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can I request names or a new category?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Yes—use the Contact page to suggest players, puns, or themes.
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
