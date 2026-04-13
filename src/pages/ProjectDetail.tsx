import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();

  const [tasks, setTasks] = useState([
    { id: 1, title: "Design UI", status: "todo" },
    { id: 2, title: "Build API", status: "in_progress" },
    { id: 3, title: "Testing", status: "done" },
  ]);

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <Navbar />

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Project {id}</h1>

        {/* ➕ Add Task */}
        <div className="mb-4 flex gap-2">
          <input
            placeholder="New task..."
            className="border p-2 flex-1"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button
            className="bg-black text-white px-4 rounded"
            onClick={() => {
              if (!newTask) return;

              setTasks([
                ...tasks,
                {
                  id: Date.now(),
                  title: newTask,
                  status: "todo",
                },
              ]);

              setNewTask("");
            }}
          >
            Add
          </button>
        </div>

        {/* 🔽 Filter */}
        <select
          className="border p-2 mb-4"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        {/* 📋 Task List */}
        {tasks
          .filter((t) => filter === "all" || t.status === filter)
          .map((task) => (
            <div
              key={task.id}
              className="border p-3 rounded mb-3 flex justify-between"
            >
              <span>{task.title}</span>

              <span className="text-sm">
                {task.status === "todo" && "🟡 Todo"}
                {task.status === "in_progress" && "🔵 In Progress"}
                {task.status === "done" && "🟢 Done"}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}