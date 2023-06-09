import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'

function App() {
    return (
        <>
            <Suspense fallback={'Loading...'}>
                <RouterProvider router={router} fallbackElement={'Loading...'} />
            </Suspense>
        </>
    )
}

export default App
