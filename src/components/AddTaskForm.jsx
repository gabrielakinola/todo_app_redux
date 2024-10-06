import React from "react";
import { useState } from "react";
import "./AddTaskForm.css";

const AddTaskForm = () => {
  const [inputValues, setInputValues] = useState({ name: "", description: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div className="input-task">
        <label for="inputTask">Task name</label>
        <input
          id="todo-text"
          type="text"
          placeholder="Enter task name"
          value={inputValues.name}
          onChange={(e) => {
            setInputValues({ ...inputValues, name: e.target.value });
          }}
        />
        <label for="task-description">Task Description</label>
        <textarea
          id="task-description"
          placeholder="Enter task description"
          value={inputValues.description}
          onChange={(e) => {
            setInputValues({ ...inputValues, description: e.target.value });
          }}
        ></textarea>
      </div>
      <button className="add-btn">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
