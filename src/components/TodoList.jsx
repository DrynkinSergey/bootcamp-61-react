import React, { useState } from 'react'
import { Card } from './Card'
import { Form } from './Form'
import { AnimatePresence, motion } from 'framer-motion'
export const TodoList = () => {
	const [todos, setTodos] = useState([])
	const handleAddTodo = text => {
		setTodos(prev => [...prev, { id: crypto.randomUUID(), completed: false, text }])
	}
	const handleToggleCompleted = id => {
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}
	const handleDeleteTodo = id => {
		setTodos(prev => prev.filter(item => item.id !== id))
	}
	return (
		<div className='text-black text-xl'>
			<Form handleAddTodo={handleAddTodo} />
			<span className='loading loading-infinity loading-lg'></span>
			<ul className='list'>
				<AnimatePresence>
					{todos.map(item => (
						<Card onTodoDelete={handleDeleteTodo} onToggleCompleted={handleToggleCompleted} key={item.id} {...item} />
					))}
				</AnimatePresence>
			</ul>
			<p className=' title  px-5 '>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa reiciendis explicabo quo totam eveniet ullam hic
				laudantium vitae dicta placeat beatae iusto eligendi, nesciunt adipisci, possimus molestias voluptas!
				Voluptatum, voluptas.
			</p>
		</div>
	)
}
