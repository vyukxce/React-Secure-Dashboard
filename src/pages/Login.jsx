import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/", { replace: true });
  };

  return (
       <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-sm transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-zinc-100">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
        />

        <button
          type="submit"
          className="w-full py-3 bg-green-200 dark:bg-green-700 text-gray-900 dark:text-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition transform duration-300 ease-in-out font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
