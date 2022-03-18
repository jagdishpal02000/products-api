const express = require("express");
const app = express();
const data = require("./data");

const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/api/v1/products/", (req, res) => {
  const page = req.query.page;
  if (page) {
    const newData = data.filter((prod) => {
      if (prod.id == 2 * page - 1 || prod.id == 2 * page) return true;
      return false;
    });
    res.json(newData);
  } else {
    res.json(data);
  }
});

app.get("/", (req, res) => {
  res.status(404).json("Invalid api request");
});

app.listen(5000, () => {
  console.log("app started listening on port no 5000");
});
