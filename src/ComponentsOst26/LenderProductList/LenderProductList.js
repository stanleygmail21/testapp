import React from 'react';
import {Link} from 'react-router-dom';
import formatNumber from '../functions/formatNumber';
import LenderSideNav from '../LenderSideNav/LenderSideNav';
import { getMyProducts, deleteMyProduct } from '../../Services/productService';

class LenderProductList extends React.Component {

  state={
    products: []
  }

  mount = false

  componentDidMount(){
    
    this.mount = true
    getMyProducts().then(response => {
      if(this.mount){
        this.setState({
          products: response.data.data
        })
      }
    })
  }

  componentWillUnmount = () => {
    this.mount = false
  }

  onDelete = async(e) => {
    const id = e.target.getAttribute('data-id')
    deleteMyProduct(id).then(() => {
    })
    window.location.reload()

  }

  displayproducts = () => {
    const {products}  = this.state;
    if(products.length !== 0){
      return products.map(product => {
        return(
          <tr key={product._id}>
            <th scope="row">{product._id}</th>
            <td>{product.name}</td>
            <td>${formatNumber(product.price)}</td>
            <td>{product.createdAt}</td>
            <td>
                <Link to={`/lender/dashboard/products/edit/${product._id}`} className="mr-4"><button>edit</button></Link>
                <Link to="#"><button data-id={product._id} onClick={this.onDelete}>delete</button></Link>
            </td>
          </tr>
        )
      })
    }
    return <tr className="alert-primary"><td>No data</td></tr>
  }

  render(){

    return (
      <>
        <div className="d-flex" id="wrapper">

            <LenderSideNav/>

          <div className="container">
            <div className="card d-flex">
              <h1>My products</h1>
              <Link to='/lender/dashboard/products/add' className="btn bg-primary"><h4>CREATE NEW PRODUCT</h4> </Link>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                
                {this.displayproducts()}
              </tbody>
            </table>
            </div>
        
          </div>
          
        </div>

      </>
    );
  }
}

export default LenderProductList;
