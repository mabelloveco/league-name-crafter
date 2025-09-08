import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { AdSpace } from "@/components/AdSpace";

const GeneratorFAQ = () => {
  const faq = [
    {
      q: "How does the generator work?",
      a: "Type a keyword like Mahomes or leave it blank. Click Generate. We blend your keyword into templates or pick from category lists.",
    },
    {
      q: "Is it free?",
      a: "Yes. Generate and copy names at no cost.",
    },
    {
      q: "Can I use these names in my league?",
      a: "Yes. They are for entertainment. Check your league rules if some words are restricted.",
    },
    {
      q: "What categories do you support?",
      a: "Funny, Inappropriate, Player-Themed, and Pop Culture. More coming.",
    },
    {
      q: "Can I request a name or category?",
      a: "Yes. Use the Contact page to suggest players, puns, or themes.",
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };

  return (
    <>
      <SEOHead
        title="Fantasy Football Team Name Generator — FAQ"
        description="Answers to common questions about using the Team Name Lab generator."
        canonicalUrl="/generator"
        schemaMarkup={schemaMarkup}
      />

      {/* Header ad */}
      <div className="w-full flex justify-center py-4 bg-gradient-field">
        <AdSpace size="header" />
      </div>

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Generator Q&amp;A</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ list */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar ad */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AdSpace size="sidebar" className="mx-auto" />
            </div>
          </div>
        </div>

        {/* Inline ad */}
        <div className="mt-10 flex justify-center">
          <AdSpace size="inline" />
        </div>
      </div>
    </>
  );
};

export default GeneratorFAQ;