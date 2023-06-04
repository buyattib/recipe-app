import { useForm } from 'react-hook-form'
import { Box, Button, Container } from '@mui/material'

import { useIngredients } from '@/stores/ingredients'
import { AddIngredientForm } from './components/AddIngredientForm'

export default function AddIngredients() {
    const { addIngredient } = useIngredients()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        addIngredient(data)
        reset()
    }

    const onError = error => console.log(error)

    return (
        <Container
            maxWidth='lg'
            sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                component='form'
                onSubmit={handleSubmit(onSubmit, onError)}
                sx={{
                    '& .MuiTextField-root': {
                        m: 2,
                        width: { xs: '200px', md: '80%' },
                    },
                    textAlign: 'center',
                    width: { xs: '100%' },
                }}
                noValidate
            >
                <AddIngredientForm register={register} errors={errors} />
                <Button type='submit' sx={{ px: 3, py: 1 }}>
                    Submit
                </Button>
            </Box>
        </Container>
    )
}
