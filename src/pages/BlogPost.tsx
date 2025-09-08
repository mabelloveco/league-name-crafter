import { useParams } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { posts } from "@/blog/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div className="container mx-auto px-4 py-12">Post not found.</div>;

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
      />
      <div className="container mx-auto px-4 py-12 prose prose-lg max-w-none">
        <h1 className="mb-6">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  );
};

export default BlogPost;
