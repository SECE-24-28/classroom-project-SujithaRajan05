function PlanCard({ price, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <h3 className="text-2xl font-bold text-indigo-600">{price}</h3>
      <p className="mt-2 text-gray-700">{desc}</p>

      <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600">
        Recharge
      </button>
    </div>
  );
}

export default function Plans() {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
        Recharge Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlanCard price="₹199" desc="1.5GB/day • 28 days" />
        <PlanCard price="₹399" desc="2GB/day • 56 days" />
        <PlanCard price="₹599" desc="2GB/day • 84 days" />
      </div>
    </div>
  );
}
