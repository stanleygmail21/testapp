import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import formatNumber from '../functions/formatNumber';
import chargeService from '../../Services/chargeService';



class CheckoutForm extends React.Component {

    state = {
      disabled: false
    }

  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    this.setState({
      disabled: true
    })

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      this.props.setAlert(true, 'fail', [`stripe not loaded`])
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      
    });

    if (error) {
      this.setState({
        disabled: false
      }) 
    } else {
      
      const data = { payment_id: paymentMethod.id, checkoutTotal: this.props.checkoutTotal };
      const id = this.props.product._id;
      chargeService(id, data).then(response => {
        this.props.setAlert(true, 'success', [`Your payment was successful`])

        this.setState({
          disabled: false
        }) 
      })

      // this.props.setAlert(true, 'success', [`Your payment was successfully`])

      // this.setState({
      //   disabled: false
      // })      

    }
  };

  CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
      base: {
        iconColor: "rgb(240, 57, 122)",
        fontSize: "16px",
        fontFamily: '"Open Sans", sans-serif',
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "#CFD7DF"
        },
        
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238"
        }
      }
    }
  }

  render() {
    return (
        
      <>
      <div className="p-3 mb-4">
        <div className="text-center">
          <h1 className="display-4 mt-4"> 
            <span className="font-size-md d-inline-block mr-1" style={{transform: 'translate(0px, -17px)'}}>$</span>
            <span>{formatNumber(this.props.checkoutTotal)}</span>
          </h1>
          {/* <p className="mb-0">{this.props.plan.interval}</p> */}
        </div>
        <div className="mt-4">
          <h2 className="text-center font-weight-semibold">{this.props.product.name}</h2>
        </div>
      </div>
      <div className="alert-primary alert__list">
        <h4 className="mb-4">This site uses stripe test for purchases</h4>
        <ul >
          <li>Card Number: 4242 4242 4242 4242</li>
        </ul>
      </div>
      <CardElement options={this.CARD_ELEMENT_OPTIONS} className="card__element" />
      
      <div className="d-flex justify-content-center mb-4">
        <Button variant="success" onClick={this.handleSubmit} type="submit" disabled={this.state.disabled} >
          Pay Now
        </Button>
      </div>

      </>

        
    );
   
  }
}

function InjectedCheckoutForm(props) {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
            <CheckoutForm stripe={stripe} elements={elements} {...props} />
            )}
        </ElementsConsumer>
    );
  }

 

  export default withRouter(InjectedCheckoutForm);