import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSignup() {
    if (!name || !email) return alert("Fill all fields");

    alert("Signup Successful!");
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow mt-10">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
        Signup
      </h2>

      <input
        className="w-full p-3 mb-3 border rounded-xl"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full p-3 mb-3 border rounded-xl"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700">
        Signup
      </button>
    </div>
  );
}

