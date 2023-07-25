import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/models'

interface AuthStore {
	auth: boolean
	token: string | null
	user: User | null
	updateToken: (newToken: string) => void
	updateUser: (newUser: User) => void
	reset: () => void
}

const initialState = {
	auth: false,
	token: null,
	user: null,
}

export const useAuthStore = create<AuthStore>()(
	persist(
		set => ({
			...initialState,
			updateToken: newToken => {
				set({ token: newToken, auth: true })
			},
			updateUser: newUser => {
				set({ user: newUser })
			},
			reset: () => {
				set(initialState)
			},
		}),
		{ name: 'auth' }
	)
)
