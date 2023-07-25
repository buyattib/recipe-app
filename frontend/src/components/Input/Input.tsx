import { TextField, TextFieldProps } from '@mui/material'
import { FieldValues, UseFormRegister, Path, FieldErrors, RegisterOptions } from 'react-hook-form'

export type InputProps<TFieldValues extends FieldValues> = {
	name: Path<TFieldValues>
	register: UseFormRegister<TFieldValues>
	errors: FieldErrors<TFieldValues>
	rules?: RegisterOptions<TFieldValues>
} & Omit<TextFieldProps, 'name'>

const getErrorMessage = <TFieldValues extends FieldValues>(
	errors: FieldErrors<TFieldValues>,
	errorKey: string
) => {
	const message = errors && Object.keys(errors).includes(errorKey) ? errors[errorKey]?.message : ''
	return message
}

export const Input = <TFieldValue extends FieldValues>({
	name,
	register,
	errors,
	rules = {},
	...props
}: InputProps<TFieldValue>): JSX.Element => {
	const errorMessage = getErrorMessage(errors, name) as React.ReactNode
	return (
		<>
			<TextField
				{...register(name, { ...rules })}
				required={!!rules?.required}
				error={errors && !!errors[name]}
				{...props}
			/>
			{errorMessage && (
				<p
					style={{
						color: '#d32f2f',
						textAlign: 'left',
						marginBottom: '0',
					}}
				>
					{errorMessage}
				</p>
			)}
		</>
	)
}

// export function Input<TFieldValue extends FieldValues>({
// 	name,
// 	register,
// 	errors,
// 	rules = {},
// 	...props
// }: InputProps<TFieldValue>): JSX.Element {
// 	const errorMessage = getErrorMessage(errors, name) as React.ReactNode
// 	return (
// 		<>
// 			<TextField
// 				{...register(name, { ...rules })}
// 				required={!!rules?.required}
// 				error={errors && !!errors[name]}
// 				{...props}
// 			/>
// 			{errorMessage && (
// 				<p
// 					style={{
// 						color: '#d32f2f',
// 						textAlign: 'left',
// 						marginBottom: '0',
// 					}}
// 				>
// 					{errorMessage}
// 				</p>
// 			)}
// 		</>
// 	)
// }
