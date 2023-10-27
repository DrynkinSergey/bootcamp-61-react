import { Component, useEffect } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Modal = ({ children, close, next }) => {
	// intervaleId = null
	// timeoutId = null

	useEffect(() => {
		const handleKeyDown = e => {
			console.log(e)
			if (e.key === 'Escape') {
				close()
				toast.info('Modal closed by Escape')
			}
		}
		console.log('Модалка відкрилась')
		document.addEventListener('keydown', handleKeyDown)
		document.body.style.overflow = 'hidden'
		// Використання аналога willUnmount
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.body.style.overflow = 'visible'
			console.log('Мене закрили')
		}
	}, [close])

	useEffect(() => {
		console.log('Другий еффект')
	}, [])

	// componentDidMount() {
	// 	console.log('Модалка відкрилась')
	// 	document.addEventListener('keydown', this.handleKeyDown)
	// 	document.body.style.overflow = 'hidden'
	// 	this.timeoutId = setTimeout(() => {
	// 		console.log('Boom')
	// 	}, 2000)
	// }

	// componentWillUnmount() {
	// 	console.log('Модалка закривається')
	// 	clearInterval(this.intervaleId)
	// 	clearTimeout(this.timeoutId)
	// 	document.body.style.overflow = 'visible'
	// 	document.removeEventListener('keydown', this.handleKeyDown)
	// }

	const handleClickOutside = ({ next, target, currentTarget }) => {
		if (target === currentTarget) {
			close()
			console.log('Нарешті ми клацнули на бекдроп')
		} else {
			console.log('Клік відбувся не на бекдропі')
		}
	}

	return (
		<ModalWrapper onClick={handleClickOutside}>
			<ModalContent>
				<>
					<h1>Modal</h1>
					<hr />
				</>
				<CloseButton onClick={close}>×</CloseButton>

				{children}

				<button onClick={next}>Next</button>
			</ModalContent>
		</ModalWrapper>
	)
}
export const ScrollContent = styled.div`
	overflow-y: scroll;
	height: 400px;
`
export default Modal
