export interface User {
	id: string
	name: string
	email: string
}

export interface AccessTokenAPI {
	access_token: string
	token_type: string
}

export interface AccessToken {
	accessToken: string
	tokenType: string
}

export type LoginForm = {
	username: string
	password: string
}
