// import { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function Progress() {
//   const [progress, setProgress] = useState({
//     labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//     datasets: [
//       {
//         label: "Weight (kg)",
//         data: [67, 68, 69, 70],
//         backgroundColor: "rgba(59,130,246,0.7)", // Tailwind blue
//       },
//       {
//         label: "Muscle % ",
//         data: [30, 31, 32, 33],
//         backgroundColor: "rgba(34,197,94,0.7)", // Tailwind green
//       },
//     ],
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-10">
//       <h1 className="text-3xl font-bold mb-6 text-primary">📊 Progress</h1>

//       <div className="bg-black/50 border border-gray-700 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
//         <Bar data={progress} options={{ responsive: true }} />
//       </div>

//       <div className="mt-10 text-center">
//         <p className="text-gray-400">
//           Keep pushing forward! 🚀 Every rep, every meal, every day counts.
//         </p>
//       </div>
//     </div>
//   );
// }

import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Progress() {
  // Mock data for workout progress (Weight lifted over weeks)
  const workoutData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weight Lifted (kg)",
        data: [80, 95, 105, 120],
        borderColor: "rgba(34,197,94,1)", // Tailwind green-500
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Mock data for diet progress (macro split)
  const dietData = {
    labels: ["Protein", "Carbs", "Fats"],
    datasets: [
      {
        label: "Macros",
        data: [150, 250, 70], // grams
        backgroundColor: [
          "rgba(59,130,246,0.8)", // blue-500
          "rgba(34,197,94,0.8)", // green-500
          "rgba(234,179,8,0.8)", // yellow-500
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-8">Your Progress</h1>

      {/* Workout Progress */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4">Workout Strength Over Time</h2>
        <Line data={workoutData} />
      </div>

      {/* Diet Progress */}
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Diet Macro Breakdown</h2>
        <Doughnut data={dietData} />
      </div>
    </div>
  );
}


