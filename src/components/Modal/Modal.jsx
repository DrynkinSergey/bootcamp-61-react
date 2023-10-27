import { Component, useEffect, useRef } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Modal = ({ children, close, next }) => {
	const intervalId = useRef(null)
	const modalCloseRef = useRef(null)
	useEffect(() => {
		const handleKeyDown = e => {
			console.log(e)
			if (e.key === 'Escape') {
				close()
				toast.info('Modal closed by Escape')
			}
		}
		setTimeout(() => {
			modalCloseRef.current.click()
		}, 3000)
		document.addEventListener('keydown', handleKeyDown)
		document.body.style.overflow = 'hidden'
		intervalId.current = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.body.style.overflow = 'visible'
			clearInterval(intervalId.current)
			console.log('Мене закрили')
		}
	}, [close])

	useEffect(() => {
		console.log('Другий еффект')
	}, [])

	const handleClickOutside = ({ next, target, currentTarget }) => {
		if (target === currentTarget) {
			close()
			console.log('Нарешті ми клацнули на бекдроп')
		} else {
			console.log('Клік відбувся не на бекдропі')
		}
	}

	return (
		<ModalWrapper ref={modalCloseRef} onClick={handleClickOutside}>
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
