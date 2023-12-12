const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");

const getSingleTodo = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id });
    if (!todo) {
      return res.status(404).json({ msg: `No todo with id${id} found !!!` });
    }
    res.status(200).json({ todo, status: `success` });
  } catch (err) {
    res.status(500).json({ msg: "internal server error" });
  }
});

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({}).select("-__v");
  res
    .status(200)
    .json({ data: todos, status: "success", nbHits: todos.length });
  if (!todos) {
    return res.status(404).json({ msg: `No Todos Found`, status: "success" });
  }
});

const createTodo = asyncHandler(async (req, res) => {
  try {
    const { title, description, isDone } = req.body;
    const todo = await Todo.create({ title, description, isDone });
    res.status(200).json({ todo, status: "success" });
  } catch (err) {
    return res.status(500).json({ msg: `something went wrong` });
  }
});

const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById({ _id: id });
  if (todo) {
    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;
    todo.isDone = req.body.isDone || todo.isDone;
    const updatedTodo = await todo.save();
    res.status(200).json({ updatedTodo });
  }
});

const deleteTodo = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const todo = await Todo.findByIdAndDelete({ _id: taskId });
  if (!todo) {
    res.status(404).json({ msg: `Todo with ${taskId} isnot found` });
  } else {
    res.status(200).json({ todo });
  }
});

module.exports = {
  getSingleTodo,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
