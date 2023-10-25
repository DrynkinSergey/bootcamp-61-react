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

	handleClickOutside = ({ next, target, currentTarget }) => {
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

					{this.props.children}

					<button onClick={this.props.next}>Next</button>
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
