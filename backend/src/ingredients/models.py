from sqlalchemy import Column, String, Uuid, Float, ForeignKey
from sqlalchemy.orm import relationship
import uuid

from src.database import Base


class Ingredient(Base):
    __tablename__ = "ingredients"

    id = Column(Uuid, primary_key=True, index=True, default=uuid.uuid4)
    name = Column(String)
    portion = Column(Float)
    calories = Column(Float)
    proteins = Column(Float)
    carbs = Column(Float)
    fats = Column(Float)

    owner_id = Column(Uuid, ForeignKey("users.id"))
    owner = relationship("User", back_populates="ingredients")
