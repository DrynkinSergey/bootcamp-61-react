import { useDispatch, useSelector } from 'react-redux'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { changeStep, decrement, increment, reset } from '../../redux/counter/actions'
import { selectCounter, selectStep } from '../../redux/counter/selectors'
export const Counter = () => {
	const counter = useSelector(selectCounter)
	const step = useSelector(selectStep)
	const dispatch = useDispatch()

	const handlePlus = () => {
		dispatch(increment())
	}
	const handleMinus = () => {
		dispatch(decrement())
	}
	const handleReset = () => {
		dispatch(reset())
	}
	const handleChangeInput = e => {
		dispatch(changeStep(+e.target.value))
	}

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' value={step} onChange={handleChangeInput} />
				<Flex>
					<StyledButton onClick={handleMinus}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handlePlus}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
