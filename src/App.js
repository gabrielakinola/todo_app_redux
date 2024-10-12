import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TasksLists from "./components/TasksLists";
import { setFilter } from "./slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./components/Filter";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.todoTasks);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  const filterChangeHandler = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const editTaskHandler = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="main-container">
      <Toaster />
      <div className="container">
        <AddTaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
        <Filter onFilterChange={filterChangeHandler} />
        <TasksLists tasks={filteredTasks} onEditTask={editTaskHandler} />
      </div>
    </div>
  );
}

export default App;
