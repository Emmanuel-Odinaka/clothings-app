import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({email:'', password:''})

    }

    render() {
        return(
            <div className='sign-in'>
                <form onSubmit={this.handleSubmit}>
                    <h2>I already have an account</h2>
                    <span>sign in with your email and password</span>
                    <FormInput name='email' 
                    type='email' 
                    value={this.state.email} 
                    label='email'
                    handleChange={this.handleChange}
                    required />

                    <FormInput name='password' 
                    type='password' 
                    value={this.state.password} 
                    label='password'
                    handleChange={this.handleChange}
                    required />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                        
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;