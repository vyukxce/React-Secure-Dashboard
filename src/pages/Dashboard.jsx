import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { dashboardData } from "../data/dashboardData";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300
      ${theme === "dark" ? "bg-zinc-950 text-zinc-100" : "bg-gray-100 text-gray-900"}`}
    >
      <Navbar />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
