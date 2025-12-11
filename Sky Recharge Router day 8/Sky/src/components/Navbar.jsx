import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-indigo-600 text-white shadow">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Sky Recharge</h1>

      {/* Navigation */}
      <div className="flex gap-6 items-center text-lg">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Right-side buttons */}
        <Link
          to="/login"
          className="px-4 py-2 bg-white text-indigo-600 rounded-xl hover:bg-gray-200"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-4 py-2 bg-pink-400 text-white rounded-xl hover:bg-pink-500"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}
