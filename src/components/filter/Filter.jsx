import React from 'react'
import { useDispatch } from 'react-redux'

import { setFilter } from '../../redux/filter/filterSlice'
import { Button } from 'flowbite-react'

const Filter = () => {
	const dispatch = useDispatch()
	return (
		<Button.Group className='flex justify-center w-full'>
			<Button onClick={() => dispatch(setFilter('all'))} color='gray'>
				All
			</Button>
			<Button onClick={() => dispatch(setFilter('active'))} color='gray'>
				Active
			</Button>
			<Button onClick={() => dispatch(setFilter('completed'))} color='gray'>
				Completed
			</Button>
		</Button.Group>
	)
}
export default Filter
