import styled from 'styled-components'

export const StyledCardWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	@media (max-width: 768px) {
		background-color: yellow;
	}
`
export const StyledCardContent = styled.div`
	${props => console.log(props)}
	width: 50%;
	background-color: ${props => (props.$color ? props.$color : 'white')};
	border: 1px solid;
	border-radius: 12px;
	padding: 10px 15px;
	display: flex;
	flex-direction: column;
	gap: 10px;

	span {
		color: red;
		font-size: ${props => props.$size};
	}
`
export const StyledName = styled.p`
	text-align: center;
	font-weight: bold;
`
export const StyledEmail = styled.p`
	color: teal;
	font-size: 1.4rem;
`
export const StyledBio = styled.p`
	color: tomato;
`
