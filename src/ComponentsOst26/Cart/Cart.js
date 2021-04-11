import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import _ from "lodash";

import CartIcon from '../icons/CartIcon';
import CloseIcon from '../icons/CloseIcon';
import formatNumber from "../functions/formatNumber";



const Cart = (props) => {
    const [items, setItems] = useState([]);
    const [cartBackground, setCartBackground] = useState('');
    const [zIndex, setzIndex] = useState(11);
    const [subTotal, setSubTotal] = useState(0);
    const [visible, setVisible] = useState('');
    const [cartCloseIcon, setCartCloseIcon] = useState('');
    
    useEffect(() => {
        setItems( items => _.cloneDeep(props.cart));
    }, [props.cart]);

    useEffect(() => {
        let total = 0;
        items.forEach(cur => {
            total += cur.price * 1;
        });
        setSubTotal(total);
    }, [items]);


    const showCart = (e) => {
        e.preventDefault();
        setVisible('visible');
        setCartBackground('navigation__background--visible');
        setzIndex(1);
        setCartCloseIcon('cart__close--visible');
    }

    const hideCart = () => {
        setzIndex(11);
        setVisible('');
        setCartBackground('');
        setCartCloseIcon('');
    }

    const updateCartQuantity  = (e, index) => {
        // const input = [...items];
        // input[index].quantity = e.target.value *1;
        // input[index].price = input[index].quantity * input[index].currentPrice * 1;
        // setItems(input);
        // props.onUpdateCart( items);
        props.onUpdateCartQuantity(e, index);
    }

    const onRemoveFromCart  = (e, index) => {
        props.onRemoveFromCart(e, index);
    }

    const onClearCart  = () => {
        props.onClearCart(); 
    }

    const options = () => {
        let optionsArray = [];
        for(let i = 0; i <10; i++){
            optionsArray.push(<option key={i} value={i+1} >{i+1}</option>);
        }

        return optionsArray;
    }

    const displayItems = () => {
        let i = 0;
        return items.map( (cur, index) => {
            return (
                <tr key={index}>
                   <td className="table__data">
                       <img className="cart__item--img" src={`/images/products/${cur.coverImage}`} />
                    </td>

                    <td className="table__data">
                        <Link to={`shop/${cur.name.split(' ').join('-')}`} className="cart__item--name">{cur.name}</Link>
                    </td>

                    <td className="table__data">
                        <div className="cart__item--price">₦{formatNumber(cur.currentPrice)}</div>
                    </td>

                    <td className="table__data">
                        <select value={cur.quantity} onChange={(e) => updateCartQuantity(e, index)}  className="cart__item--quantity" >
                            {options()}
                        </select>
                    </td>

                    <td className="table__data">
                        <div className="cart__item--price">₦{formatNumber(cur.price)}</div>
                    </td>
                        
                    <td className="table__data">
                        <div className="cart__action" onClick={(e) => onRemoveFromCart(e, index)}>
                            <CloseIcon size={15} fill="red"/>
                        </div>
                    </td>
                </tr>
                
            )
        })
    }

    const displayCartButtons = () => {
        if(items.length !== 0){
            return(
                <React.Fragment>
                   <Link to="/shop/checkout" onClick={hideCart} className="cart__item--btn btn__simple btn__hollow ">proceed to check out</Link>
                    {/* <button onClick={onClearCart} className="cart__item--btn btn__simple btn__hollow ">clear cart</button> */}
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    <button onClick={hideCart} className="cart__item--btn btn__simple btn__hollow ">continue shopping</button>
                </React.Fragment>
            )
        }
    }

    return(
        
        <div className="mg custom__badge ">
            <div className="navigation">
                <label htmlFor="navi-toggle" className="navigation__button">
                    {/* <span className="navigation__icon">&nbsp;</span> */}
                    <CartIcon stroke="#fff" fill="none" showCart={showCart} className="cart__icon" zIndex={zIndex}>
                        <div className="badge__number">{items.length}</div>
                    </CartIcon>
                    <div className={`navigation__background ${cartBackground}`}>&nbsp;</div>

                    <div className={`cart__close ${cartCloseIcon}`} onClick={hideCart}>
                        <CloseIcon size={25} fill="#000"/>
                    </div>
                    
                </label>

                
                
                <nav className={`navigation__nav ${visible}`}>
                <div className="heading">
                    <h1 className="primary__heading">shopping cart</h1>
                    <div className="underline"></div> 
                </div>
                {items.length !== 0 ? 
                    <div className="cart__list">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table__head">product</th>
                                    <th className="table__head">name</th>
                                    <th className="table__head">unit price</th>
                                    <th className="table__head">quantity</th>
                                    <th className="table__head">amount</th>
                                </tr>
                            </thead>

                            <tbody>
                            {displayItems()}
                            </tbody>
                        </table>

                </div>

                
                : <div style={{fontSize: '1.8rem', padding: '8rem 0', textTransform: 'capitalize'}}>your cart is currently empty</div>}
                

                <div className="cart__bottom">
                    <div className="sub__total">
                        <p>Sub total:</p>
                        <p>₦{formatNumber(subTotal)}</p>
                    </div>

                    {displayCartButtons()}
                </div>

                </nav>
                
                
            </div>

            
            
           
            
        </div>
        
    )
}

export default Cart;