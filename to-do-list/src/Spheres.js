import { SPHERES } from "./App";

export function Spheres({ setCurrentSphere }) {
  return (
    <aside>
      <ul>
        <li className="sphere">
          <button
            className="btn btn-all-spheres"
            onClick={() => setCurrentSphere("all")}
          >
            All
          </button>
        </li>

        {SPHERES.map((sp) => (
          <li key={sp.name} className="sphere">
            <button
              className="btn btn-sphere"
              style={{ backgroundColor: sp.color }}
              onClick={() => setCurrentSphere(sp.name)}
            >
              {sp.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
