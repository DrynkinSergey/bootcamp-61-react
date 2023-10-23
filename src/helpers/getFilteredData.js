export const getFilteredData = ({ users, filter }) => {
	return users.filter(
		user =>
			user.name.toLowerCase().includes(filter.toLowerCase()) || user.email.toLowerCase().includes(filter.toLowerCase())
	)
}
