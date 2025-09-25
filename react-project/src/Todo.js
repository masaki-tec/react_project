import React, { useState } from "react";

const Todo = ({ todo, toggleTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todo.name);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleSave = () => {
    if (editName.trim() !== "") {
      updateTodo(todo.id, editName);
      setIsEditing(false);
    }
  };

  return (
    <div style={{ marginBottom: "5px" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            style={{ marginRight: "5px" }}
          />
          <button onClick={handleSave}>保存</button>
          <button onClick={() => setIsEditing(false)}>キャンセル</button>
        </>
      ) : (
        <label
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "gray" : "black",
            transition: "all 0.2s",
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            readOnly
            onChange={handleToggle}
            style={{ marginRight: "5px" }}
          />
          {todo.name}
          <button
            onClick={() => {
              setIsEditing(true);
              setEditName(todo.name);
            }}
            style={{ marginLeft: "10px" }}
          >
            編集
          </button>
        </label>
      )}
    </div>
  );
};

export default Todo;
