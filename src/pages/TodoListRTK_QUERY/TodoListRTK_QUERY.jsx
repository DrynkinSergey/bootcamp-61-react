import { useForm } from 'react-hook-form'

import { TodoCard } from '../../components'
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery } from '../../redux/RTK Query/todoApi'
import { useState } from 'react'

export const TodoListRTK_QUERY = () => {
	const { register, handleSubmit } = useForm()

	const [limit, setLimit] = useState(5)
	const { data, isLoading, isError } = useGetTodosQuery(limit)
	const [addTodo] = useAddTodoMutation()
	const submit = ({ text }) => {
		console.log(text)
		addTodo({ text })
	}

	return (
		<div>
			<form className='py-2 flex justify-center mb-2 gap-2' onSubmit={handleSubmit(submit)}>
				<input
					{...register('text')}
					type='text'
					placeholder='Type here'
					className='input input-bordered input-primary bg-white w-full max-w-xs'
				/>

				<button className='btn btn-outline btn-primary'>Add todo</button>
			</form>
			{isLoading && <h1>Loading...</h1>}
			<select value={limit} onChange={e => setLimit(e.target.value)}>
				<option value='3'>3</option>
				<option value='5'>5</option>
				<option value='10'>10</option>
			</select>
			<ul className='grid grid-cols-3 gap-4  mx-auto max-w-[1000px]'>
				{data?.todos.map(todo => (
					<TodoCard key={todo.id} {...todo} />
				))}
			</ul>
		</div>
	)
}
