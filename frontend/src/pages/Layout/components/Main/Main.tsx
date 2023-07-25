import { Container } from '@mui/material'

export function Main({ children }: { children?: React.ReactNode }) {
	return (
		<Container
			maxWidth='lg'
			component='main'
			sx={{
				minHeight: '70vh',
				p: 1,
			}}
		>
			{children}
		</Container>
	)
}
