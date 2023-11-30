import { TodoContext } from "../data/ToDoContext";
import { useContext } from "react";

export default function Todo(props) {
  const { setEditing } = useContext(TodoContext);
  const task = props.task;


  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleClick(task);
  }

  return (
    <div className="singleTask">
      <div className="todoDetails">
        <input
          type="checkbox"
          onChange={handleStatusChange}
          checked={task.clicked}
        />
        <span className={`title ${task.clicked ? "completed" : ""}`}>
          {task.clicked ? <del>{task.title}</del> : task.title}
        </span>
      </div>

      <p> Started at: {task.date} </p>
      <div className="buttons">
        <div
          onClick={() => setEditing(task.id)}
          className="actionButton edit-btn"
        >
          edit
        </div>
        <div onClick={handleDelete} className="actionButton delete-btn">
          remove
        </div>
      </div>
    </div>
  );
}
