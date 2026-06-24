import { useState } from "react";
import { analyzeArticle } from "../services/api";

function UrlForm({
  setAnalysisResult,
  fetchHistory,
  loading,
  setLoading,
}) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.trim()) return;

    try {
      setLoading(true);

      const response = await analyzeArticle(url);

      setAnalysisResult(response.data);

      await fetchHistory();

      setUrl("");
    } catch (error) {
      console.error(error);
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition duration-300">

      <form
        onSubmit={handleSubmit}
        className="flex gap-4"
      >
        <input
          type="url"
          placeholder="Paste article URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="
          flex-1
          border
          border-slate-300
          rounded-xl
          px-4
          py-4
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
          hover:bg-blue-700 transition duration-300"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

      </form>

    </div>
  );
}

export default UrlForm;