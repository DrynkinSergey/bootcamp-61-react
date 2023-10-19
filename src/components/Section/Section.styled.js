import styled from 'styled-components'

export const StyledTitle = styled.h1`
	color: red;
	font-weight: bold;
	text-align: center;
	padding: 5px 10px;
	background-color: ${props => (props.$primary ? 'gold' : 'white')};
	text-decoration: underline;
`

export const StyledDataList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	max-width: 90%;
	margin: 0 auto;
	justify-content: center;
	gap: 15px;
	padding: 0;
	list-style: none;
`
export const StyledCard = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 20px 10px;
	border: 1px solid;
	font-style: italic;
	background-color: ${props => (props.$index % 2 === 0 ? 'lightgray' : 'white')};
	box-shadow: 2px 2px 5px 2px gray;
`
