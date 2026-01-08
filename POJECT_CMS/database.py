from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import create_engine

DB_USER = "postgres"
DB_PASSWORD = "zakariae1736"
DB_NAME = "db_restaurant"
DB_HOST = "localhost"
DB_PORT = "5432"

DB_URL = f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DB_URL)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()
