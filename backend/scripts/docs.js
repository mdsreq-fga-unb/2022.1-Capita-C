const express = require("express");
const path = require("path");

const server = express();

const coveragePath = path.resolve(__dirname, "..", "docs", "coverage", "lcov-report");
const dbDocsPath = path.resolve(__dirname, "..", "docs", "prismaModels");

server.use(express.static(coveragePath));
server.use(express.static(dbDocsPath));

server.get("/", (req, res) => {
  return res.sendFile(path.resolve(coveragePath, "index.html"));
});

server.get("/db", (req, res) => {
  return res.sendFile(path.resolve(dbDocsPath, "index.html"));
});

server.listen(5000, () => {
  console.log("Docs hosted on http://localhost:5000");
});
