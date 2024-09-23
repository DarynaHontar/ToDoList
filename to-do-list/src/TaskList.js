import { Task } from "./Task";

export function TaskList({ tasks }) {
  return (
    <section>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}
