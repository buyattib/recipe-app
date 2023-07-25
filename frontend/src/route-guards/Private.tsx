import { Redirect } from 'wouter'
import { useAuthStore } from '@/stores/auth'
import { PublicRoutes } from '@/constants'

export default function Private({ children }: { children: React.ReactNode }) {
	const auth = useAuthStore(store => store.auth)

	return auth ? children : <Redirect to={'/' + PublicRoutes.LOGIN} />
}
