import React from 'react';
import { Modal } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./ProductShow.css";

import { DateRange } from 'react-date-range';

import CheckoutForm from '../CheckoutForm/index';
import Loader from '../icons/Loader';
import CartIcon from '../icons/CartIcon';
import StarIcon from '../icons/StarIcon';
import formatNumber from '../functions/formatNumber';
import { getProduct } from '../../Services/productService';
import { getTestimonials } from '../../Services/externalService';


class Shop extends React.Component {

    state = {
        coverImage: '',
        product: null,
        checkoutTotal: 0,
        disabled: false,
        loginMessage: 'please login to perform this action',
        selection: [{
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }],
        showModal: false,
        message: '',
        testimonials: []
    }


    componentDidMount(){
      
        const id = this.props.match.params.id;
        if(!this.props.currentUser){
            this.setState({
                disabled: true
            })
        }

        getProduct(id).then(response => {
            this.setState({
                product: response.data.data,
                checkoutTotal: response.data.data.price
            })
        }).catch (() => {
            this.props.setAlert(true, 'fail', ["could not get product info, please try again"]);
        })

       getTestimonials().then(response => {
            this.setState({
                testimonials: JSON.parse(response)
            })
        })
        
    }


    displayStars = () => {
        const starsArray = [];
        for(let i=1; i <= 5; i++){
            starsArray.push(<div key={i} className={`star__icon star__icon--${i}`}><StarIcon size={25}/></div>);
        }
        return starsArray;
    }

    displayTestimonialStars = () => {
        const starsArray = [];
        for(let i=1; i <= 5; i++){
            starsArray.push(<div key={i} className={``}><StarIcon size={18} /></div>);
        }
        return starsArray;
    }
    
    onChange = (item) => {
        
        this.setState({ 
            selection: [item.selection],
            checkoutTotal: this.state.product.price
        });
    }

    handleChange = input => event => this.setState({ [input] : event.target.value });

    onBook = (e) => {
        e.preventDefault();
        if(this.state.checkoutTotal){
            this.setState({
                showModal: true
            })
        }
        
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    displayTestimonials = () => {
        if(this.state.testimonials.length !== 0){
            return this.state.testimonials.map((testimonial, index) => {
                if(index < 4){
                    return(
                        <div className="testimonials__card">
                            <img alt="testimonial user" className="testimonials__card--img" src={testimonial.avatar} />
        
                            <p className="testimonials__card--name">{testimonial.name}</p>
        
                            <p className="testimonials__card--testimony">
                                {testimonial.message}
                            </p>
        
                            <div className="testimonials__card--icons">
                                {this.displayTestimonialStars()}
                            </div>
        
                        </div>
        
                    )
                }
            })
        }

        return <></>
    }

    onSendMessage = async(e) => {
        // e.preventDefault();
        // const receiver = this.state.product.user.id;
        // const data = {
        //     sender:receiver,
        //     receiver,
        //     message: this.state.message,
        // }
        
        
    }
    
    render(){

        if(this.state.product){
            const { product } = this.state;
            return(
                <>
                    <div className="product__page">

                    <div className="container">


                        <div className="d-flex mb-4">
                            <div className="product__images">
                                {/* <img className="product__images--cover__img" src={`/images/products/${product.images[0]}`} /> */}
                                <img alt={product.coverImage} className="product__images--cover__img" src={`/images/products/${product.coverImage}`} />
                            </div>

                            <div className="card product__details--right">
                                <div className="heading">
                                    <h3 className="tertiary__heading">{product.name}</h3> 
                                    <div className="underline"></div> 
                                </div>

                                <div className="price__info d-flex flex-column align-items-center justify-content-center">
                                    <div className="price__info--banner">For Rental</div>
                                    <h1 className="price__info--header">${formatNumber(product.price)}</h1>
                                    <div className="discount"><span>Available</span></div>
                                </div>

                                <div>
                                
                                    <DateRange
                                    onChange={this.onChange}
                                    editableDateInputs={true}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    
                                    ranges={this.state.selection}
                                    direction="horizontal"
                                    minDate={new Date()}
                                    />;
                                </div>

                                

                                <button disabled={this.state.disabled} onClick={this.onBook} className="btn product__info--btn">
                                    <span style={{marginRight: '2rem'}}> {this.state.disabled ? this.state.loginMessage : `Book Now`} </span>
                                    <CartIcon stroke="#fff" fill="#fff"/>
                                </button>
                            </div>
                        </div>

                            <div className="lender__info mt-4 mb-4">
                                <div className="heading">
                                    <h3 className="tertiary__heading">Message Lender</h3> 
                                <div className="underline"></div> 
                            </div>
                            <p>Lender's Name: <b>{product.user.name}</b></p>
                            <p>Message:</p>

                            <form action={`mailto:${product.user.email}`} method="post" encType="text/plain" className="review__form">
                                <textarea className="review__form--text" name="message" value={this.state.message} onChange={this.handleChange('message')} rows="6" cols="80" required />
                                <input className="btn primary-btn bg-primary" type="submit" onClick={this.onSendMessage} value={this.state.disabled ? this.state.loginMessage : `Send Message`} disabled={this.state.disabled} />
                            </form>
                       </div>

                        
                        {/* <div className="tab__text">
                            <ul className="product__overview">
                                {this.displayOverview()}
                            </ul>

                            
                        </div> */}
                    

                    <div className="reviews">
                        <div className="heading">
                            <h3 className="tertiary__heading">Ratings and Reviews</h3> 
                            <div className="underline"></div> 
                        </div>

                        <div className="ratings">
                            <div className="ratings__container">
                                <p className="ratings__avg">4.2</p>
                                <div className="rating__icons">
                                    {this.displayStars()}
                                </div>
                            </div>

                            <div className="rating__progress">
                                
                                <div className="rating__progress--empty__bar">
                                    <div className="rating__progress--fill__bar"></div>
                                </div>
                                <div className="rating__progress--empty__bar">
                                    <div className="rating__progress--fill__bar"></div>
                                </div>
                                <div className="rating__progress--empty__bar">
                                    <div className="rating__progress--fill__bar"></div>
                                </div>
                                <div className="rating__progress--empty__bar">
                                    <div className="rating__progress--fill__bar"></div>
                                </div>
                                <div className="rating__progress--empty__bar">
                                    <div className="rating__progress--fill__bar"></div>
                                </div>

                            </div>

                            <div className="rating__numbers">
                                <p>5</p>
                                <p>4</p>
                                <p>3</p>
                                <p>2</p>
                                <p>1</p>
                            </div>
                        </div>

                        <div className="testimonials">
                            {this.displayTestimonials()}
                        </div>

                        <div>

                            {/* <form className="review__form" method="post">
                                <textarea className="review__form--text" rows="10" cols="80" />
                                <input className="btn" type="submit" value="submit" name="testimonail-submit" />
                            </form> */}
                        </div>
                    </div>

                    </div>
                    </div>
                    <Modal show={this.state.showModal} onHide={this.hideModal} dialogClassName={"primaryModal"}>
                        <Modal.Header closeButton>
                            <Modal.Title>Checkout Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CheckoutForm 
                                checkoutTotal={this.state.checkoutTotal}
                                product={this.state.product}
                                setAlert={this.props.setAlert}
                            />
                        </Modal.Body>
                        
                    </Modal>
                
                </>
         )
        }
        else{
            return <div className="loader__container"> 
                <Loader stroke='#6CE7D6' size="100" /> 
            </div>
        }
    }
}

export default Shop;