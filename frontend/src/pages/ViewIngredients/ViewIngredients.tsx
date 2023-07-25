import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useIngredientsStore } from '@/stores'
import { Routes } from '@/models'

export default function ViewIngredients() {
	const ingredients = useIngredientsStore(state => state.ingredients)

	return (
		<div>
			<h1>Ingredients</h1>

			<Button
				sx={{ color: '#54d', padding: '14px 8px 14px 8px' }}
				component={Link}
				to={'/' + Routes.ADD_INGREDIENTS}
			>
				Add a new ingredient
			</Button>
			<ul>
				{ingredients.map(ingredient => (
					<li key={ingredient.id}>{ingredient.name}</li>
				))}
			</ul>
		</div>
	)
}
