import { SPHERES } from "./App";

export function Task({ task }) {
  return (
    <li className="task">
      <p>{task.taskDescription}</p>
      <span
        className="tag"
        style={{
          backgroundColor: SPHERES.find((sp) => sp.name === task.sphere).color,
        }}
      >
        {task.sphere}
      </span>
    </li>
  );
}
