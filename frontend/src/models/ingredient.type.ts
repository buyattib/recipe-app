export interface Ingredient {
	id: number
	name: string
	portion: number
	calories: number
	proteins: number
	carbs: number
	fats: number
}

export type IngredientWithoutId = Omit<Ingredient, 'id'>

// for services and adapter
interface Metadata {
	createdAt: string
	id: string
	name: string
	private: boolean
}

export interface ApiIngredientResponse {
	metadata: Metadata
	record: {
		ingredients: Ingredient[]
	}
}
