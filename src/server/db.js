
import Database from 'better-sqlite3';
import { dirname, resolve } from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const dbPath = resolve(process.env.DB_PATH || './data/rss.db');
fs.mkdirSync(dirname(dbPath), { recursive: true });
const db = new Database(dbPath);

db.exec(`
CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY,
  source TEXT NOT NULL,
  title TEXT NOT NULL,
  url TEXT UNIQUE NOT NULL,
  published INTEGER,
  summary TEXT,
  tags TEXT
);
CREATE INDEX IF NOT EXISTS idx_published ON items(published DESC);
CREATE INDEX IF NOT EXISTS idx_source ON items(source);
`);

export default db;
