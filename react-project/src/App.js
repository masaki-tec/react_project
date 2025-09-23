import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  // 🔹 初回ロード時に localStorage から読み込む
  const getInitialTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);

  const todoNameRef = useRef();

  // 🔹 todos が変わるたびに localStorage に保存
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // タスクを追加
  const handleAddTodo = () => {
    const name = todoNameRef.current.value.trim();
    if (name === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name: name, completed: false },
    ]);
    todoNameRef.current.value = "";
  };

  // タスク完了状態の切り替え
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 完了タスクの削除
  const handleClear = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>React Todo App</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input
        type="text"
        ref={todoNameRef}
        placeholder="タスクを入力"
        style={{ width: "70%", marginRight: "5px" }}
      />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClear} style={{ marginLeft: "5px" }}>
        完了タスク削除
      </button>
      <div style={{ marginTop: "10px" }}>
        残りのタスク: {todos.filter((todo) => !todo.completed).length}
      </div>
    </div>
  );
}

export default App;
