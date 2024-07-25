import React, { useState } from "react";
import Footer from "./components/Footer";
import MainInput from "./components/MainInput";
import Main from "./components/Main";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [status, setStatus] = useState("all");

  let sortedTodos;

  if (status === "all") sortedTodos = todos;

  if (status === "active")
    sortedTodos = todos.filter((todo) => todo.isDone === false);

  if (status === "done")
    sortedTodos = todos.filter((todo) => todo.isDone === true);

  const doneCount = todos.filter((item) => !item.isDone).length;

  function handleTodoText(e) {
    setTodoText(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!todoText) return;
    const newTodo = { text: todoText, isDone: false, id: Date.now() };

    setTodos((todos) => [...todos, newTodo]);
    setTodoText("");
  }

  function handleTodoIsDone(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  }

  function handleDeleteDoneTodo() {
    setTodos((todos) => todos.filter((todo) => todo.isDone !== true));
  }

  return (
    <>
      <div className="container">
        <h1>Список задач</h1>
        <div className="main-wrapper">
          <MainInput
            onHandleTodoText={handleTodoText}
            onHandleSubmit={handleSubmit}
            todoText={todoText}
          />
          <div className="main">
            <Main onTodoIsDone={handleTodoIsDone} sortedTodos={sortedTodos} />
          </div>
          <div className="footer">
            <Footer
              todoStatus={status}
              onSetStatus={setStatus}
              todoDoneCount={doneCount}
              onHandleDeleteDoneTodo={handleDeleteDoneTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}
