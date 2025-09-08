
// src/blog/posts.ts
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;       // ISO
  tags: string[];
  body: string;       // markdown-ish
};

export const posts: Post[] = [
  {
    slug: "best-fantasy-football-team-names-2025",
    title: "Best Fantasy Football Team Names for 2025",
    description:
      "A curated list of funny, inappropriate, player-themed, and pop culture team names for this season.",
    date: "2025-09-08",
    tags: ["fantasy", "team-names", "2025"],
    body: `
## Top Funny Names
- Mahomes Alone
- Kittle Corn
- Hurts So Good

## Player-Themed
- Chase The Bag (Ja'Marr Chase)
- Bijan Mustard

## Tips
Short, memorable, and relevant to your league's vibe wins.
    `.trim(),
  },
  {
    slug: "how-to-pick-a-fantasy-football-team-name",
    title: "How to Pick a Fantasy Football Team Name",
    description:
      "Simple framework for choosing a name that fits your persona and league culture.",
    date: "2025-09-07",
    tags: ["guide", "how-to"],
    body: `
## Framework
1. Choose a theme (funny, edgy, player).
2. Add wordplay.
3. Keep it short.

## Examples
- Run CMC
- Brock and Roll
    `.trim(),
  },
];

// helpers
export const getAllPosts = () =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);

nano src/pages/BlogList.tsx

import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { getAllPosts } from "@/blog/posts";

const BlogList = () => {
  const items = getAllPosts();

  return (
    <>
      <SEOHead
        title="Blog — Team Name Lab"
        description="Tips, lists, and guides about fantasy football team names."
        canonicalUrl="/blog"
      />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((p) => (
            <Card key={p.slug} className="hover:shadow-md transition">
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
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-muted px-2 py-1 rounded"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;

nano src/pages/BlogPost.tsx

import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { getPostBySlug } from "@/blog/posts";
import { Button } from "@/components/ui/button";

function renderBody(md: string) {
  // super-light markdown: headings + bullets + paragraphs
  return md.split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-semibold mt-6 mb-3">
          {line.replace(/^## /, "")}
        </h2>
      );
    }
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="ml-6 list-disc">
          {line.replace(/^- /, "")}
        </li>
      );
    }
    if (line.trim() === "") return <br key={i} />;
    return (
      <p key={i} className="mb-4 text-muted-foreground">
        {line}
      </p>
    );
  });
}

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog">
          <Button variant="secondary">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} — Team Name Lab`}
        description={post.description}
        canonicalUrl={`/blog/${post.slug}`}
      />
      <article className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-muted-foreground mt-2 mb-6">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div className="prose max-w-none">{renderBody(post.body)}</div>
      </article>
    </>
  );
};

export default BlogPost;

nano src/App.tsx

// imports
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

// inside <Routes>
<Route path="/blog" element={<BlogList />} />
<Route path="/blog/:slug" element={<BlogPost />} />

<Link to="/blog" className="block">
  <Button variant="ghost" className="w-full justify-start">Blog →</Button>
</Link>

git add src/blog/posts.ts src/pages/BlogList.tsx src/pages/BlogPost.tsx src/App.tsx public/sitemap.xml
git commit -m "Add blog (list + post), routes, seed posts, and sitemap entries"
git push

pico src/blog/posts.ts

export type Post = {
  slug

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;       // ISO
  tags: string[];
  body: string;       // simple markdown
};

export const posts: Post[] = [
  {
    slug: "best-fantasy-football-team-names-2025",
    title: "Best Fantasy Football Team Names for 2025",
    description: "Funny, inappropriate, player-themed, and pop culture name ideas.",
    date: "2025-09-08",
    tags: ["fantasy", "team-names", "2025"],
    body: `
## Top Funny Names
- Mahomes Alone
- Kittle Corn
- Hurts So Good

## Player-Themed
- Chase The Bag
- Bijan Mustard

## Tips
Short, memorable, and on-theme wins.
`.trim(),
  },
  {
    slug: "how-to-pick-a-fantasy-football-team-name",
    title: "How to Pick a Fantasy Football Team Name",
    description: "Simple framework for picking a great name.",
    date: "2025-09-07",
    tags: ["guide", "how-to"],
    body: `
## Framework
1. Pick a theme (funny, edgy, player).
2. Add wordplay.
3. Keep it short.

## Examples
- Run CMC
- Brock and Roll
`.trim(),
  },
];

export const getAllPosts = () =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);

pico src/blog/posts.ts

nano src/blog/posts.ts

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;       // ISO
  tags: string[];
  body: string;       // simple markdown
};

export const posts: Post[] = [
  {
    slug: "best-fantasy-football-team-names-2025",
    title: "Best Fantasy Football Team Names for 2025",
    description: "Funny, inappropriate, player-themed, and pop culture name ideas.",
    date: "2025-09-08",
    tags: ["fantasy", "team-names", "2025"],
    body: `
## Top Funny Names
- Mahomes Alone
- Kittle Corn
- Hurts So Good

## Player-Themed
- Chase The Bag
- Bijan Mustard

## Tips
Short, memorable, and on-theme wins.
`.trim(),
  },
  {
    slug: "how-to-pick-a-fantasy-football-team-name",
    title: "How to Pick a Fantasy Football Team Name",
    description: "Simple framework for picking a great name.",
    date: "2025-09-07",
    tags: ["guide", "how-to"],
    body: `
## Framework
1. Pick a theme (funny, edgy, player).
2. Add wordplay.
3. Keep it short.

## Examples
- Run CMC
- Brock and Roll
`.trim(),
  },
];

export const getAllPosts = () =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);


