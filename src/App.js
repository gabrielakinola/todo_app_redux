import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TasksLists from "./components/TasksLists";
function App() {
  return (
    <div className="main-container">
      <div className="container">
        <AddTaskForm />
        <TasksLists tasks={[]} />
      </div>
    </div>
  );
}

export default App;
