from backend.database.database import engine
from backend.database.models import Base


def initialize_database():
    Base.metadata.create_all(bind=engine)
    