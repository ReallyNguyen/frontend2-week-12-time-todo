import { useContext, useState } from "react";
import TodoForm from "./ToDoForm";
import Todo from "./ToDo";
import { TodoContext } from "../data/ToDoContext";

export default function Todos() {
  const { tasks, removeTask, setTasks } = useContext(TodoContext);

  function toggleClick(task) {
    const updatedTask = tasks.map(function (list) {
      if (list.id === task.id) {
        list.clicked = !list.clicked;
        return list;
      } else {
        return list;
      }
    });
    setTasks(updatedTask);
  }

  return (
    <div className="longListContainer">
      <ul className="longList">
        {tasks.map((task) => (
          <Todo
            key={tasks.id}
            id={tasks.id}
            task={task}
            remove={removeTask}
            toggleClick={toggleClick}
          />
        ))}
      </ul>
      {/* <TodoForm addTask={addTask} /> */}
    </div>
  );
}
