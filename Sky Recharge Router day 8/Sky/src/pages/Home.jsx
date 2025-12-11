import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-20 bg-indigo-100">
        <h1 className="text-4xl font-bold text-indigo-700">
          Fast & Secure Mobile Recharge
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Recharge your Airtel, Jio, BSNL plans instantly!
        </p>

        <Link
          to="/provider-plans"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg hover:bg-indigo-700"
        >
          View Recharge Plans
        </Link>
      </div>

      {/* Providers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        
        {/* Airtel */}
        <div className="p-6 bg-white shadow rounded-2xl text-center">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/04/Airtel-logo.png"
            alt="Airtel"
            className="h-20 mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4">Airtel Plans</h2>
          <Link
            to="/provider-plans?provider=airtel"
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-xl"
          >
            View Plans
          </Link>
        </div>

        {/* Jio */}
        <div className="p-6 bg-white shadow rounded-2xl text-center">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/06/Jio-Logo.png"
            alt="Jio"
            className="h-20 mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4">Jio Plans</h2>
          <Link
            to="/provider-plans?provider=jio"
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-xl"
          >
            View Plans
          </Link>
        </div>

        {/* BSNL */}
        <div className="p-6 bg-white shadow rounded-2xl text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/BSNL_Logo.svg"
            alt="BSNL"
            className="h-20 mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4">BSNL Plans</h2>
          <Link
            to="/provider-plans?provider=bsnl"
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-xl"
          >
            View Plans
          </Link>
        </div>

      </div>
    </div>
  );
}




