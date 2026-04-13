import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <h1>TaskFlow</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}