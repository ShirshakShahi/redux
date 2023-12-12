const { Router } = require("express");

const {
  getSingleTodo,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = Router();

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").get(getSingleTodo).delete(deleteTodo).patch(updateTodo);

module.exports = router;
