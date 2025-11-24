const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.join(__dirname, "highscores.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Failed to open DB:", err);
    process.exit(1);
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS high_scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      player_name TEXT NOT NULL,
      score INTEGER NOT NULL,
      wpm REAL,
      streak INTEGER,
      accuracy REAL,
      time_played TEXT,
      date_achieved DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id)
    )`
  );

  // Add missing columns if they don't exist
  db.run(`ALTER TABLE high_scores ADD COLUMN wpm REAL`, (err) => {
    if (err && !err.message.includes("duplicate column name")) {
      console.error("Error adding wpm column:", err);
    }
  });
  db.run(`ALTER TABLE high_scores ADD COLUMN streak INTEGER`, (err) => {
    if (err && !err.message.includes("duplicate column name")) {
      console.error("Error adding streak column:", err);
    }
  });
});

module.exports = db;
