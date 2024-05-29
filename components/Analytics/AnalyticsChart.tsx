"use client";
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
import { Line } from "react-chartjs-2";

interface AnalyticsChartProps {
  data: any;
  // options?: any;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      
    },
    title: {
      display: true,
      text: "Chart",
    },
  },
};

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsChart;
