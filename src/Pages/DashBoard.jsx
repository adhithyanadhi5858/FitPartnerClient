import { Dumbbell, Apple, BarChart3, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-10">
      {/* Greeting */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-primary">
          Welcome back, Champion 💪
        </h1>
        <p className="text-gray-400 mt-2">
          Stay consistent. Your health is your greatest wealth.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Workout Plan */}
        <Link
          to="/workout"
          className="bg-black/50 border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:bg-black/70 transition"
        >
          <Dumbbell className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-xl font-bold mb-2">Workout Plan</h2>
          <p className="text-gray-400 text-center">
            View and follow your personalized training program.
          </p>
        </Link>

        {/* Diet Plan */}
        <Link
          to="/diet"
          className="bg-black/50 border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:bg-black/70 transition"
        >
          <Apple className="w-12 h-12 text-green-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Diet Plan</h2>
          <p className="text-gray-400 text-center">
            Explore your daily nutrition and meal recommendations.
          </p>
        </Link>

        {/* Progress */}
        <Link
          to="/progress"
          className="bg-black/50 border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:bg-black/70 transition"
        >
          <BarChart3 className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Progress</h2>
          <p className="text-gray-400 text-center">
            Track your fitness journey and see improvements over time.
          </p>
        </Link>

        {/* Settings */}
        <Link
          to="/settings"
          className="bg-black/50 border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:bg-black/70 transition"
        >
          <Settings className="w-12 h-12 text-blue-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Settings</h2>
          <p className="text-gray-400 text-center">
            Update your preferences and account details.
          </p>
        </Link>
      </div>
    </div>
  );
}
