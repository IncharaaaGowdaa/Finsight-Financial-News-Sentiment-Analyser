from pydantic import BaseModel


class AnalyzeResponse(BaseModel):
    title: str
    sentiment: str
    confidence: float
    summary: str