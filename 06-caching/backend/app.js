import express from "express";

const app = express();

app.get("/messages", (req, res) => {
  const requestSource = req.headers["x-id"];
  // To Achive Request Memoization - make the same request from frontend by removing header config which make differences
  // Then after the above change "resquestSource" will undefined
  console.log(
    `${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`
  );
  res.json([
    { id: 1, text: "Hello World" },
    { id: 2, text: "Another message from the separate backend" },
  ]);
});

app.listen(8080);
