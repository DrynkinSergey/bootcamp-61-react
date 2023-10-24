import { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends Component {
	intervaleId = null

	componentDidMount() {
		console.log('Модалка відкрилась')
		this.intervaleId = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)
	}

	componentWillUnmount() {
		console.log('Модалка закривається')
		clearInterval(this.intervaleId)
	}
	render() {
		return (
			<ModalWrapper>
				<ModalContent>
					<>
						<h1>Modal</h1>
						<hr />
					</>
					<CloseButton onClick={this.props.close}>×</CloseButton>
					{this.props.children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}

export default Modal
