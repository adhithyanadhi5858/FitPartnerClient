import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ProgressChart({ dataPoints }) {
  if (!dataPoints || dataPoints.length === 0) return <p>No progress data yet.</p>;

  const labels = dataPoints.map((entry) => entry.date);
  const weight = dataPoints.map((entry) => entry.weight);
  const muscle = dataPoints.map((entry) => entry.muscleMass);

  const data = {
    labels,
    datasets: [
      {
        label: "Weight (kg)",
        data: weight,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
      {
        label: "Muscle Mass (kg)",
        data: muscle,
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Progress Tracking" },
    },
  };

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <Line data={data} options={options} />
    </div>
  );
}

export default ProgressChart;
