import "./chartConfig";

import {
  Bar
} from "react-chartjs-2";

function ConfidenceBarChart({ history }) {

  const chartData = history
    .slice(0, 8)
    .reverse();

  const data = {
    labels: chartData.map((item) =>
      item.title.length > 25
        ? item.title.substring(0, 25) + "..."
        : item.title
    ),

    datasets: [
      {
        label: "Confidence %",
        data: chartData.map(
          (item) => (item.confidence * 100).toFixed(2)
        ),

        backgroundColor: chartData.map((item) => {
          if (item.sentiment === "positive")
            return "#22c55e";

          if (item.sentiment === "negative")
            return "#ef4444";

          return "#f59e0b";
        }),
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition duration-300">

      <h2 className="text-xl font-bold mb-4">
        Confidence Scores
      </h2>

      <div className="h-80">
        <Bar
          data={data}
          options={options}
        />
      </div>

    </div>
  );
}

export default ConfidenceBarChart;