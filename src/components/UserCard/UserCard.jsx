import React from 'react'

export const UserCard = ({ name, email, bio, isOpenToWork, skills }) => {
	return (
		<div>
			<p>Name: {name}</p>
			<p>email: {email}</p>
			<p>bio: {bio}</p>
			<p>isOpenToWork: {isOpenToWork ? 'хоче працювати' : 'не хоче працювати'}</p>
		</div>
	)
}
