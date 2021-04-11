import React from 'react';

import LoginForm from "../LoginForm/LoginForm";

import Backend from '../axios/Backend';

class login extends React.Component {

    state = {
        email:'',
        password:'',
        error: {}
    };

    componentDidMount(){
        const token = localStorage.getItem('auth');
        
        if(token){
            this.props.history.push('/');
        }
    }

    clearError = () => {
        this.setState({ error: {} });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            const response = await Backend.post('login', {
                email,
                password
            });

            // if(response.data.status === 'success'){ 
                
                let token = response.data.token;

                this.props.setAlert(true, 'success', ["login successful, redirecting..."]);
                localStorage.setItem('auth', token)
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            // }
        } catch (error) {
            // let err = "could not connect, please check your internet connection";
            if(error.response){
                this.setState({ error: {email: error.response.data.message, password: error.response.data.message} });
                let err = error.response.data.message;
                this.props.setAlert(true, 'fail', [err])

            }
        }
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