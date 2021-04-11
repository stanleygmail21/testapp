import { Component } from 'react';
import Head from 'next/head';

import { 
    FaCheckCircle
} from "react-icons/fa";

import Personal from '../forms/Personal';
import Shipping from '../forms/Shipping';
import Payment from '../forms/Payment';
import formatNumber from '../functions/formatNumber';

class checkout extends Component {
    state = {
        step: 1,
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        length: 0,
        error: {}
    }

    componentDidMount(){
        this.formSteps = document.querySelectorAll('.form__step');  
    }

    handleChange = input => event => this.setState({ [input] : event.target.value });

    clearError = () => {
        this.setState({ error: {} });
    }

    showStep = (form) => {
        this.formSteps.forEach((cur, index) => {
            if (form === index) {
                this.formSteps[index].style.display = 'block';
            }
            else{
                this.formSteps[index].style.display = 'none';
            }
        })
        this.setState({ step: form });
    }

    displayCarouselRadioBtn = () => {
        let arr = [];
        
        for(let i = 0; i < length; i++){
            arr.push(<div key={i} onClick={() => this.showSlide(i)} className={`carousel__radio--btn ${this.state.slide === i ? 'active' : ''}`}></div>)
        }

        return arr;
    }

    nextStep = () => {
        let x = this.state.step + 1;
        this.showStep(x);
    }

    prevStep = () => {
        this.showStep(this.state.step - 1);
    }

    displayForm(){
        switch (this.state.step) {
            case 1:
                return <Personal
                    email={this.state.email} 
                    clearError={this.clearError} 
                    setAlert={this.props.setAlert} 
                    error={this.state.error} 
                    nextStep={this.nextStep} 
                    prevStep={this.prevStep} 
                    onChange={this.handleChange} />;        
            case 2:
                return <Shipping 
                    firstName={this.state.firstName} 
                    lastName={this.state.lastName} 
                    address={this.state.address} 
                    city={this.state.city} 
                    state={this.state.state} 
                    clearError={this.clearError}
                    setAlert={this.props.setAlert} 
                    error={this.state.error} 
                    nextStep={this.nextStep} 
                    prevStep={this.prevStep} 
                    onChange={this.handleChange} 
                />;    
            case 3:
                return <Payment 
                    email={this.state.email} 
                    firstName={this.state.firstName} 
                    lastName={this.state.lastName} 
                    address={this.state.address} 
                    city={this.state.city} 
                    state={this.state.state} 
                />
            default:
                break;
        }
    }

    checkoutList(){
        return this.props.cart.map((element, index) => {
            return (
            <li key={index} className="checkout__list--item">
                <p className="checkout__list--item__quantity">{element.quantity} x</p>
                <p className="checkout__list--item__name">{element.name}</p>
                <p className="checkout__list--item__price">₦{formatNumber(element.price)}</p>
                
            </li>
            )
        });
    }

    checkOutResults(){
        let subTotal = 0;
        let shipping = 0;

        this.props.cart.forEach(element => {
           subTotal += element.price * 1;
        });

        let total = subTotal + shipping;

        return(
            <React.Fragment>
                <div className="checkout__results">
                    <p>Sub total</p>
                    <p>₦{formatNumber(subTotal)}</p>
                </div>

                <div className="checkout__results">
                    <p>Shipping</p>
                    <p>-----</p>
                </div>

                <div className="checkout__results">
                    <p>Total</p>
                    <p className="checkout__results--total">₦{formatNumber(total)}</p>
                </div>
            </React.Fragment>
        )
    }

    render(){
        
        return(
            <section id="checkout">
                <Head>
                    <title>Checkout</title>
                </Head>
                <div className="container">
                    <div className="checkout__container">
                        
                        <div className="card checkout__form">
                            <div className="heading">
                                <h1 className="heading__primary">Checkout form</h1>
                                <div className="underline"></div>
                            </div>
    
                            <div className="checkout__steps--container">
                               <div className="checkout__steps--group">
                                <div className="checkout__steps checkout__steps--1">{this.state.step > 1 ? <FaCheckCircle width="100" /> : 1}</div>
                                    <p className="checkout__steps--text">Personal details</p>
                                </div>
                                <div className="checkout__steps--group">
                                    <div className="checkout__steps checkout__steps--1">{this.state.step > 2 ? <FaCheckCircle width="100" /> : 2}</div>
                                    <p className="checkout__steps--text"> Shipping</p>
                                </div>
                                <div className="checkout__steps--group">
                                    <div className="checkout__steps checkout__steps--1">{this.state.step > 3 ? <FaCheckCircle width="100" /> : 3}</div>
                                    <p className="checkout__steps--text">Payment</p>
                                </div>
                            </div>
    
                            <form className="form__checkout">
                                {this.displayForm()}    
                            </form>
                        </div>
    
                        <div className="card checkout__summary">
                            <div className="heading">
                                <h1 className="heading__primary">Order Summary</h1>
                                <div className="underline"></div>
                            </div>        

                            <div>
                                <p>{this.props.cart.length} item(s)</p>
                               
                            </div>

                            <ul className="checkout__list">
                                {this.checkoutList()}
                            </ul>
                            
                            {this.checkOutResults()}
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }

}

export default checkout;