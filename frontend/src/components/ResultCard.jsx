function ResultCard({ result }) {
  const confidence = (result.confidence * 100).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border 
    border-slate-200 hover:shadow-xl transition duration-300">

      <h2 className="text-2xl font-bold mb-4">
        {result.title}
      </h2>

      <p className="mb-2">
        <strong>Sentiment:</strong>{" "}
        {result.sentiment}
      </p>

      <p className="mb-4">
        <strong>Confidence:</strong>{" "}
        {confidence}%
      </p>

      <div>
        <h3 className="font-semibold mb-2">
          Summary
        </h3>

        <p className="text-slate-700">
          {result.summary}
        </p>
      </div>

    </div>
  );
}

export default ResultCard;