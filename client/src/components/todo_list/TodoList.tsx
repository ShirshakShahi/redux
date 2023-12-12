import React, { useEffect } from "react";
import TodoItem from "../todo_item/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos } from "../../redux/actions/todoActions";
import { AppState } from "../../redux/reducer/todoReducers";

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: { todos: AppState }) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const handleDeletion = (_id: string) => {
    dispatch(deleteTodo(_id));
  };

  return (
    <>
      {todos.length !== 0 &&
        todos?.map((todo) => {
          return (
            <TodoItem
              handleDeletion={() => handleDeletion(todo._id)}
              key={todo._id}
              _id={todo._id}
              title={todo.title}
              description={todo.description}
            />
          );
        })}
    </>
  );
};

export default TodoList;
