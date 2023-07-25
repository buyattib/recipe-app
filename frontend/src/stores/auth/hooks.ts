import { useEffect, useState } from 'react'
import { useAuthStore } from './auth'
import { CURRENT_USER } from '@/constants'

export const useInitialAuth = () => {
	const [loading, setLoading] = useState(true)
	const { auth, token, updateUser, reset } = useAuthStore()

	useEffect(() => {
		// check if local storage is trustable
		if (auth && token != null) {
			fetch(CURRENT_USER, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					accept: 'application/json',
				},
			})
				.then(response => {
					if (response.status === 401) {
						throw new Error('Could not validate user')
					}
					return response.json()
				})
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
