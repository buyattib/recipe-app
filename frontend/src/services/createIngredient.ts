import { CREATE_INGREDIENT } from '@/constants'
import { IngredientWithoutId } from '@/models'

export async function createIngredient(ingredient: IngredientWithoutId, token: string) {
	return fetch(CREATE_INGREDIENT, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			accept: 'application/json',
		},
		body: JSON.stringify(ingredient),
	}).then(response => {
		// if (response.status === 401) {
		// 	throw new Error('Could not validate user')
		// }
		return response.json()
	})
}
