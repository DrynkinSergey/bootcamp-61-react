import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'

export const RegisterForm = () => {
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const name = form.name.value
		const password = form.password.value
		const email = form.email.value
		const gender = form.gender.value
		const country = form.country.value
		console.log({ name, password, email, gender, country })
		form.reset()
	}
	return (
		<FlexContainer>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput type='text' name='name' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput type='text' name='email' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Password:
					<StyledInput type='password' name='password' />
				</StyledLabel>
				<br />
				<StyledLabel>Gender:</StyledLabel>
				<input type='radio' value='male' name='gender' /> Male
				<input type='radio' value='female' name='gender' /> Female
				<br />
				<br />
				<StyledLabel>
					Country:
					<select name='country'>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='canada'>Canada</option>
					</select>
				</StyledLabel>
				<br />
				<StyledButton>Register</StyledButton>
			</StyledLoginForm>
		</FlexContainer>
	)
}
