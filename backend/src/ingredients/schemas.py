from pydantic import Field, BaseModel, EmailStr  # , Field
from typing import Optional
from uuid import UUID, uuid4


class IngredientBase(BaseModel):
    name: str
    portion: float
    calories: float
    proteins: float
    carbs: float
    fats: float


class IngredientCreate(IngredientBase):
    pass


class Ingredient(IngredientBase):
    id: UUID = Field(default_factory=uuid4)
    owner_id: UUID

    class Config:
        orm_mode = True
