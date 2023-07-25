import { Box, Paper } from '@mui/material'

export function Footer() {
    return (
        <Paper
            elevation={6}
            square
            component='footer'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minHeight: '100px',
                bgcolor: 'background.default',
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                }}
            >
                This is the footer. Later it will have access to global state.
            </Box>
        </Paper>
    )
}
