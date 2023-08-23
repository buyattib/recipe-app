import { useState } from 'react'
import { useLocation } from 'wouter'
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import { Button, CircularProgress, Box, Typography, Backdrop, Alert, Snackbar } from '@mui/material'

import { Input } from '@/components/Input'
import { getCurrentAuthenticatedUser } from '@/services/getCurrentAuthenticatedUser'
import { useAuthStore } from '@/stores/auth'
import { signIn } from './services'
import { LoginForm } from '@/models'

export default function Login() {
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [updateToken, updateUser] = useAuthStore(store => [store.updateToken, store.updateUser])
	const [, navigate] = useLocation()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginForm>()

	const onSubmit: SubmitHandler<LoginForm> = data => {
		setLoading(true)
		signIn(data)
			.then(data => {
				reset()
				updateToken(data.accessToken)

				return getCurrentAuthenticatedUser(data.accessToken)
			})
			.then(user => {
				updateUser(user)
				navigate('/')
			})
			.catch((error: Error) => {
				if (error.message === 'Bad request') {
					setError('Invalid credentials')
				} else {
					setError('There was an error in the login')
				}
				setTimeout(() => setError(''), 6000)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const onError = (error: FieldErrors<LoginForm>) => {
		console.log(error)
	}

	return (
		<>
			<Snackbar
				open={Boolean(error)}
				autoHideDuration={6000}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert severity='error' sx={{ m: 1, color: '#fff', width: '100%' }}>
					{error}
				</Alert>
			</Snackbar>
			<Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<Box
				component='form'
				onSubmit={handleSubmit(onSubmit, onError)}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					py: 4,
					mx: 'auto',
					my: 7,
					'& .MuiTextField-root': {
						m: { xs: 1, md: 2 },
						width: { xs: '300px', md: '380px' },
					},
					borderRadius: { md: '8px' },
					border: { md: '1px solid lightblue' },
					width: { md: '70%' },
				}}
				noValidate
			>
				<Box
					sx={{
						my: 1,
						paddingBottom: '8px',
						width: '70%',
						textAlign: 'center',
					}}
				>
					<Typography variant='h4'>Sign in</Typography>
				</Box>
				<Input
					name='username'
					type='email'
					label='Email'
					register={register}
					variant='outlined'
					errors={errors}
					rules={{
						required: { value: true, message: 'The email is required' },
						pattern: {
							value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Please enter a valid email',
						},
					}}
				/>
				<Input
					name='password'
					type='password'
					label='Password'
					register={register}
					variant='outlined'
					errors={errors}
					rules={{
						required: { value: true, message: 'The password is required' },
					}}
				/>
				<Button type='submit' sx={{ px: 3, py: 1, my: 1, border: '1px solid white', width: '200px' }}>
					Log in
				</Button>
			</Box>
		</>

		// 	{loading ? (
		// 		<div style={{ padding: '5em' }}>
		// 			<CircularProgress />
		// 		</div>
	)
}
