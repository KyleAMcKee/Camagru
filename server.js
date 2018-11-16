const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// Database Config
const db = require("./config/keys.js").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

// Routes
app.get("/", (req, res) => res.send("Hello"));

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// ENV and port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
