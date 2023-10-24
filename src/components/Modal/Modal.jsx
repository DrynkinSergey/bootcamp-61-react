import { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import { toast } from 'react-toastify'

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
					{this.props.children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}

export default Modal
