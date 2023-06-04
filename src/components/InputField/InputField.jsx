import { TextField } from '@mui/material'

const formValidation = (errors, errorKey) => {
    return errors[errorKey] ? (
        <p
            style={{
                color: '#d32f2f',
                textAlign: 'left',
                marginBottom: '0',
            }}
        >
            {errors[errorKey].message}
        </p>
    ) : (
        ''
    )
}

export function InputField({ name, label, register, rules, errors, ...props }) {
    return (
        <>
            <TextField
                {...register(name, { ...rules })}
                label={label}
                required={rules?.required?.value}
                error={errors && !!errors[name]}
                {...props}
            />
            {errors && formValidation(errors, name)}
        </>
    )
}
