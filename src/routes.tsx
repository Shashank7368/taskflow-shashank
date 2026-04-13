import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { useAuth } from "./context/AuthContext";

function Protected({ children }: any) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/projects"
        element={
          <Protected>
            <Projects />
          </Protected>
        }
      />
      <Route
        path="/project/:id"
        element={
          <Protected>
            <ProjectDetail />
          </Protected>
        }
      />
      <Route path="*" element={<Navigate to="/projects" />} />
    </Routes>
  );
}