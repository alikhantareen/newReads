const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const routes = require("./Callbacks/index");

//Database connection
(async () => {
  await mongoose.connect(
    "mongodb+srv://alikhantareen:Pakistan786@cluster0.po7h8av.mongodb.net/newsapp"
  );
  console.log("MongoDB connected");
})();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", routes.getAllNews);
app.get("/:id", routes.getSpecificNews);
app.get("/category/:category", routes.getNewsByCategory);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
