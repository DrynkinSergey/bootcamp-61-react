import styled from 'styled-components'
import { EmployeeCard } from './EmployeeCard'

export const EmployeeList = ({ users = [], onDeleteUser }) => {
	if (!users.length) {
		return <h1>Немає юзерів для роботи</h1>
	}

	return (
		<UserList>
			{users.map(user => (
				<EmployeeCard key={user.id} onDeleteUser={onDeleteUser} {...user} />
			))}
		</UserList>
	)
}
const UserList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`
