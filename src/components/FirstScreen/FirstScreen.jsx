import React from 'react'
import styled from 'styled-components'

export const FirstScreen = () => {
	return (
		<Wrapper>
			<Content>Welcome to our App! 🔥</Content>
		</Wrapper>
	)
}

export const Wrapper = styled.div`
	position: fixed;
	z-index: 2;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.4);
	display: grid;
	place-items: center;
	backdrop-filter: blur(20px);
`
export const Content = styled.div`
	background-color: white;
	font-size: 5rem;
	font-weight: bold;
	text-align: center;
	display: grid;
	place-items: center;
	width: 800px;
	height: 400px;
`
