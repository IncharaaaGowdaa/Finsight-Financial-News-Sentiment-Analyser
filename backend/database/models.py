from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import Text
from sqlalchemy import DateTime

from datetime import datetime

from backend.database.database import Base


class AnalysisHistory(Base):
    __tablename__ = "analysis_history"

    id = Column(Integer, primary_key=True, index=True)

    article_url = Column(String, nullable=False)

    title = Column(String, nullable=False)

    sentiment = Column(String, nullable=False)

    confidence = Column(Float, nullable=False)

    summary = Column(Text, nullable=False)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )