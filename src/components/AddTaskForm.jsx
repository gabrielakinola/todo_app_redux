import React from "react";
import { useState, useEffect } from "react";
import "./AddTaskForm.css";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../slices/todoSlice";
import toast from "react-hot-toast";

const AddTaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    description: "",
    completed: false,
    id: new Date().getTime(),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setInputValues(taskToEdit);
    }
  }, [taskToEdit]);

  function handleValidation({ name, description }) {
    if (!name || !description) {
      toast.error("Please fill all fields");
      return false;
    } else {
      return true;
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const success = handleValidation(inputValues);
    const timestamp = new Date().getTime();
    setInputValues({ ...inputValues, id: timestamp });

    if (!success) {
      return;
    }

    if (taskToEdit) {
      dispatch(editTask(inputValues));
      setTaskToEdit(null);
      toast.success("Task updated successfully");
    } else {
      dispatch(addTask(inputValues));
      toast.success("Task added successfully");
    }
    setInputValues({
      name: "",
      description: "",
      completed: false,
      id: timestamp,
    });
  };
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div className="input-task">
        <label htmlFor="inputTask">Task name</label>
        <input
          id="todo-text"
          type="text"
          placeholder="Enter task name"
          value={inputValues.name}
          onChange={(e) => {
            setInputValues({ ...inputValues, name: e.target.value });
          }}
        />
        <label htmlFor="task-description">Task Description</label>
        <textarea
          id="task-description"
          placeholder="Enter task description"
          value={inputValues.description}
          onChange={(e) => {
            setInputValues({ ...inputValues, description: e.target.value });
          }}
        ></textarea>
      </div>
      <button className="add-btn">
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default AddTaskForm;
