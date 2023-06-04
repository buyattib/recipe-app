import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { Routes } from '@/models'

import { IngredientList } from './IngredientsList'
import { useIngredients } from '@/stores/ingredients'

export default function Ingredients() {
    const { ingredients } = useIngredients()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Typography variant='h4'>Your ingredients</Typography>
            <IngredientList ingredients={ingredients} />
            <br />
            <Button component={Link} to={'/' + Routes.ADD_INGREDIENTS}>
                Add ingredients
            </Button>
        </Box>
    )
}
