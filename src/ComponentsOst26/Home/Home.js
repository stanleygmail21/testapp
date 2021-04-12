import React from 'react';
import { withRouter } from 'react-router-dom';

import Banner from '../Banner/Banner';
import Product from '../Product/Product';
// import Tab from "./Tab";
import Loader from '../icons/Loader';
import { getProducts } from '../../Services/productService';
// import Pagination from './Pagination';

class Home extends React.Component {
  state = {
    products: [],
    page: 1,
    linkSkip: 1,
    featuredProducts: 8,
    linkNumber: 1
  }

  mount = false;

  componentDidMount(){

    this.mount = true
    getProducts().then(response => {
      if(this.mount){
        this.setState({
          products: response.data.data
        });
      }
    }).catch(error => {
      this.props.setAlert(true, 'fail', ["could not get products, please try again"])
    });

  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.products !== this.state.products){
      if(this.props.error) this.props.setAlert(true, 'fail', ["could not get product info, please try again"]);
    }
  }

  componentWillUnmount = () => {
    this.mount = false
  }

  checkWishlist = (product) => {
    if(this.state.wishList && this.state.wishList.length !== 0){
      return this.state.wishList.find(cur => cur._id === product._id);
    }
  }

  listProducts = () => {
    if(!this.state.products || this.state.products.length === 0){
      return <div className="loader__container"> 
        <Loader stroke='#6CE7D6' size="100" /> 
      </div>
    }
    let products = [];
    for(let i=0; i <= this.state.products.length-1; i++){
      products.push(
      <React.Fragment key={i} >
        <Product
          product={this.state.products[i]} 
          onLikeProduct={this.props.onLikeProduct} 
          onDislikeProduct={this.props.onDislikeProduct} 
          onAddToCart={this.props.onAddToCart}
          onClearCart={this.props.onClearCart}
          fill = {this.checkWishlist(this.state.products[i]) ? "#6CE7D6" : "none"}
        />
      </React.Fragment>)
    }

    return products;
  }

  render(){
    return (
      <React.Fragment>
              
        <Banner/>

        <section id="product">
          <div className="container">

            
            <div className="sort__products">
              {/* <Tab/> */}
            </div>

            <div className="product__list">
              {this.listProducts()}
            </div>

            {/* <Pagination
              page = {this.state.page}
              linkSkip = {this.state.linkSkip}
              linkNumber={this.state.linkNumber}
            /> */}
            
          </div>
        </section>
        
      </React.Fragment>
    )
  }
  
  
}


export default withRouter(Home);