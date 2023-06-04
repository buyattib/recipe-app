export function IngredientList({ ingredients }) {
    return (
        <div>
            {ingredients.length > 0 &&
                ingredients.map((ing, i) => {
                    return <p key={i}>Name: {ing.name}</p>
                })}
        </div>
    )
}
