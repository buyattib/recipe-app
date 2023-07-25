import { useState } from 'react'
import { Link } from 'wouter'
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { PrivateRoutes } from '@/constants'

const LinkButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
	<Button sx={{ color: '#fff', padding: '14px 8px 14px 8px' }} component={Link} href={href}>
		{children}
	</Button>
)

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState)
	}

	return (
		<>
			<AppBar component='nav' position='static'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={evt => handleDrawerToggle()}
						sx={{
							mr: 2,
							display: { sm: 'none' },
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component={Link}
						href='/'
						noWrap
						sx={{
							flexGrow: 1,
							display: { xs: 'none', sm: 'block' },
							ml: 2,
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Recipe App
					</Typography>
					<Box
						sx={{
							display: { xs: 'none', sm: 'block' },
							mr: 2,
							ml: 2,
							'& .MuiButton-root': { mr: 1, ml: 1 },
						}}
					>
						<LinkButton href={PrivateRoutes.VIEW_INGREDIENTS}>View Ingredients</LinkButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: '55vw',
						},
					}}
				>
					<Box sx={{ textAlign: 'center', '& .MuiButton-root': { mt: 1, mb: 1, width: '100%' } }}>
						<Typography
							variant='h6'
							sx={{ my: 2, color: 'inherit', textDecoration: 'none' }}
							component={Link}
							href='/'
						>
							Recipe App
						</Typography>
						<Divider />

						<LinkButton href={PrivateRoutes.VIEW_INGREDIENTS}>View Ingredients</LinkButton>
					</Box>
				</Drawer>
			</Box>
		</>
	)
}
