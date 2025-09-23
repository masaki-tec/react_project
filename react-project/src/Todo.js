import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div style={{ marginBottom: "5px" }}>
      <label
        style={{
          textDecoration: todo.completed ? "line-through" : "none", // 横線
          color: todo.completed ? "gray" : "black",                  // 完了ならグレー、未完了は黒
          transition: "all 0.2s",                                   // 線・色の変化を滑らかに
        }}
      >
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

