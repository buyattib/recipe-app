import { InputAdornment } from '@mui/material'
import { FieldValues } from 'react-hook-form'
import { Input, InputProps } from '../Input/Input'

type QuantityFieldProps<TFieldValues extends FieldValues> = {
	label: string
	helperText?: string
	unit?: string
	min?: number
	max?: number
} & Omit<InputProps<TFieldValues>, 'label'>

export function QuantityField<TFieldValues extends FieldValues>({
	name,
	register,
	errors,
	label,
	helperText,
	unit = 'g',
	min = 0,
	max = 1000,
	...props
}: QuantityFieldProps<TFieldValues>) {
	return (
		<Input
			name={name}
			label={label}
			register={register}
			errors={errors}
			rules={{
				required: { value: true, message: 'This field is required' },
				min: { value: min, message: `${label} should be greater than ${min} grams` },
				max: { value: max, message: `${label} should be less than ${max} grams` },
				validate: {
					isNumber: value => !isNaN(value) || `${label} should be a number`,
				},
			}}
			variant='outlined'
			InputProps={{
				endAdornment: <InputAdornment position='end'>{unit}</InputAdornment>,
			}}
			helperText={helperText}
			{...props}
		/>
	)
}
