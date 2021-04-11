import React from 'react';


const CartIcon = (props) => {

    return(
        <div onClick={props.showCart} 
        
        className="cart" style={{zIndex: `${props.zIndex}`}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25.341" height="23.89" viewBox="0 0 25.341 23.89">
                <path className={props.className} d="M8.8,21.312a2.293,2.293,0,1,0,0,4.578,2.293,2.293,0,1,0,0-4.578ZM1.5,3V5.289H3.934l4.381,8.687-1.643,2.8a2.111,2.111,0,0,0-.3,1.1A2.372,2.372,0,0,0,8.8,20.167h14.6V17.878H9.314a.293.293,0,0,1-.3-.286l.037-.137,1.1-1.866h9.067a2.45,2.45,0,0,0,2.13-1.179L25.7,6.983a1.066,1.066,0,0,0,.146-.549,1.186,1.186,0,0,0-1.217-1.144h-18L5.48,3ZM20.973,21.312A2.293,2.293,0,1,0,23.407,23.6,2.361,2.361,0,0,0,20.973,21.312Z" transform="translate(-1 -2.5)" fill={props.fill} stroke={props.stroke} strokeWidth="1"/>
            
            </svg>
            {props.children}
        </div>
    )
}

export default CartIcon;