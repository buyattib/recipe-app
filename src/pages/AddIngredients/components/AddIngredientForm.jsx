import { Box, Typography } from '@mui/material'

import { InputField } from '@/components/InputField/InputField'
import { NumberField } from '@/components/NumberField/NumberField'

export function AddIngredientForm({ register, errors }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '30px 24px 48px 24px',
                margin: '16px',
                borderRadius: '10px',
                border: '1px solid #FFFFFFB3',
            }}
        >
            <Box
                sx={{
                    marginBottom: '8px',
                    paddingBottom: '8px',
                    borderBottom: '0.1px solid #FFFFFF50',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <Typography variant='h4'>Add an ingredient</Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', md: 'row' },
                    minWidth: '240px',
                }}
            >
                <InputField
                    name='name'
                    label='Ingredient name'
                    register={register}
                    variant='outlined'
                    errors={errors}
                    rules={{
                        required: { value: true, message: 'This field is required' },
                        maxLength: { value: 20, message: 'Max length is 20 characters' },
                    }}
                />

                <NumberField
                    name='portion'
                    label='Portion'
                    register={register}
                    errors={errors}
                    helperText='Portion size'
                />
                <NumberField
                    name='calories'
                    label='Calories'
                    unit='Kcal'
                    register={register}
                    errors={errors}
                    helperText='Per portion'
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    minWidth: '240px',
                }}
            >
                <NumberField
                    name='proteins'
                    label='Proteins'
                    register={register}
                    errors={errors}
                    helperText='Per portion'
                />

                <NumberField
                    name='carbs'
                    label='Carbs'
                    register={register}
                    errors={errors}
                    helperText='Per portion'
                />

                <NumberField
                    name='fats'
                    label='Fats'
                    register={register}
                    errors={errors}
                    helperText='Per portion'
                />
            </Box>
        </Box>
    )
}
