require("dotenv").config();
const port = process.env.port;
const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");
const loginRoute = require("./server/routes/login");
const mongoose = require("mongoose");

const db = process.env.MongoUri;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(layouts);

app.set("view engine", "ejs");
app.set("layout", "./layouts/main");

app.use("/users", loginRoute);

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
