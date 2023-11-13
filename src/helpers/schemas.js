import * as yup from 'yup'

export const inputData = [
	{
		name: 'name',
		placeholder: 'Enter the name',
		type: 'text',
	},
	{
		name: 'email',
		placeholder: 'Enter the email',
		type: 'text',
	},

	{
		name: 'password',
		placeholder: 'Enter the password',
		type: 'password',
	},
	{
		name: 'confirmPassword',
		placeholder: 'Enter the same password',
		type: 'password',
	},
]

export const schemaRegister = yup.object().shape({
	name: yup.string().min(3, 'Name is invalid, must be more than 3 chars').required(),
	email: yup.string().email('Email is not valid').min(5, 'Min value must be least 5 symbols').required(),
	age: yup.number().typeError('Must be a number').min(14, 'Min age must be greater than 14').required(),
	password: yup.string().min(6, 'Must be least 6 symbols').max(18, 'Must be less 18 chars').required(),
	confirmPassword: yup.string().oneOf([yup.ref('password')]),
})
