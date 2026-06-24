from fastapi import FastAPI

from backend.api.sentiment import router

from backend.database.init_db import initialize_database

from fastapi.middleware.cors import CORSMiddleware

initialize_database()


app = FastAPI(
    title="Financial Sentiment Analyzer"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)