export async function asyncWrapper<Type>(promise: Promise<Type>) {
	try {
		const result = await promise
		return { data: result, error: null }
	} catch (error) {
		return { data: null, error: error }
	}
}
