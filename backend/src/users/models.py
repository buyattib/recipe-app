from sqlalchemy import Column, String, Uuid
import uuid

from src.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Uuid, primary_key=True, index=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    hashed_password = Column(String)
