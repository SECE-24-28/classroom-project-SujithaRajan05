import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-5xl font-bold mb-6 text-center">Sky Recharge</h1>

      <p className="text-lg mb-10 max-w-xl text-center">
        Fast, Secure & Easy Mobile Recharge Platform. Explore the best plans with one tap!
      </p>

      <div className="flex gap-6">
        <Link
          to="/plans"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          View Plans
        </Link>

        <Link
          to="/login"
          className="px-6 py-3 border-2 border-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

