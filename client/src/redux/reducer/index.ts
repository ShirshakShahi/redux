import { combineReducers } from "redux";
import { todoReducer } from "./todoReducers";
import { singleTodoReducer } from "./singleTodoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  // other reducers if needed
  singleTodo: singleTodoReducer,
});

export default rootReducer;
