import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full shadow bg-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">Sky Recharge</h1>

      <nav className="space-x-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
