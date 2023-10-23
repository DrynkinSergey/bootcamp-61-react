export const getFilteredData = ({ users, filter, isAvailable, activeSkill }) => {
	return users
		.filter(
			user =>
				user.name.toLowerCase().includes(filter.toLowerCase()) ||
				user.email.toLowerCase().includes(filter.toLowerCase())
		)
		.filter(user => (isAvailable ? user.isOpenToWork : user))
		.filter(user => (activeSkill === 'all' ? user : user.skills.includes(activeSkill)))
}
