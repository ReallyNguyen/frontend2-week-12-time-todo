import { TodoContext } from "../data/ToDoContext";
import { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


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

        >
          <IconButton aria-label="edit" size="large" color="success">
            <EditIcon />
          </IconButton>
        </div>
        <div onClick={handleDelete}>
          <IconButton aria-label="delete" size="large" color="error">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
