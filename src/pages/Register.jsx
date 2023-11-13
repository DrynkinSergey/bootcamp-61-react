import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

import { registerThunk } from '../redux/auth/operations'
import { inputData, schemaRegister } from '../helpers/schemas'
import { CustomError } from '../components/CustomError'
import { Input } from '../components/Input'

export const Register = () => {
	const dispatch = useDispatch()

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schemaRegister) })

	const submit = ({ confirmPassword, ...data }) => {
		console.log(data)
		dispatch(registerThunk(data))
	}

	return (
		<div className='bg-slate-800 min-h-screen grid place-items-center'>
			<form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4 bg-white px-10 py-14 rounded-md shadow-xl'>
				{inputData.map(item => (
					<div key={item.name}>
						<Input placeholder={item.placeholder} name={item.name} register={register} />
						<CustomError name={item.name} errors={errors} />
					</div>
				))}

				{/* <Input placeholder='Enter the email' name='email' register={register} />
				<CustomError name='email' errors={errors} />

				<Input placeholder='Enter the age' name='age' type='number' register={register} />
				<CustomError name='age' errors={errors} />

				<Input placeholder='Enter the password' name='password' type='password' register={register} />
				<CustomError name='password' errors={errors} />

				<Input placeholder='Enter the same password' name='confirmPassword' type='password' register={register} />
				<CustomError name='email' errors={errors} message='Password is not same!' /> */}

				<button className='border-2 border-black  px-2 py-3 rounded-md hover:bg-teal-500 hover:text-white transition cursor-pointer'>
					Register
				</button>
				<span>
					You already have account?{' '}
					<Link className='underline text-teal-600' to='/login'>
						Lets login!
					</Link>
				</span>
			</form>
		</div>
	)
}
