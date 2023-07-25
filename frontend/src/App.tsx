import { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'

import { useInitialAuth } from './stores/auth'

import { Layout } from './pages/Layout'

import { PublicRoutes, PrivateRoutes } from './constants'
import { Private } from './route-guards'

const Home = lazy(() => import('./pages/Home/Home'))
const Login = lazy(() => import('./pages/Login/Login'))

import './App.css'

function App() {
	const loading = useInitialAuth()

	return loading ? null : (
		<Switch>
			<Route path={'/' + PublicRoutes.LOGIN}>
				<Suspense fallback={'Loading...'}>
					<Login />
				</Suspense>
			</Route>
			<Route path={'/' + PublicRoutes.SIGN_UP}>
				<Suspense fallback={'Loading...'}>
					<Login />
				</Suspense>
			</Route>

			<Private>
				<Layout>
					<Suspense fallback={'Loading...'}>
						<Route path='/'>
							<Home />
						</Route>
					</Suspense>
					<Route path={'/' + PrivateRoutes.VIEW_INGREDIENTS}>View</Route>
					<Route path={'/' + PrivateRoutes.ADD_INGREDIENTS}>Add</Route>
				</Layout>
			</Private>

			<Route>Not found</Route>
		</Switch>
	)
}

export default App
