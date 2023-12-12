const asyncHandler = require("express-async-handler");
const connectDB = require("./db/connect");
const Todo = require("./models/todoModel");

require("dotenv").config();

const todoList = [
  {
    title: "Buy groceries",
    description: "Pick up milk, eggs, and bread from the store.",
    isDone: false,
  },
  {
    title: "Finish work report",
    description: "Complete the quarterly financial report for the team.",
    isDone: true,
  },
  {
    title: "Call Mom",
    description: "Check in with Mom and wish her a happy birthday.",
    isDone: false,
  },
  {
    title: "Exercise",
    description: "Go for a 30-minute jog in the park.",
    isDone: true,
  },
  {
    title: "Plan vacation",
    description: "Research and plan a summer vacation destination.",
    isDone: false,
  },
  {
    title: "Read a book",
    description: "Start reading 'The Catcher in the Rye.'",
    isDone: false,
  },
  {
    title: "Pay bills",
    description: "Settle electricity, water, and internet bills.",
    isDone: false,
  },
  {
    title: "Attend meeting",
    description: "Join the team meeting at 2:00 PM.",
    isDone: true,
  },
  {
    title: "Clean the house",
    description: "Vacuum, dust, and organize the living room.",
    isDone: false,
  },
  {
    title: "Write thank-you notes",
    description: "Express gratitude to friends for birthday gifts.",
    isDone: true,
  },
  {
    title: "Study for exam",
    description: "Review notes and prepare for the upcoming history exam.",
    isDone: false,
  },
  {
    title: "Fix leaky faucet",
    description: "Call the plumber to fix the kitchen faucet.",
    isDone: false,
  },
  {
    title: "Watch a movie",
    description: "Enjoy a relaxing evening with a comedy film.",
    isDone: false,
  },
  {
    title: "Research new phone",
    description: "Look for options for a new smartphone upgrade.",
    isDone: false,
  },
  {
    title: "Water the plants",
    description: "Give the indoor plants some much-needed hydration.",
    isDone: true,
  },
];

const populateDatas = asyncHandler(async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("db connected");
  await Todo.deleteMany();
  await Todo.create(todoList);
  console.log("datas inserted");
  process.exit(0);
});

populateDatas();
