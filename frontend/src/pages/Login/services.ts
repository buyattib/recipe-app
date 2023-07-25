import { SIGN_IN } from '@/constants'
import { AccessToken } from '@/models'

export async function signIn(body: URLSearchParams) {
	const response = await fetch(SIGN_IN, {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: body,
	})

	if (!response.ok) {
		if (response.status === 400) {
			throw new Error('Bad request')
		}
		throw new Error('Network error')
	}

	const json = (await response.json()) as AccessToken
	return json
}
