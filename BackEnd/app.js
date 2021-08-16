const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users-routes");
const productsRoutes = require("./routes/products-routes");
const ordersRoutes = require("./routes/orders-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
  next();
});

app.use("/api/products", productsRoutes);

app.use("/api/user", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://vardhan:1234@cluster0.u7hjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log("\nError while connecting to the database",err.message);
  });
