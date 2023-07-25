from sqlalchemy.orm import Session
from pydantic import EmailStr

from src.utils import hash
from . import models, schemas


# Users crud methods -----------

def get_user_by_email(db: Session, email: EmailStr) -> models.User:
    return db.query(models.User).filter(models.User.email == email).first()


def create_user(db: Session, user: schemas.UserSignUp) -> models.User:
    hashed_password = hash(user.password)
    db_user = models.User(email=user.email, name=user.name,
                          hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


# def get_users(db: Session, page: int, results: int) -> list[models.User]:
#     initial_index = (page-1) * results
#     final_index = page * results
#     return db.query(models.User).all()[initial_index:final_index]


# def get_user(db: Session, user_id: int) -> models.User:
#     return db.query(models.User).filter(models.User.id == user_id).first()
