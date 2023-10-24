import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../Counter/Counter.styled'
import { MdWork, MdWorkOff } from 'react-icons/md'
import { AlertCircle } from 'lucide-react'
export const EmployeeCard = ({ handleEditUser, onDeleteUser, id, name, email, bio, skills, isOpenToWork }) => {
	return (
		<UserCard $bg={isOpenToWork}>
			<h3
				onClick={() => handleEditUser({ id, name: prompt('Enter userName:') })}
				style={{ gap: '10px', display: 'flex', alignItems: 'center' }}
			>
				{name}
				{isOpenToWork ? <WorkIcon /> : <MdWorkOff className='workOff' />}
			</h3>
			<h4>{email} </h4>
			<h5>{bio}</h5>
			<SkillList>
				{skills.map(skill => (
					<Skill $skill={skill} key={skill}>
						{skill}
					</Skill>
				))}
			</SkillList>

			<StyledButton onClick={() => onDeleteUser(id)} $border='2px' $size='.8rem'>
				Delete
			</StyledButton>
			<AlertICON strokeWidth={1.75} />
		</UserCard>
	)
}

const WorkIcon = styled(MdWork)`
	&:hover {
		color: yellow;
		cursor: pointer;
	}
`
const AlertICON = styled(AlertCircle)`
	color: #fd0808;
	&:hover {
		color: yellow;
		cursor: pointer;
	}
`

const UserCard = styled.li`
	display: flex;
	gap: 10px;
	flex-direction: column;
	border: 3px solid;
	border-radius: 12px;
	padding: 15px;
	background-color: ${({ $bg }) => ($bg ? 'green' : 'tomato')};
	width: 25%;
	box-shadow: 4px 5px 2px 1px gray;
`
const SkillList = styled.ul`
	margin-bottom: 20px;
	padding: 0;
`

const Skill = styled.li`
	border: 2px solid black;

	border-radius: 12px;
	padding: 4px 9px;
	display: inline;
	color: white;
	margin-right: 10px;
	background-color: ${({ $skill }) => {
		switch ($skill) {
			case 'react':
				return 'blue'
			case 'vue':
				return 'green'
			case 'angular':
				return 'red'
			default:
				return 'white'
		}
	}};
`
