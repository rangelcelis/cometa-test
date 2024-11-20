from sqlalchemy import create_engine
from sqlalchemy.pool import StaticPool
from sqlalchemy.orm import sessionmaker, scoped_session

args = dict(echo=True, connect_args={"check_same_thread": False}, poolclass=StaticPool)
Engine = create_engine('sqlite:///', **args)

SessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=Engine
)

def get_db_connection():
    db = scoped_session(SessionLocal)
    try:
        yield db
    finally:
        db.close()