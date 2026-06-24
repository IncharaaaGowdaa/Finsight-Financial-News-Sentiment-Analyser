function HistoryList({ history }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition duration-300">

      <h2 className="text-2xl font-bold mb-4">
        Analysis History
      </h2>

      <div className="space-y-3">

        {history.map((item) => (
          <div
            key={item.id}
            className="bg-slate-50 border border-slate-200 rounded-xl p-4
             hover:bg-white hover:shadow-md transition">
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-slate-600">
              {item.sentiment} •{" "}
              {(item.confidence * 100).toFixed(2)}%
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default HistoryList;