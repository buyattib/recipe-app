from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash(pwd: str):
    return pwd_context.hash(pwd)


def compare(input_password: str, db_hashed_password: str) -> bool:
    return pwd_context.verify(input_password, db_hashed_password)
