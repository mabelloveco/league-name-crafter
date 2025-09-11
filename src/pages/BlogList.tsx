import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { getAllPosts } from "@/blog/posts";

const BlogList = () => {
  const items = getAllPosts();

  return (
    <>
      <SEOHead
        title="Blog — Fantasy Football Team Names"
        description="Guides, lists, and generators for fantasy football team names."
        canonicalUrl="/blog"
      />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog</h1>

        {/* Top topics for internal linking */}
        <div className="mb-8 flex flex-wrap gap-2 text-sm">
          <Link to="/" className="underline">team name generator</Link>
          <Link to="/funny-names" className="underline">funny team names</Link>
          <Link to="/inappropriate-names" className="underline">inappropriate team names</Link>
          <Link to="/player-themed-names" className="underline">player-themed</Link>
          <Link to="/pop-culture-names" className="underline">pop culture</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((p) => (
            <Card key={p.slug} className="hover:shadow-md ">
              <CardHeader>
                <CardTitle className="text-xl">
                  <Link to={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {new Date(p.date).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{p.description}</p>
                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t: string) => (
                      <span key={t} className="text-xs bg-muted px-2 py-1 rounded">#{t}</span>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;

