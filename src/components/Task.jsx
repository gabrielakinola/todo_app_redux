import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return (
    <div className="tasks-list">
      <p className="tasks-item">{task.description}</p>
      <button className="remove-button">Remove</button>
    </div>
  );
};

export default Task;
