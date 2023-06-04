import { InputAdornment } from '@mui/material'
import { InputField } from '../InputField/InputField'

export function NumberField({
    name,
    label,
    register,
    errors,
    helperText,
    unit = 'g',
    min = 0,
    max = 1000,
    ...props
}) {
    return (
        <InputField
            name={name}
            label={label}
            register={register}
            errors={errors}
            rules={{
                required: { value: true, message: 'This field is required' },
                min: { value: min, message: `${label} should be greater than ${min} grams` },
                max: { value: max, message: `${label} should be less than ${max} grams` },
                // pattern: { value: /[0-9].*/, message: 'Portion should be a number' },
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
