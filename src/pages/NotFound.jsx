import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
	return (
		<Wrapper>
			<div>
				<div>
					<img
						width='800'
						height='600'
						src='https://timeweb.com/ru/community/article/67/67d62d1e0bc27de113cc0e25239705e2.png'
						alt='404'
					/>
				</div>
				<h2>
					You can go to <Link to='/'>Home</Link>
				</h2>
			</div>
		</Wrapper>
	)
}

export default NotFound

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
