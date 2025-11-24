const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // serve index.html, script.js, style.css, assets

// Get top 10 highscores
app.get("/api/highscores", (req, res) => {
  db.all(
    `SELECT player_name, score, wpm, streak, accuracy, time_played, date_achieved
     FROM high_scores
     ORDER BY score DESC, date_achieved ASC
     LIMIT 10`,
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows || []);
    }
  );
});

// Save a new highscore
app.post("/api/highscores", (req, res) => {
  const { user_id, player_name, score, wpm, streak, accuracy, time_played } =
    req.body;
  if (!player_name || typeof score !== "number") {
    return res
      .status(400)
      .json({ error: "player_name and numeric score required" });
  }

  db.run(
    `INSERT INTO high_scores (user_id, player_name, score, wpm, streak, accuracy, time_played)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      user_id ?? null,
      player_name,
      score,
      wpm ?? null,
      streak ?? null,
      accuracy ?? null,
      time_played ?? null,
    ],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Welcome endpoint
app.get("/api/welcome", (req, res) => {
  console.log(`Request received: ${req.method} ${req.path}`);
  res.json({ message: "Welcome to the Express API Service!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
