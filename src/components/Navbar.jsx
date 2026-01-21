import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-xl mb-6
      ${theme === "dark" ? "bg-zinc-900 text-zinc-100 shadow-lg" : "bg-white text-gray-800 shadow-md"} transition-colors duration-300`}
    >
      <h2 className="font-semibold text-lg">Welcome, {user?.name}</h2>
      <div className="flex gap-3">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg bg-indigo-200 dark:bg-indigo-700 text-gray-900 dark:text-white shadow-md hover:scale-105 hover:shadow-xl transition transform duration-300 ease-in-out"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          onClick={logout}
          className="px-3 py-1 rounded-lg bg-pink-200 dark:bg-pink-700 text-gray-900 dark:text-white shadow-md hover:scale-105 hover:shadow-xl transition transform duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
