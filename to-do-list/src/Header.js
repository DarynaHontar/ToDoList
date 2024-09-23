export function Header({ showForm, setShowForm }) {
  const appTitle = "My to-do list";
  return (
    <header className="header">
      <div>
        <h1>{appTitle}</h1>
      </div>
      <button
        className="btn btn-large"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Create task"}
      </button>
    </header>
  );
}
