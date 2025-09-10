import express from 'express';
import db from './db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8787;

app.get('/api/rss', (req, res) => {
  const items = db.prepare('SELECT * FROM items ORDER BY published DESC LIMIT 100').all();
  res.json({ items });
});

app.listen(PORT, () => {
  console.log(`RSS API server running on port ${PORT}`);
});
