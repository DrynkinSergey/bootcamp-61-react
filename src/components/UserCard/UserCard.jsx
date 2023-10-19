import React from 'react'
import s from './UserCard.module.css'
export const UserCard = ({ name, email, bio, isOpenToWork, skills }) => {
	return (
		<div className={s.wrapper}>
			<div>
				<p className={s.name}>Name: {name}</p>
				<p className={s.email}>email: {email}</p>
				<p className={s.bio}>bio: {bio}</p>
				<p className={s.isWork}>isOpenToWork: {isOpenToWork ? 'хоче працювати' : 'не хоче працювати'}</p>
			</div>
		</div>
	)
}
