import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { posts } from "@/blog/posts";

const BlogList = () => {
  return (
    <>
      <SEOHead
        title="Blog - Fantasy Football Team Names"
        description="Read articles about fantasy football team names, strategies, and tips."
        canonicalUrl="/blog"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
