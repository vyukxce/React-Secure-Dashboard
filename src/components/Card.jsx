import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Card = ({ title, description, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300
      ${theme === "dark" ? "bg-zinc-800 text-zinc-100" : "bg-white text-gray-800"}`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
