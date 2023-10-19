import { StyledBio, StyledCardContent, StyledCardWrapper, StyledEmail, StyledName } from './UserCard.styled'
export const UserCard = ({ name, email, bio, isOpenToWork, skills }) => {
	return (
		<StyledCardWrapper>
			<StyledCardContent $size='30px' $color='white'>
				<StyledName>Name: {name}</StyledName>
				<StyledEmail>email: {email}</StyledEmail>
				<StyledBio>bio: {bio}</StyledBio>
				<p>isOpenToWork: {isOpenToWork ? 'хоче працювати' : 'не хоче працювати'}</p>
				<span>100%</span>
			</StyledCardContent>
		</StyledCardWrapper>
	)
}
