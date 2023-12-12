const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const todoRouter = require("./routes/todoRoute");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/todos", todoRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connection with db established");
    app.listen(port, () => {
      console.log(`server started on http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
