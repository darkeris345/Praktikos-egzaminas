const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });

  app.use("/api/v1/users", userRouter);

  module.exports = app;

