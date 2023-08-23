from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from uuid import UUID

from src.database import get_db
from src.oauth2 import oauth2_scheme

from . import schemas, crud


router = APIRouter()


@router.post(
    "/create/{user_id}",
    response_model=schemas.Ingredient,
    status_code=status.HTTP_201_CREATED,
    summary="Create ingredient",
)
def create_user_ingredient(user_id: UUID, ingredient: schemas.IngredientCreate, db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    return crud.create_user_ingredient(db=db, ingredient=ingredient, user_id=user_id)


# Users endpoints ----------
# @router.get("/me", response_model=auth_schemas.TokenData, status_code=status.HTTP_200_OK)
# def read_users_me(user_id: auth_schemas.TokenData = Depends(oauth2.get_current_user)):
#     return user_id


# @router.get("/", response_model=list[schemas.User], status_code=status.HTTP_200_OK)
# def read_users(page: int = 1, results: int = 10, db: Session = Depends(get_db)):
#     users = crud.get_users(db, page=page, results=results)
#     return users


# # the response model takes care of returning the corresponding fields of the returned db object
# @router.get(
#     "/{user_id}",
#     response_model=schemas.User,
#     status_code=status.HTTP_200_OK,
#     responses={
#         status.HTTP_404_NOT_FOUND: {"description": "Not found"},
#     }
# )
# def read_user(user_id: UUID, db: Session = Depends(get_db)):
#     db_user = crud.get_user(db, user_id=user_id)
#     if db_user is None:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
#     return db_user
