import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "../data/ToDoContext";

export default function TodoForm() {
  const {
    tasks,
    addTask,
    updateTask,
    setEditing,
    editing
  } = useContext(TodoContext);

  let initialData = {
    title: "",
    date: new Date().toLocaleTimeString()
  };

  if (editing !== "new") {
    initialData = tasks.find(function (p) {
      return p.id === editing;
    });
  }

  const [task, setTask] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addTask({ ...task, id: nanoid() });
    } else {
      updateTask(task);
    }
  }

  function handleTitleChange(e, field) {
    if (field === "title") {
      setTask({ ...task, [field]: e.target.value, date: new Date().toLocaleTimeString() });
    } else {
      setTask({ ...task, [field]: e.target.value });
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>
            <input
              type="text"
              onChange={(e) => handleTitleChange(e, "title")}
              value={task.title}
              placeholder="New Task Title"
            />
          </label>
        </div>

        <div className="form-btns">
          <button className="add" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
