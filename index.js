const express = require("express");
const app = express();
const PORT = 3000;

const cards = require("./api/data/cards.json");
const towers = require("./api/data/towers.json");

app.get("/cards", (req, res) => {
  res.json(cards);
});

app.get("/towers", (req, res) => {
  res.json(towers);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
