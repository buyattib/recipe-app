import { useState } from 'react'
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material'
import { IngredientWithoutId } from '@/models'

import { Input } from '@/components/Input/Input'
import { QuantityField } from '@/components/QuantityField/QuantityField'

export default function AddIngredients() {
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IngredientWithoutId>()

	const onSubmit: SubmitHandler<IngredientWithoutId> = data => {
		setLoading(true)
		reset()
		console.log(data)
		setLoading(false)
	}

	const onError = (error: FieldErrors<IngredientWithoutId>) => {
		console.log(error)
	}

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
						<Input
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
						<QuantityField
							name='portion'
							label='Portion'
							register={register}
							errors={errors}
							helperText='Portion size'
						/>
						<QuantityField
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
						<QuantityField
							name='proteins'
							label='Proteins'
							register={register}
							errors={errors}
							helperText='Per portion'
						/>
						<QuantityField
							name='carbs'
							label='Carbs'
							register={register}
							errors={errors}
							helperText='Per portion'
						/>
						<QuantityField
							name='fats'
							label='Fats'
							register={register}
							errors={errors}
							helperText='Per portion'
						/>
					</Box>
				</Box>
				<Button type='submit' sx={{ px: 3, py: 1, mb: 1 }} disabled={loading}>
					{loading && <CircularProgress size={15} sx={{ m: 1 }} />}
					Submit
				</Button>
			</Box>
		</Container>
	)
}
