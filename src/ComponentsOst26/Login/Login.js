import React from 'react';

import LoginForm from "../LoginForm/LoginForm";

import { signIn } from '../../Services/authService';

class login extends React.Component {

    state = {
        email:'',
        password:'',
        error: {},
        token: sessionStorage.getItem('auth')
    };


    componentDidMount(){
        
        if(this.state.token){
            this.props.history.push('/');
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.token !== this.props.token){
            window.location.reload();
        }
    }

    clearError = () => {
        this.setState({ error: {} });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const data = { email, password };
        signIn(data).then(response => {
            let token = response.token;

            this.props.setAlert(true, 'success', ["login successful, redirecting..."]);
            sessionStorage.setItem('auth', token)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }).catch (error => {
            this.setState({ error: {email: error.response.data.message, password: error.response.data.message} });
            let err = error.response.data.message;
            this.props.setAlert(true, 'fail', [err])
        });
    }

    handleChange = input => event => this.setState({ [input] : event.target.value });

    render(){
        return(
            <section id="checkout">
                
                <LoginForm 
                    onChange = {this.handleChange}
                    onSubmit = {this.onSubmit}
                    clearError = {this.clearError}
                    error = {this.state.error}
                    email = {this.state.email}
                    password = {this.state.password}
                />

            </section>
        )
    }
}

export default login;