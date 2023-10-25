import React from 'react'
import styled from 'styled-components'
import { FcLike } from 'react-icons/fc'
export const PostCard = ({ body, id, reactions, tags, title }) => {
	return (
		<Card>
			<div>
				<Title>{title}</Title>
				<p>{body}</p>
				<BottomInfo>
					<div>
						<FcLike />
						<span>{reactions}</span>
					</div>
					<div>
						<button>Like</button>
						<button>Delete</button>
					</div>
				</BottomInfo>
			</div>
		</Card>
	)
}

const Card = styled.li`
	border: 2px solid;
	padding: 10px 14px;
	box-shadow: 2px 2px 5px 1px gray;
`
const Title = styled.p`
	font-weight: bold;
	font-size: calc((1vw + 1vh) * 1.7);
	margin-bottom: 10px;
	border-bottom: 2px solid;
	padding-bottom: 2px;
`
const BottomInfo = styled.div`
	display: flex;
	margin-top: 10px;
	justify-content: space-between;
	div:nth-child(1) {
		display: flex;
		gap: 5px;
		align-items: center;
	}
	div:nth-child(2) {
		display: flex;
		gap: 15px;
		align-items: center;
	}
`
