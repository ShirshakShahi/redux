import { FC } from "react";
import AddTodo from "../components/add_todo/AddTodo";
import TodoList from "../components/todo_list/TodoList";

const HomePage: FC = () => {
  return (
    <>
      <AddTodo />
      <div
        style={{
          // backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          scrollBehavior: "auto",
        }}
      >
        <TodoList />
      </div>
    </>
  );
};

export default HomePage;
