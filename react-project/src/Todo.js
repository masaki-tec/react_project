import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./App.css"; // CSSファイルをインポート

const Todo = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
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
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="todo-edit-input"
          />
          <button onClick={handleSave} className="todo-button">
            保存
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="todo-button cancel"
          >
            キャンセル
          </button>
        </>
      ) : (
        <>
          <div className="todo-left">
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              onChange={handleToggle}
              className="todo-checkbox"
            />
            <span className={todo.completed ? "todo-name completed" : "todo-name"}>
              {todo.name}
            </span>
          </div>

          <div className="todo-right">
            <button
              onClick={() => {
                setIsEditing(true);
                setEditName(todo.name);
              }}
              className="todo-button"
            >
              編集
            </button>
            <FaTrash
              onClick={() => deleteTodo(todo.id)}
              className="todo-trash"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
