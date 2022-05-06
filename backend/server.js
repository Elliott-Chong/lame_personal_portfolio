const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const PORT = 5000;
const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("personal portfolio API running");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  await sleep(1000);
  res.send("success");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
