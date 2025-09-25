import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
  return todos.map((todo) => (
    <Todo
      todo={todo}
      key={todo.id}
      toggleTodo={toggleTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  ));
};

export default TodoList;
