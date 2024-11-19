import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalNSMDataChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Dynamically create the gradients and set the data
    const createChartData = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      // Create gradient for the "Volume" bars
      const volumeGradient = ctx.createLinearGradient(0, 0, 0, 400);
      volumeGradient.addColorStop(0, "#8A2BE2");
      volumeGradient.addColorStop(1, "#BA55D3");

      // Create gradient for the "Value" bars
      const valueGradient = ctx.createLinearGradient(0, 0, 0, 400);
      valueGradient.addColorStop(0, "#FF6347");
      valueGradient.addColorStop(1, "#FFA07A");

      setChartData({
        labels: ["M-5", "M-4", "M-3", "M-2", "M-1", "LMTD", "MTD"],
        datasets: [
          {
            label: "Volume",
            data: [400, 300, 800, 500, 300, 200, 250],
            backgroundColor: volumeGradient,
          },
          {
            label: "Value",
            data: [250, 200, 400, 350, 250, 100, 200],
            backgroundColor: valueGradient,
          },
        ],
      });
    };

    createChartData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total NSM Data",
      },
    },
  };

  return (
    <>
      {chartData.labels ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </>
  );
};

export default TotalNSMDataChart;
