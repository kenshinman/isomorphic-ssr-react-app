import "babel-polyfill";
import React from "react";
import express from "express";
import renderer from "./helpers/renderer";

import Home from "./client/components/Home";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  //some loginc to initialie and load data to store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("ronning on port 3000");
});
