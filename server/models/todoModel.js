const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isDone: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
