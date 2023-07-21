import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import "./Chart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Bar Chart to demonstrate the stages of task",
    },
  },
};
const data = {
  labels: ["IdeaStage", "ToDo", "Inprogress", "InReview", "Done"],
  datasets: [
    {
      label: "Stages of Task",
      data: [15, 20, 35, 15, 50],
      backgroundColor: "#0070C0",
    },
  ],
};

export default function Chart() {
  return (
    <div className="BarContainer">
      <Bar options={option} data={data} />
    </div>
  );
}
