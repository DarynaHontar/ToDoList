import { useState } from "react";
import "./style.css";
import { TaskList } from "./TaskList";
import { Spheres } from "./Spheres";
import { NewTaskForm } from "./NewTaskForm";
import { Header } from "./Header";

export const SPHERES = [
  { name: "work", color: "#1E90FF" },
  { name: "family", color: "#df0000" },
  { name: "health", color: "#32CD32" },
  { name: "career", color: "#800000" },
  { name: "finance", color: "#ffd700" },
  { name: "hobbies", color: "#FF1493" },
  { name: "friends", color: "#FF8C00" },
  { name: "development", color: "#9400D3" },
];

const initialTask = [
  {
    id: 1,
    taskDescription: "creating CV",
    sphere: "work",
  },
  {
    id: 2,
    taskDescription: "meeting with a doctor",
    sphere: "health",
  },
  {
    id: 3,
    taskDescription: "watching movie",
    sphere: "hobbies",
  },
  {
    id: 4,
    taskDescription: "read books",
    sphere: "hobbies",
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(initialTask);
  const [currentSphere, setCurrentSphere] = useState("all");

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewTaskForm setTasks={setTasks} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <Spheres setCurrentSphere={setCurrentSphere} />
        <TaskList tasks={tasks} />
      </main>
    </>
  );
}
export default App;
