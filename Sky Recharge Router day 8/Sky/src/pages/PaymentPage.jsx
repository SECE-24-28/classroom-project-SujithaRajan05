import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PaymentPage() {
  const { state } = useLocation();

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto bg-white mt-10 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">
          Payment Summary
        </h2>
        <p><strong>Mobile:</strong> {state.mobile}</p>
        <p><strong>Provider:</strong> {state.provider}</p>
        <p><strong>Plan Amount:</strong> ₹{state.price}</p>
        <p><strong>Payment Mode:</strong> {state.payment}</p>

        <button className="w-full mt-4 p-3 bg-green-600 text-white rounded-xl">
          Pay Now
        </button>
      </div>
    </div>
  );
}
