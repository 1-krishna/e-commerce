import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        //console.log(event);
    }

    handleSubmit = async event => {
        event.preventDefault();
        //console.log(event);
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password didn't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.log('error registering!', err);
            alert(err.message);
            this.setState({ email: '' })
        }
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up using email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        onChange={this.handleChange}
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        label='Display Name'
                    />
                    <FormInput
                        onChange={this.handleChange}
                        type='email'
                        name='email'
                        value={this.state.email}
                        label='Email'
                    />
                    <FormInput
                        onChange={this.handleChange}
                        type='password'
                        name='password'
                        value={this.state.password}
                        label='Password'
                    />
                    <FormInput
                        onChange={this.handleChange}
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        label='Confirm Password'
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;