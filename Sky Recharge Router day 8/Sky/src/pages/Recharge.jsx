import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Recharge() {
  const query = new URLSearchParams(useLocation().search);
  const provider = query.get("provider");
  const price = query.get("price");

  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [payment, setPayment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/payment", {
      state: {
        mobile,
        provider,
        price,
        payment,
      },
    });
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-md mx-auto bg-white mt-10 p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          Complete Your Recharge
        </h1>

        <form onSubmit={handleSubmit}>

          <label className="font-semibold">Mobile Number</label>
          <input
            type="text"
            maxLength="10"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4"
            placeholder="Enter mobile number"
            required
          />

          <label className="font-semibold">Selected Provider</label>
          <input
            type="text"
            value={provider}
            readOnly
            className="w-full p-3 border rounded-xl mb-4 bg-gray-100"
          />

          <label className="font-semibold">Recharge Amount</label>
          <input
            type="text"
            value={`₹${price}`}
            readOnly
            className="w-full p-3 border rounded-xl mb-4 bg-gray-100"
          />

          <label className="font-semibold">Payment Mode</label>
          <select
            className="w-full p-3 border rounded-xl mb-4"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="UPI">UPI</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>

          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
          >
            Proceed to Payment
          </button>

        </form>
      </div>
    </div>
  );
}

