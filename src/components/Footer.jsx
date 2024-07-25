import React from "react";

export default function Footer({
  todoStatus,
  onSetStatus,
  todoDoneCount,
  onHandleDeleteDoneTodo,
}) {
  return (
    <>
      <p>
        {todoDoneCount !== 0
          ? `${todoDoneCount} задачи осталось`
          : "Задач нету"}
      </p>
      <div value={todoStatus} onClick={(e) => onSetStatus(e.target.value)}>
        <button value="all">Все</button>
        <button value="active">Активные</button>
        <button value="done">Завершенные</button>
      </div>
      <button onClick={onHandleDeleteDoneTodo}>Очистить завершенные</button>
    </>
  );
}
