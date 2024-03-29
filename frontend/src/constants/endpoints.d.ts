const API_BASE_URL = 'http://127.0.0.1:8000/'
const USERS = API_BASE_URL + 'users/'
const INGREDIENTS = API_BASE_URL + 'ingredients/'

export const SIGN_IN = USERS + 'sign-in'
export const SIGN_UP = USERS + 'sign-up'
export const CURRENT_USER = USERS + 'get-current-authenticated-user'

export const CREATE_INGREDIENT = INGREDIENTS + 'create'
