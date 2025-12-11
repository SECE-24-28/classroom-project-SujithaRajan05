import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/home");  // Redirect after login
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-md mx-auto bg-white p-6 mt-10 rounded-2xl shadow">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <input
            className="w-full p-3 mb-3 border rounded-xl"
            type="email"
            placeholder="Enter Email"
          />
 
          <input
            className="w-full p-3 mb-3 border rounded-xl"
            type="password"
            placeholder="Enter Password"
          />

          <button
            className="w-full p-3 bg-indigo-600 text-white rounded-xl"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
