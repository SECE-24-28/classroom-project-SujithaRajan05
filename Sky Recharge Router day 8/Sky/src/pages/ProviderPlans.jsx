import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ProviderPlans() {
  const query = new URLSearchParams(useLocation().search);
  const provider = query.get("provider");
  const navigate = useNavigate();

  const allPlans = {
    airtel: [
      { price: 199, data: "1GB/day", validity: "28 days" },
      { price: 299, data: "2GB/day", validity: "28 days" }
    ],
    jio: [
      { price: 239, data: "1.5GB/day", validity: "28 days" },
      { price: 666, data: "1.5GB/day", validity: "84 days" }
    ],
    bsnl: [
      { price: 187, data: "1GB/day", validity: "28 days" },
      { price: 439, data: "2GB/day", validity: "84 days" }
    ],
  };

  const plans = allPlans[provider] || [];

  function handleRecharge(plan) {
    navigate(`/recharge?provider=${provider}&price=${plan.price}`);
  }

  return (
    <div>
      <Navbar />

      <h1 className="text-center text-3xl font-bold mt-10 capitalize">
        {provider} Recharge Plans
      </h1>

      <div className="max-w-3xl mx-auto mt-8">
        {plans.map((p, i) => (
          <div key={i} className="p-4 border rounded-xl shadow mb-4 bg-white">
            <h2 className="text-xl font-semibold">₹{p.price}</h2>
            <p>{p.data}</p>
            <p>{p.validity}</p>

            <button
              onClick={() => handleRecharge(p)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
            >
              Recharge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
