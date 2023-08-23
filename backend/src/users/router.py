from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from uuid import UUID

from src.database import get_db
from src import utils, oauth2

from . import schemas, crud


router = APIRouter()


@router.post(
    "/sign-up",
    response_model=schemas.User,
    status_code=status.HTTP_201_CREATED,
    summary="Sign up a user",
    responses={
        status.HTTP_400_BAD_REQUEST: {
            "description": "Bad request: Email already registered",
        }
    }
)
def sign_up(user: schemas.UserSignUp, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@router.post(
    "/sign-in",
    response_model=schemas.Token,
    status_code=status.HTTP_200_OK,
    summary="Sign in a user",
    responses={
            status.HTTP_400_BAD_REQUEST: {
                "description": "Bad request: Invalid credentials",
            }
    }
)
def sign_in(user: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.username)

    if db_user is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid credentials")

    if not utils.compare(user.password, db_user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid credentials")

    # create token
    access_token = oauth2.create_access_token(
        data={
            "id": str(db_user.id),
            "name": db_user.name,
            "email": db_user.email
        }
    )

    return {"access_token": access_token, "token_type": "bearer"}


@router.get(
    "/get-current-authenticated-user",
    response_model=schemas.TokenData,
    status_code=status.HTTP_200_OK,
    summary="Validate current user",
    responses={
            status.HTTP_401_UNAUTHORIZED: {
                "description": "Unauthorized",
            }
    }
)
def get_current_authenticated_user(token_data: schemas.TokenData = Depends(oauth2.get_current_user)):
    return token_data


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
