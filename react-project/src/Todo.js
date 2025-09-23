import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div style={{ marginBottom: "5px" }}>
      <label style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleClick}
          style={{ marginRight: "5px" }}
        />
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
