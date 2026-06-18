
from fastapi import APIRouter

from backend.schemas.request import AnalyzeRequest
from backend.schemas.response import AnalyzeResponse

from backend.services.article_extractor import extract_article
from backend.services.sentiment_service import analyze_sentiment
from backend.services.summarizer_service import summarize_article

from fastapi import Depends
from sqlalchemy.orm import Session

from backend.database.database import get_db
from backend.database.models import AnalysisHistory

router = APIRouter()


@router.post("/analyze", response_model=AnalyzeResponse)
def analyze_article(request: AnalyzeRequest, db: Session = Depends(get_db)):

    article = extract_article(request.url)

    sentiment_result = analyze_sentiment(
        article["content"]
    )

    summary = summarize_article(
        article["content"]
    )

    analysis = AnalysisHistory(
        article_url=request.url,
        title=article["title"],
        sentiment=sentiment_result["sentiment"],
        confidence=sentiment_result["confidence"],
        summary=summary
    )

    db.add(analysis)
    db.commit()
    db.refresh(analysis)


    return {
        "title": article["title"],
        "sentiment": sentiment_result["sentiment"],
        "confidence": sentiment_result["confidence"],
        "summary": summary
    }

@router.get("/history")
def get_history(
    db: Session = Depends(get_db)
):

    analyses = (
        db.query(AnalysisHistory)
        .order_by(AnalysisHistory.created_at.desc())
        .all()
    )

    return analyses

@router.get("/history/{analysis_id}")
def get_analysis(
    analysis_id: int,
    db: Session = Depends(get_db)
):

    analysis = (
        db.query(AnalysisHistory)
        .filter(AnalysisHistory.id == analysis_id)
        .first()
    )

    if not analysis:
        return {"message": "Analysis not found"}

    return analysis