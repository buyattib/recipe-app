from pydantic import BaseModel, EmailStr  # , Field
from typing import Optional
from uuid import UUID  # , uuid4


# Users schema ----------
class UserBase(BaseModel):
    name: str
    email: EmailStr


class User(UserBase):
    # id: UUID = Field(default_factory=uuid4)
    id: UUID

    class Config:
        orm_mode = True


class UserSignUp(UserBase):
    password: str


class UserSignIn(BaseModel):
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    id: Optional[str] = None
    name: Optional[str] = None
    email: Optional[EmailStr] = None
