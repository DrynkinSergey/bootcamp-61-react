import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { slideFromRight } from '../animate/animation'
export const Form = ({ handleAddTodo }) => {
	const [newTodo, setNewTodo] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		handleAddTodo(newTodo)
		setNewTodo('')
	}
	return (
		<motion.form
			initial='hidden'
			whileInView='visible'
			variants={slideFromRight}
			onSubmit={handleSubmit}
			className='justify-center flex gap-5 py-8'
		>
			<input
				value={newTodo}
				onChange={e => setNewTodo(e.target.value)}
				type='text'
				placeholder='Type here'
				className='input input-bordered input-primary w-full max-w-xs'
			/>
			<button className='btn btn-outline btn-primary'>Primary</button>
		</motion.form>
	)
}
