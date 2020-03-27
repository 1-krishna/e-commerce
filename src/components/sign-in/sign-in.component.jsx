import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ password: '', email: '' });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        //console.log(this.state);
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' type='email' name='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='Password' type='password' name='password' value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;