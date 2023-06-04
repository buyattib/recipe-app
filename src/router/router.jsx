import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/pages'
import { Routes } from '@/models'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                async lazy() {
                    let { Home } = await import('@/pages')
                    return { Component: Home }
                },
            },
            {
                path: Routes.INGREDIENTS,
                async lazy() {
                    let { Ingredients } = await import('@/pages')
                    return { Component: Ingredients }
                },
            },
            {
                path: Routes.ADD_INGREDIENTS,
                async lazy() {
                    let { AddIngredients } = await import('@/pages')
                    return { Component: AddIngredients }
                },
            },
            {
                path: '*',
                element: <div>not found</div>,
            },
        ],
    },
])
