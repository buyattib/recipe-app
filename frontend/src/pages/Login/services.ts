import { SIGN_IN } from '@/constants'
import { LoginForm } from '@/models'
import { AccessTokenAdapter } from '@/adapters/AccesTokenAdapter'

export async function signIn(body: LoginForm) {
	const urlSearchParams = new URLSearchParams()
	urlSearchParams.append('username', body.username)
	urlSearchParams.append('password', body.password)

	const response = await fetch(SIGN_IN, {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: urlSearchParams,
	})

	if (!response.ok) {
		if (response.status === 400) {
			throw new Error('Bad request')
		}
		throw new Error('Network error')
	}

	// const json = await response.json() as AccessTokenAPI
	const json = await response.json()
	const accessToken = AccessTokenAdapter(json)
	return accessToken
}
