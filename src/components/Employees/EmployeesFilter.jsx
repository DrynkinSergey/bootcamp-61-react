import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../RegisterForm/RegisterForm.styled'
import { Flex } from '../Counter/Counter.styled'

const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = ({
	filter,
	activeSkill,
	isAvailable,
	onChangeFilter,
	onChangeAvailable,
	onChangeSkill,
}) => {
	return (
		<Filters>
			<h1>Filters</h1>
			<Flex $height='100px' $items='center'>
				<StyledInput type='text' onChange={e => onChangeFilter(e.target.value)} value={filter} />
				<label htmlFor=''>
					<input type='checkbox' checked={isAvailable} onChange={onChangeAvailable} />
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex $height='100px' $items='center'>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							name='radioButtonName'
							type='radio'
							value={radioButtonName}
							onChange={() => onChangeSkill(radioButtonName)}
							checked={radioButtonName === activeSkill}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</Flex>
		</Filters>
	)
}
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #cbd3ff;
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 20px;
`
