import React from 'react'
import { motion } from 'framer-motion'
import { slideFromButtom } from '../animate/animation'
export const Card = ({ id, completed, text, onToggleCompleted, onTodoDelete }) => {
	return (
		<motion.div
			exit='exit'
			initial='hidden'
			whileInView='visible'
			variants={slideFromButtom}
			className='card w-full shadow-xl'
		>
			<div className='card-body'>
				<h2 className='card-title'>{text}</h2>

				<div className='card-actions justify-end flex items-center mt-4'>
					<label className='label cursor-pointer flex gap-4'>
						<span className='label-text'>Set completed</span>
						<input
							type='checkbox'
							onChange={() => onToggleCompleted(id)}
							checked={completed}
							className='checkbox checkbox-primary'
						/>
					</label>
					<button onClick={() => onTodoDelete(id)} className='btn btn-primary'>
						Delete
					</button>
				</div>
			</div>
		</motion.div>
	)
}
