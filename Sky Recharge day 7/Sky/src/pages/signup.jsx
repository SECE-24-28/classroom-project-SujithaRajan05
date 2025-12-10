export default function signup() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow mt-10">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
        Signup
      </h2>

      <input
        className="w-full p-3 mb-3 border rounded-xl"
        type="text"
        placeholder="Enter Full Name"
      />

      <input
        className="w-full p-3 mb-3 border rounded-xl"
        type="email"
        placeholder="Enter Email"
      />

      <input
        className="w-full p-3 mb-3 border rounded-xl"
        type="password"
        placeholder="Create Password"
      />

      <button className="w-full bg-indigo-500 text-white p-3 rounded-xl hover:bg-indigo-600">
        Create Account
      </button>
    </div>
  );
}
