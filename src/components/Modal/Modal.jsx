import { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import { toast } from 'react-toastify'
import styled from 'styled-components'

class Modal extends Component {
	intervaleId = null
	timeoutId = null
	// state = {
	// 	timer: 1,
	// }

	handleKeyDown = e => {
		console.log(e)
		if (e.key === 'Escape') {
			this.props.close()
			toast.info('Modal closed by Escape')
		}
	}

	componentDidMount() {
		console.log('Модалка відкрилась')
		document.addEventListener('keydown', this.handleKeyDown)
		document.body.style.overflow = 'hidden'
		// this.intervaleId = setInterval(() => {
		// 	console.log('update')
		// 	this.setState(prev => ({ timer: prev.timer + 1 }))
		// }, 1000)
		this.timeoutId = setTimeout(() => {
			console.log('Boom')
		}, 2000)
	}

	componentWillUnmount() {
		console.log('Модалка закривається')
		clearInterval(this.intervaleId)
		clearTimeout(this.timeoutId)
		document.body.style.overflow = 'visible'
		document.removeEventListener('keydown', this.handleKeyDown)
	}

	handleClickOutside = ({ target, currentTarget }) => {
		if (target === currentTarget) {
			this.props.close()
			console.log('Нарешті ми клацнули на бекдроп')
		} else {
			console.log('Клік відбувся не на бекдропі')
		}
	}
	render() {
		return (
			<ModalWrapper onClick={this.handleClickOutside}>
				<ModalContent>
					<>
						<h1>Modal</h1>
						<hr />
					</>
					<CloseButton onClick={this.props.close}>×</CloseButton>
					{/* <h1>{this.state.timer}</h1> */}
					<ScrollContent>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit ipsam soluta maiores vero et
							necessitatibus, cum facere neque eius magnam nulla commodi aliquam mollitia veritatis voluptatibus
							nostrum, non praesentium. Cum quisquam, quas, molestiae atque, nobis architecto soluta id nemo dignissimos
							aut similique. Dicta quasi similique, ducimus quam nemo quas in pariatur est, officia totam nam fugiat
							fugit nesciunt velit? Doloremque laboriosam fugiat reprehenderit laudantium. Quae ea excepturi eius ut sit
							eos accusantium a officiis aliquam rerum. Ut pariatur praesentium placeat aliquam, saepe vel, quis neque
							dolores iusto ab accusantium? Ducimus molestiae hic repellat molestias repudiandae laudantium nisi et quia
							incidunt iusto eius similique vel amet tenetur, fugit excepturi commodi quasi qui consectetur animi natus
							numquam accusantium assumenda. Numquam, saepe.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit ipsam soluta maiores vero et
							necessitatibus, cum facere neque eius magnam nulla commodi aliquam mollitia veritatis voluptatibus
							nostrum, non praesentium. Cum quisquam, quas, molestiae atque, nobis architecto soluta id nemo dignissimos
							aut similique. Dicta quasi similique, ducimus quam nemo quas in pariatur est, officia totam nam fugiat
							fugit nesciunt velit? Doloremque laboriosam fugiat reprehenderit laudantium. Quae ea excepturi eius ut sit
							eos accusantium a officiis aliquam rerum. Ut pariatur praesentium placeat aliquam, saepe vel, quis neque
							dolores iusto ab accusantium? Ducimus molestiae hic repellat molestias repudiandae laudantium nisi et quia
							incidunt iusto eius similique vel amet tenetur, fugit excepturi commodi quasi qui consectetur animi natus
							numquam accusantium assumenda. Numquam, saepe.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam, asperiores mollitia delectus
							officiis corrupti, aut magnam ea ipsam ducimus, fugiat possimus dicta repellat vel voluptatibus optio
							assumenda cum. Blanditiis. A amet necessitatibus adipisci natus hic veritatis aperiam dolorum pariatur
							quia animi molestiae eligendi blanditiis porro velit cum similique nesciunt atque ex expedita, laudantium
							dignissimos placeat quibusdam. Hic, soluta molestias! Incidunt corrupti temporibus nemo tenetur dolore
							suscipit fugiat illum ut voluptatibus soluta necessitatibus ea, repudiandae nobis fugit, velit voluptate
							explicabo et sed praesentium? Amet nihil, rem neque architecto modi earum? Expedita autem atque magnam
							repudiandae id minus dignissimos ex quia rem rerum voluptatum dolorum laudantium aliquam harum est, ut
							illum minima ipsum libero numquam incidunt. Repellendus voluptate molestias molestiae consequatur? Tempore
							similique assumenda distinctio tempora eveniet aliquid cupiditate, quia exercitationem quas ipsam corporis
							necessitatibus quibusdam nobis reprehenderit, rem ex provident labore dolorum laudantium magnam maiores.
							Temporibus eaque perspiciatis labore ut! Itaque sit obcaecati ipsa necessitatibus fugit, nisi excepturi
							laboriosam nulla omnis delectus quibusdam adipisci dolorum totam odio labore illum quod, minus dolore
							officia harum fuga! Labore illum ullam perferendis unde? Quo, sunt officiis ex quisquam eligendi velit,
							enim quibusdam ducimus consequatur quasi amet dolore! Nisi suscipit alias minus maxime sapiente officia
							corporis nostrum sint. Facere alias mollitia tempora voluptates autem? Architecto, aut numquam veritatis
							vel dicta reprehenderit nihil modi ea sint placeat. Dolorem incidunt necessitatibus aperiam! Rerum quos
							enim dicta suscipit, fuga commodi vitae? Quibusdam accusamus est voluptatum rerum culpa. Suscipit
							perspiciatis accusantium a asperiores at consequuntur consectetur maxime cumque, eum culpa molestiae
							sapiente magni et saepe ipsum. Cum alias voluptas dolorem numquam amet ea iure adipisci, fugiat error
							consectetur! Porro, ipsa labore similique officiis esse doloribus ipsam laborum, voluptatem commodi,
							voluptate amet odio eaque voluptas cumque? Cum necessitatibus impedit, dolor eveniet dolores fugit. Cum
							quas culpa cumque minima doloribus? Incidunt veniam maiores doloribus quidem doloremque id. Eveniet
							laboriosam praesentium consequatur harum architecto optio possimus ratione non, obcaecati, nam amet
							ducimus animi blanditiis rerum labore? Quam officiis quis repellat enim? Minus laboriosam blanditiis
							placeat eaque quam quas qui consequatur mollitia iste, deleniti quae atque, porro minima adipisci culpa
							sunt quibusdam in molestiae quis maxime aspernatur voluptates. Recusandae, nobis esse. Voluptas.
							Aspernatur voluptatibus animi, ipsa laudantium unde quae voluptas deserunt magni eligendi consequuntur,
							quasi totam dolor ab a ratione obcaecati tempore? Ipsam error ut dolorem repellat nostrum asperiores
							veniam fugiat qui. Perspiciatis incidunt quod harum ipsam, sed accusamus? Ratione nihil recusandae nemo a
							dignissimos obcaecati delectus porro, reprehenderit accusantium sequi repellendus harum nesciunt
							architecto? Expedita, omnis minima dicta numquam nesciunt voluptas? Possimus dicta, unde eaque provident
							perferendis recusandae, ratione sint asperiores corrupti, consequatur quaerat facilis obcaecati distinctio
							debitis suscipit perspiciatis! Iste veritatis reiciendis ab odio ipsum illo totam earum harum sequi! Magni
							quibusdam cum hic. Eaque quaerat modi quas sint, doloribus rem ipsam beatae corrupti architecto
							accusantium, dolores harum vel sit? Culpa provident pariatur architecto explicabo quae. Explicabo aliquid
							sapiente inventore! Omnis, quasi? Id mollitia cupiditate beatae assumenda possimus architecto rerum
							ratione sunt voluptas eos fuga, corporis delectus consequatur nulla incidunt numquam, ea ad dolor velit
							deserunt aperiam aliquam. Similique, aliquam? Molestias, iste temporibus, magnam cumque, illo repellat sed
							tempora quisquam laborum quam omnis iure sint optio nulla aliquid assumenda quasi aperiam asperiores
							nostrum repellendus? Consectetur quaerat explicabo dignissimos beatae placeat? Possimus, quam minima
							similique nostrum quisquam, dignissimos tempore vero saepe, ipsa delectus debitis aperiam. Possimus
							dolorum minima architecto quaerat eos hic non, officiis molestiae unde quam reprehenderit facilis eius
							excepturi? Impedit et laborum nulla ducimus necessitatibus fugiat a velit corrupti corporis ab eligendi
							labore, officiis nemo culpa maxime soluta, rerum consequatur? Labore autem sunt saepe hic doloremque ea
							suscipit vel?
						</p>
					</ScrollContent>
					{this.props.children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}
export const ScrollContent = styled.div`
	overflow-y: scroll;
	height: 400px;
`
export default Modal
