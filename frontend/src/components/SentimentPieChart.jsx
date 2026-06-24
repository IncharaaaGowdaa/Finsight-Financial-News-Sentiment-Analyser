import "./chartConfig";

import { Pie } from "react-chartjs-2";

function SentimentPieChart({ history }) {
  const positive = history.filter(
    (item) => item.sentiment === "positive"
  ).length;

  const negative = history.filter(
    (item) => item.sentiment === "negative"
  ).length;

  const neutral = history.filter(
    (item) => item.sentiment === "neutral"
  ).length;

  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
    {
      data: [positive, negative, neutral],
      backgroundColor: [
        "#22c55e", // green
        "#ef4444", // red
        "#f59e0b", // amber
      ],
      borderWidth: 2,
    },
  ],
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-bold mb-4">Sentiment Distribution</h2>
      <Pie data={data} />
    </div>
  );
}

export default SentimentPieChart;