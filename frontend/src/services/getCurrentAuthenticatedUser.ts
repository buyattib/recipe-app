import { CURRENT_USER } from '@/constants'
import { User } from '@/models'

export async function getCurrentAuthenticatedUser(token: string): Promise<User> {
	return fetch(CURRENT_USER, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			accept: 'application/json',
		},
	}).then(response => {
		if (response.status === 401) {
			throw new Error('Could not validate user')
		}
		return response.json()
	})
}
