require("dotenv").config();

const express = require("express");
const connectDB = require("./database");
const PORT = 8000;

const app = express();

app.use(express.json());
app.use("/recipes", recipeRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
