import { useEffect, useState } from 'react'
import { useAuthStore } from './auth'
import { getCurrentAuthenticatedUser } from '@/services/getCurrentAuthenticatedUser'

export const useInitialAuth = () => {
	const [loading, setLoading] = useState(true)
	const { auth, token, updateUser, reset } = useAuthStore()

	useEffect(() => {
		// check if local storage is trustable
		if (auth && token != null) {
			getCurrentAuthenticatedUser(token)
				.then(response => {
					updateUser(response)
				})
				.catch(error => {
					console.log(error)
					reset()
				})
				.finally(() => setLoading(false))
		} else {
			reset()
			setLoading(false)
		}
	}, [])

	return loading
}
