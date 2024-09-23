import { useState } from "react";
import { SPHERES } from "./App";

export function NewTaskForm({ setTasks, setShowForm }) {
  const [taskDescription, setTaskDescription] = useState("");
  const [sphere, setSphere] = useState("");

  function handleTaskSubmit(e) {
    // 1. Prevent browser reload
    e.preventDefault();
    // 2. create a new task
    const newTask = {
      id: Math.round(Math.random() * 1000000),
      taskDescription,
      sphere,
    };
    // 3. add new task to list
    setTasks((tasks) => [newTask, ...tasks]);
    // 5. Reset input fields
    setTaskDescription("");
    setSphere("");
    // 6. Close the form
    setShowForm(false);
  }

  return (
    <form className="task-form" onSubmit={handleTaskSubmit}>
      <input
        type="text"
        placeholder="Add new task to your to-do list."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />

      <select value={sphere} onChange={(e) => setSphere(e.target.value)}>
        <option value="">Choose sphere:</option>
        {SPHERES.map((sp) => (
          <option key={sp.name} value={sp.name}>
            {sp.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Add</button>
    </form>
  );
}
