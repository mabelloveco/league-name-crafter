import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { getPostBySlug } from "@/blog/posts";

function renderBody(md: string) {
  return md.split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-semibold mt-6 mb-3">{line.replace(/^## /, "")}</h2>;
    }
    if (line.startsWith("- ")) {
      return <li key={i} className="ml-6 list-disc">{line.replace(/^- /, "")}</li>;
    }
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} className="mb-4 text-muted-foreground">{line}</p>;
  });
}

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog"><Button variant="secondary">Back to Blog</Button></Link>
      </div>
    );
  }

  // Minimal Article JSON-LD
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.description,
    author: { "@type": "Organization", name: "Team Name Lab" },
    publisher: { "@type": "Organization", name: "Team Name Lab" },
    mainEntityOfPage: `https://teamnamelab.com/blog/${post.slug}`,
  };

  return (
    <>
      <SEOHead
        title={`${post.title} — Team Name Lab`}
        description={post.description}
        canonicalUrl={`/blog/${post.slug}`}
        schemaMarkup={articleLd}
      />
      <article className="container mx-auto px-4 py-10 max-w-3xl">
        <nav className="mb-4 text-sm">
          <Link to="/blog" className="underline">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-muted-foreground">{post.title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-muted-foreground mt-2 mb-6">
          {new Date(post.date).toLocaleDateString()}
        </p>

        {/* Internal CTAs for key queries */}
        <div className="mb-6 flex flex-wrap gap-3">
          <Link to="/"><Button size="sm" variant="secondary">Use the Name Generator</Button></Link>
          <Link to="/funny-names"><Button size="sm" variant="outline">Funny Names</Button></Link>
          <Link to="/inappropriate-names"><Button size="sm" variant="outline">Inappropriate</Button></Link>
        </div>

        <div className="prose max-w-none">{renderBody(post.body)}</div>
      </article>
    </>
  );
};

export default BlogPost;
