import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Projects() {
  const projects = [{ id: "1", name: "Demo Project" }];

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>

        {projects.map((p) => (
          <Link key={p.id} to={`/project/${p.id}`}>
            <div className="border p-3 rounded mb-3 hover:bg-gray-100">
              {p.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}