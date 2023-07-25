import { useState, useEffect } from 'react'

type State<T> = { data?: T; error?: string }

export function useAsyncFunction<T>(asyncFunction: () => Promise<T>): State<T> {
	const [state, setState] = useState<State<T>>({})

	useEffect(() => {
		asyncFunction()
			.then(data => setState({ data, error: undefined }))
			.catch(error => setState({ data: undefined, error: error.toString() }))
	}, [asyncFunction])

	return state
}
