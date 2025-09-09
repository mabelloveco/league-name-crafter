
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


