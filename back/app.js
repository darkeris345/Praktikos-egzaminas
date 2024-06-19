const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const procedureRouter = require("./routes/procedureRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });

  app.use("/api/v1/procedures", procedureRouter);
  app.use("/api/v1/users", userRouter);

  module.exports = app;

