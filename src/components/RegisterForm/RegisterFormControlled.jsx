import { Component } from 'react'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'

export class RegisterFormControlled extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		gender: '',
		country: '',
		agree: false,
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		this.setState({
			name: '',
			email: '',
			password: '',
			gender: '',
			country: '',
			agree: false,
		})
	}
	handleChangeInput = e => {
		const { target } = e
		const { name, value } = target
		if (name === 'agree') {
			this.setState(prev => ({ agree: !prev.agree }))
			return
		}
		this.setState({ [name]: value })
	}

	render() {
		const { name, email, password, gender, country } = this.state
		return (
			<FlexContainer>
				<StyledLoginForm onSubmit={this.handleSubmit}>
					<StyledTitle>Register</StyledTitle>
					<StyledLabel>
						Name:
						<StyledInput onChange={this.handleChangeInput} type='text' name='name' value={name} />
					</StyledLabel>
					<br />
					<StyledLabel>
						Email:
						<StyledInput onChange={this.handleChangeInput} type='text' name='email' value={email} />
					</StyledLabel>
					<br />
					<StyledLabel>
						Password:
						<StyledInput type='password' onChange={this.handleChangeInput} name='password' value={password} />
					</StyledLabel>
					<br />
					<StyledLabel>Gender:</StyledLabel>
					<input
						onChange={this.handleChangeInput}
						type='radio'
						value='male'
						name='gender'
						checked={gender === 'male'}
					/>{' '}
					Male
					<input
						onChange={this.handleChangeInput}
						type='radio'
						value='female'
						name='gender'
						checked={gender === 'female'}
					/>{' '}
					Female
					<br />
					<br />
					<StyledLabel>
						Country:
						<select onChange={this.handleChangeInput} name='country' value={country}>
							<option value='ukraine'>Ukraine</option>
							<option value='usa'>USA</option>
							<option value='canada'>Canada</option>
						</select>
					</StyledLabel>
					<br />
					<StyledLabel>
						<input onChange={this.handleChangeInput} type='checkbox' name='agree' checked={this.state.agree} />
						Im agree with rules
					</StyledLabel>
					<StyledButton disabled={!this.state.agree}>Register</StyledButton>
				</StyledLoginForm>
			</FlexContainer>
		)
	}
}
