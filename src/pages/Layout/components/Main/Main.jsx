import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export function Main() {
    return (
        <Container
            maxWidth='lg'
            component='main'
            sx={{
                minHeight: '70vh',
                p: 1,
            }}
        >
            <Outlet />
        </Container>
    )
}
