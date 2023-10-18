import Todos from "./components/ToDoList";
import { TodoContext } from "./data/ToDoContext";
import "./styles.css";
import { useState } from "react";
import TodoForm from "./components/ToDoForm";

export default function App() {
  const [editing, setEditing] = useState(null);

  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTask = [...tasks, task];
    setTasks(updatedTask);
    setEditing(null);
  }

  function removeTask(task) {
    const updatedTask = tasks.filter(function (list) {
      return list.id !== task.id;
    });
    setTasks(updatedTask);
    setEditing(null);
  }

  function updateTask(task) {
    setTasks(
      tasks.map(function (t) {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
    //Remove the form after creating a product
    setEditing(null);
  }

  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          tasks,
          setTasks,
          updateTask,
          addTask,
          removeTask,
          setEditing,
          editing
        }}
      >
        <h1>Task Management App</h1>
        {!editing ? (
          <>
            <Todos />
            <button className="add" onClick={() => setEditing("new")}>
              Add
            </button>
          </>
        ) : (
          <>
            <TodoForm />
          </>
        )}
      </TodoContext.Provider>
    </div>
  );
}
