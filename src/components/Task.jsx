import React from "react";
import "./Task.css";
import { removeTask, toggleCompleted } from "../slices/todoSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Task = ({ task, editTask }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeTask({ id: task.id }));
    toast.success("Task removed successfully");
  };
  const toggleHandler = () => {
    dispatch(toggleCompleted({ id: task.id }));
    toast.success("Task updated successfully");
  };
  return (
    <div className="tasks-list">
      <div>
        <h3 className="tasks-item">{task.name}</h3>
        <p className="tasks-item">{task.description}</p>
      </div>
      <div className="task-actions">
        <button
          className="edit-button"
          onClick={() => {
            editTask(task);
          }}
        >
          Edit
        </button>
        <button className="remove-button" onClick={removeHandler}>
          Remove
        </button>
        <label>{task.completed ? "Mark as undone" : "Mark as done"}</label>
        <input
          className="task-check"
          type="checkbox"
          checked={task.completed}
          onChange={toggleHandler}
        />
      </div>
    </div>
  );
};

export default Task;
