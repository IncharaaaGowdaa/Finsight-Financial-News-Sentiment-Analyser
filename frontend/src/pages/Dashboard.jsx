import { useEffect, useState } from "react";

import UrlForm from "../components/UrlForm";
import ResultCard from "../components/ResultCard";
import HistoryList from "../components/HistoryList";

import { getHistory } from "../services/api";

import SentimentPieChart from "../components/SentimentPieChart";
import ConfidenceBarChart from "../components/ConfidenceBarChart";

function Dashboard() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    try {
      const response = await getHistory();
      setHistory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-3">
                Financial Sentiment Analyzer
                </h1>
                
                <p className="text-slate-600 text-lg">
                    Analyze financial news using FinBERT sentiment analysis and AI-powered summaries
                    </p>
        </div>

        <div className="space-y-8">

          <UrlForm
            setAnalysisResult={setAnalysisResult}
            fetchHistory={fetchHistory}
            loading={loading}
            setLoading={setLoading}
          />

          {analysisResult && (
            <ResultCard result={analysisResult} />
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SentimentPieChart
            history={history}
            />
            <ConfidenceBarChart
            history={history}
            />
            </div>


          <HistoryList history={history} />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;