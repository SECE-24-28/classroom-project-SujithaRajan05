import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-indigo-600">
        Welcome to Sky Recharge
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        Recharge instantly with a smooth pastel UI.
      </p>

      <Link
        to="/plans"
        className="mt-6 inline-block bg-indigo-500 text-white px-6 py-3 rounded-xl hover:bg-indigo-600"
      >
        View Plans
      </Link>
    </div>
  );
}
