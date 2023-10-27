import React, { useEffect, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { toast } from 'react-toastify'

export const Counter = () => {
	// Повертає два значення. 1 - сама змінна, значення. 2 - Функція для керування цією змінною
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)
	const firstRender = useRef(true)
	const inputRef = useRef(null)
	const buttonRef = useRef(null)
	// const [test, setTest] = useState(1)
	useEffect(() => {
		console.log(inputRef.current)
		inputRef.current.focus()
		setTimeout(() => {
			buttonRef.current.click()
		}, 2000)
		firstRender.current || console.log('Лічильник змонтувався, лише 1 раз йде виконання')
	}, [])

	useEffect(() => {
		firstRender.current || console.log('Крок було змінено')
	}, [step])

	useEffect(() => {
		if (firstRender.current === true) {
			toast.error('Це був перший рендер! Далі він не повториться!')
			firstRender.current = false
			return
		}
		console.log('Було змінено  лічильник')
	}, [counter, step])

	useEffect(() => {
		if (counter > 10) {
			inputRef.current.style.border = '2px solid red'
			console.log('Counter > 10')
		}
		if (step === 5) {
			setStep(1)
		}
	}, [counter, step])
	console.log('Render')

	const handleIncrement = () => {
		// this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
		setCounter(prevState => prevState + step)
	}
	const handleDecrement = () => {
		// if (this.state.counter !== 0) {
		// this.setState(prev => ({ counter: prev.counter - prev.step }))
		// }
		if (counter !== 0) {
			setCounter(prevState => prevState - step)
		}
	}
	const handleReset = () => {
		// this.setState({ counter: 0, step: 1 })
		setCounter(0)
		setStep(1)
	}
	const handleChangeStep = e => {
		// this.setState({ step: +e.target.value })
		setStep(+e.target.value)
	}

	return (
		<FlexContainer>
			<StyledCounter>
				{/* <button onClick={() => setTest(prev => prev + 1)}>UPDATE</button> */}

				<input ref={inputRef} value={step} onChange={handleChangeStep} type='number' placeholder='change step' />
				<h1>{counter}</h1>
				<Flex>
					<StyledButton onClick={handleDecrement}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handleIncrement} ref={buttonRef}>
						plus
					</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}

// export class Counter extends React.Component {
// 	state = {
// 		counter: 0,
// 		step: 1,
// 	}
// 	componentDidMount() {
// 		console.log('Mount')
// 		toast.success('Comonent was mount')
// 	}

// 	componentDidUpdate(_, prevState) {
// 		console.log('Update')
// 		if (prevState.counter !== this.state.counter) {
// 		}
// 		if (prevState.step !== this.state.step) {
// 			toast.info('Step was updated')
// 		}
// 		if (this.state.counter === 5) {
// 			toast.warning('Please stop!')
// 		}
// 	}

// 	handleIncrement = () => {
// 		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
// 	}
// 	handleDecrement = () => {
// 		if (this.state.counter !== 0) {
// 			this.setState(prev => ({ counter: prev.counter - prev.step }))
// 		}
// 	}
// 	handleReset = () => {
// 		this.setState({ counter: 0, step: 1 })
// 	}
// 	handleChangeStep = e => {
// 		this.setState({ step: +e.target.value })
// 	}

// render() {
// 	return (
// 		<FlexContainer>
// 			<StyledCounter>
// 				<input value={this.state.step} onChange={this.handleChangeStep} type='number' placeholder='change step' />
// 				<h1>{this.state.counter}</h1>
// 				<Flex>
// 					<StyledButton onClick={this.handleDecrement}>minus</StyledButton>
// 					<StyledButton onClick={this.handleReset}>reset</StyledButton>
// 					<StyledButton onClick={this.handleIncrement}>plus</StyledButton>
// 				</Flex>
// 			</StyledCounter>
// 		</FlexContainer>
// 	)
// 	}
// }
