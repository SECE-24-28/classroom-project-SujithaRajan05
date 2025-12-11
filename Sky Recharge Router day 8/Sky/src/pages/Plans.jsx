import React from "react";
import { Link } from "react-router-dom";

const plans = [
  { name: "Basic Plan", price: "₹99", validity: "28 Days" },
  { name: "Standard Plan", price: "₹199", validity: "56 Days" },
  { name: "Premium Plan", price: "₹399", validity: "84 Days" },
];

export default function Plans() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Recharge Plans</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-xl text-indigo-600 mb-2">{plan.price}</p>
            <p className="text-gray-600 mb-4">{plan.validity}</p>

            <Link
              to="/login"
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition"
            >
              Recharge Now
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/" className="text-indigo-600 underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}



