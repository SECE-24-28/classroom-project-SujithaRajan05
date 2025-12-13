const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("Backend is working successfully ✔️");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
