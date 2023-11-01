import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../context/UserProvider'

export const NavBar = () => {
	const { logout } = useContext(UserContext)

	return (
		<SideBar>
			<StyledLink to='/'>Home</StyledLink>
			<StyledLink to='/about'>About</StyledLink>
			<StyledLink to='/users'>Users</StyledLink>
			<StyledLink to='/colorPicker'>Color Picker</StyledLink>
			<StyledLink to='/register'>Sign up</StyledLink>
			<button onClick={logout}>Exit</button>
		</SideBar>
	)
}

const SideBar = styled.nav`
	background-color: #d5edfd;
	min-height: 100vh;
	border-right: 2px solid black;
	display: flex;
	flex-direction: column;
	gap: 25px;
	position: fixed;
	width: 200px;
	padding: 40px 20px;
`
export const StyledLink = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 5px;
	border-radius: 4px;
	text-decoration: none;
	color: black;

	&.active {
		background-color: blue;
		color: white;
	}
	&:hover:not(.active) {
		background-color: lightblue;
	}
`
