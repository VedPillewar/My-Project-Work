import { useState, useEffect } from "react";

function Home() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input === "") return;

    const newTask = {
      text: input,
      done: false,
      priority,
      date: new Date().toLocaleDateString()
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAll = () => setTasks([]);

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  const completed = tasks.filter(t => t.done).length;

  return (
    <div className="card">
      <h2>📝 Task Manager</h2>

      <input
        placeholder="🔍 Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />

      <input
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br />

      <button onClick={addTask}>Add</button>
      <button onClick={clearAll}>Clear</button>

      {filteredTasks.map((task, index) => (
        <div className="task" key={index}>
          
          {/* ✅ CHECKBOX */}
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(index)}
          />

          <div>
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                fontWeight: "bold"
              }}
            >
              {task.text}
            </span>

            <div style={{ fontSize: "12px" }}>
              📅 {task.date} | 🔥 {task.priority}
            </div>
          </div>

          <button onClick={() => deleteTask(index)}>❌</button>
        </div>
      ))}

      {/* ✅ COMPLETION COUNT */}
      <div className="stats">
        Total: {tasks.length} | Completed: {completed}
      </div>
    </div>
  );
}

export default Home;