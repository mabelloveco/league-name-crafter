import Parser from 'rss-parser';
import db from './db.js';
import dotenv from 'dotenv';
dotenv.config();

const parser = new Parser();
const FEEDS = [
  "https://www.rotowire.com/rss/news.php?sport=NFL",
  "https://www.nbcsports.com/profootballtalk.rss"
];
const MAX_ITEMS = parseInt(process.env.MAX_ITEMS_PER_FEED || '150', 10);

async function fetchAndStoreFeeds() {
  for (const url of FEEDS) {
    try {
      const feed = await parser.parseURL(url);
      const insert = db.prepare(`
        INSERT OR IGNORE INTO items (source, title, url, published, summary, tags)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      let count = 0;
      for (const item of feed.items) {
        if (count++ >= MAX_ITEMS) break;
        insert.run(
          url,
          item.title,
          item.link,
          new Date(item.pubDate || item.isoDate || Date.now()).getTime(),
          item.contentSnippet || item.summary || '',
          ''
        );
      }
    } catch (err) {
      console.error(`Failed to fetch ${url}:`, err);
    }
  }
}

fetchAndStoreFeeds().then(() => {
  console.log('RSS feeds fetched and stored.');
  process.exit(0);
});
