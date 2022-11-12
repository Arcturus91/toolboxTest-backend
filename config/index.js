const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");

module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(express.static(path.join(__dirname, "..", "public")));

  app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5005"] }));

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
