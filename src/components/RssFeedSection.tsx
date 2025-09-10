import React, { useEffect, useState } from "react";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
}

const RssFeedSection: React.FC = () => {
  const [items, setItems] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/rss")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items || []);
        setLoading(false);
      });
  }, []);

  return (
    <section className="my-8 p-4 bg-muted rounded-lg">
      <h2 className="text-xl font-bold mb-4">Latest Fantasy Football News</h2>
      {loading ? (
        <div>Loading RSS feed...</div>
      ) : (
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="border-b pb-2">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                {item.title}
              </a>
              <div className="text-xs text-muted-foreground">{item.pubDate}</div>
              {item.contentSnippet && <div className="text-sm mt-1">{item.contentSnippet}</div>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RssFeedSection;
