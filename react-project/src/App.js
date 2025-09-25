import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css"; // CSSをインポート

function App() {
  const getInitialTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);
  const [filter, setFilter] = useState("all");

  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const name = todoNameRef.current.value.trim();
    if (!name) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name, completed: false },
    ]);
    todoNameRef.current.value = "";
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleClear = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const updateTodo = (id, newName) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, name: newName } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>React Todo App</h1>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />

      <input
        type="text"
        ref={todoNameRef}
        placeholder="タスクを入力"
        className="todo-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTodo();
        }}
      />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClear} style={{ marginLeft: "5px" }}>
        完了タスク削除
      </button>

      {/* フィルターボタン */}
      <div style={{ marginTop: "15px" }}>
        <span>表示: </span>
        <button
          className={`filter-button ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          すべて
        </button>
        <button
          className={`filter-button ${filter === "active" ? "active" : ""}`}
          onClick={() => setFilter("active")}
        >
          未完了
        </button>
        <button
          className={`filter-button ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          完了済み
        </button>
      </div>

      <div style={{ marginTop: "15px" }}>
        残りのタスク: {todos.filter((todo) => !todo.completed).length}
      </div>
    </div>
  );
}

export default App;
