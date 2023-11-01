import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const About = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [login, setLogin] = useState(true)
	const handleBack = () => {
		navigate('/')
		navigate(location)
	}
	useEffect(() => {
		setTimeout(() => {
			// navigate('/users')
		}, 2000)
	}, [navigate])

	if (login === false) {
		return <Navigate to='/login' />
	}
	return (
		<Wrapper>
			<Link to='/'>Go to home!</Link>
			<button onClick={() => setLogin(false)}>Logout</button>
			<button onClick={handleBack}>Go to home!</button>
			<button onClick={() => navigate(-1)}>Go back for 1 page!</button>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint culpa illum temporibus quia quo ab quisquam
				earum impedit iusto nisi quos, vero excepturi corrupti dolore illo explicabo? Dolor, perferendis?
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquam corporis quidem illo facere amet
				reprehenderit autem temporibus quam. Doloremque atque recusandae optio veritatis neque ex rem esse corrupti sed.
				Omnis voluptates illum placeat odio fugit sint expedita aspernatur accusamus! At nulla ipsam magni, voluptatibus
				suscipit quae quo, ad delectus architecto, alias culpa eligendi incidunt omnis accusantium quidem nobis aperiam?
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nemo quam natus ipsum incidunt. Ex error
				consectetur autem est molestias quo facere iste, doloremque nemo quam, maxime, dolores delectus recusandae.
				Maiores nesciunt temporibus incidunt architecto asperiores corporis consequuntur repellat facere, quidem
				repudiandae blanditiis quia, molestias voluptates inventore itaque. Voluptates minus ratione autem culpa animi
				nisi corrupti veritatis consectetur accusantium distinctio. Reiciendis cum nulla, temporibus consequatur tempora
				numquam iste voluptas pariatur architecto iure molestias repudiandae, adipisci aperiam libero praesentium
				impedit dolore ad. In, at. Ratione, obcaecati. Repellendus sequi voluptatum harum eius. Aspernatur odio amet
				dignissimos aliquam nostrum temporibus, natus error voluptatem fugit unde voluptatum saepe voluptatibus qui
				adipisci cumque autem blanditiis architecto ipsa nisi vero consequuntur dolorum repellendus harum aperiam?
				Doloribus? Dolore nostrum esse eius sed rerum aliquam perferendis facere velit mollitia quasi, in odit debitis
				officia nulla. Ut distinctio nihil natus, repellat aspernatur, consequatur magnam error dolor excepturi quasi a?
				Ea sint est doloremque incidunt? Possimus assumenda ratione nam sint at consequatur sit. Hic quisquam officia
				libero harum. Ut similique eum nam odit voluptatem ad quibusdam repudiandae laborum numquam pariatur! Similique
				alias pariatur inventore? Ipsam, facere reiciendis sequi ea placeat voluptatum vitae ad quis consequuntur nisi
				dignissimos! Accusantium adipisci, earum ullam eum, fugit sunt excepturi quidem blanditiis in quos error? Minima
				ea soluta tenetur rerum placeat a voluptatum harum labore aperiam dolorem maxime tempore mollitia ducimus
				reprehenderit culpa provident alias, rem porro unde hic iure doloribus, ipsam voluptatem beatae. Corrupti.
				Sapiente fugiat maiores optio, sequi excepturi iure. Nostrum quae veniam, perferendis omnis est commodi. Aliquam
				rem minus fugit assumenda illum totam, corporis cupiditate maiores hic repudiandae nesciunt, dolorem quos sunt?
				Ullam temporibus nesciunt quaerat suscipit odit alias, repudiandae enim quia minima optio pariatur, incidunt
				debitis veniam rerum ea nulla exercitationem fugiat asperiores maxime? Earum omnis eveniet corporis inventore
				iusto commodi.
			</p>
		</Wrapper>
	)
}

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`
