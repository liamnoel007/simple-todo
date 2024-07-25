import React from "react";

export default function Main({ onTodoIsDone, sortedTodos }) {
  return (
    <ul>
      {sortedTodos.map((todo) => (
        <li
          className={todo.isDone ? "done" : ""}
          onClick={() => onTodoIsDone(todo.id)}
          key={todo.text}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
