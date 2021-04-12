import React from "react";

import RegisterForm from "../RegisterForm/RegisterForm";

import { signUp } from '../../Services/authService';

class Register extends React.Component {

    state = {
        username: '',
        email:'',
        role:'',
        password:'',
        passwordConfirm: '',
        error: {}
    };

    componentDidMount(){
        const token = sessionStorage.getItem('auth');
        
        if(token){
            this.props.history.push('/');
        }
    }

    clearError = () => {
        this.setState({ error: {} });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const {username, email, password, role, passwordConfirm} = this.state;
        const data = {username, email, password, role, passwordConfirm};
        signUp(data).then(response => {
            let token = response.token;
            this.props.setAlert(true, 'success', ["registration successful, redirecting..."]);
            sessionStorage.setItem('auth', token)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }).catch (error =>  {
            this.setState({ error: {email: error.response.data.message, password: error.response.data.message} });
            this.props.setAlert(true, 'fail', [error.response.data.message])
        })
    }

    handleChange = input => event => this.setState({ [input] : event.target.value });

    render(){
        return(
            <section id="checkout">
                <RegisterForm 
                    onChange = {this.handleChange}
                    onSubmit = {this.onSubmit}
                    clearError = {this.clearError}
                    error = {this.state.error}
                    username = {this.state.username}
                    email = {this.state.email}
                    role = {this.state.role}
                    password = {this.state.password}
                    passwordConfirm = {this.state.passwordConfirm}
                />

            </section>
        )
    }
}

export default Register;