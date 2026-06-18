from transformers import pipeline

sentiment_pipeline = pipeline(
    "text-classification",
    model="ProsusAI/finbert"
)


def analyze_sentiment(text: str):

    # FinBERT has token limits
    text = text[:2000]

    result = sentiment_pipeline(text)[0]

    return {
        "sentiment": result["label"].lower(),
        "confidence": round(result["score"], 4)
    }