import React from "react";
import { Link } from "react-router-dom";

import formatNumber from "../functions/formatNumber";

const Product = (props) => {
    return(
        <Link className="product__card" to={`/shop/${props.product._id}`}>   
            <div id={props.product.id}>
                <div className="product__card--title">
                    <div className="product__card--title__main">
                        <span className="product__card--make"></span>
                    
                    </div>
                    <div className="product__card--title__sub">
                    
                        <span className="product__card--name">{props.product.name}</span>
                    
                    </div>
                </div>

                <div className="product__card--body">
                    <div className="product__card--body__main">
                        <img className="product__image" src={`/images/products/${props.product.coverImage}`} alt={props.product.coverImage} />
                    </div>

                    {props.product.user && <div className="discount">
                        <span>lender: {props.product.user.name}</span>
                    </div>}

                    <div className="product__card--body__sub">
                        <span className="product__card--current__price">${formatNumber(props.product.price)}</span>
                    </div>
                </div>

            </div>
        </Link>
                    
    )
}

export default Product;