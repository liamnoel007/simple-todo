import React from "react";

export default function MainInput({
  onHandleTodoText,
  onHandleSubmit,
  todoText,
}) {
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Что надо сделать?"
          value={todoText}
          onChange={(e) => onHandleTodoText(e.target.value)}
        ></input>
      </form>
    </>
  );
}
