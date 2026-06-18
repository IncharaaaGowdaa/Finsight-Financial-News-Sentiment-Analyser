from fastapi import FastAPI

from backend.api.sentiment import router

from backend.database.init_db import initialize_database

initialize_database()


app = FastAPI(
    title="Financial Sentiment Analyzer"
)

app.include_router(router)