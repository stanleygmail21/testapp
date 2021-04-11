import React from 'react';
import LenderSideNav from '../LenderSideNav/LenderSideNav';
import { getMyProduct, updateMyProduct } from '../../Services/productService';

class LenderProductEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      price: '',
      quantity: '',
      description: ''
    };
  }

  componentDidMount = async() => {
    const {match} = this.props;

    getMyProduct(match.params.id).then(response => {
      const product = response.data.data
      const { name, price, quantity, description} = product
      this.setState({ name, price, quantity, description})
    }).catch (() => {
      this.props.setAlert(true, 'fail', ["could not get product info, please try again"]);
    })

  }


   onSubmit = async(e) => {
    e.preventDefault();
    const {match} = this.props;
    updateMyProduct(match.params.id, this.state).then(() => {
      this.props.setAlert(true, 'success', [`Successfully updated`]);
    }).catch(() => {
      this.props.setAlert(true, 'fail', [`Could not update product`]);
    })

  }

  handleChange = input => event => this.setState({ [input] : event.target.value });


  render(){

    return (
      <>
        <div className="d-flex" id="wrapper">

          <LenderSideNav/>
          <div className="container">
            <div className="card">
              <div className="card-header">Edit Product</div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter product name" value={this.state.name} onChange={this.handleChange('name')} />
                </div>

                <div className="form-group">
                  <label htmlFor="price">price</label>
                  <input type="number" className="form-control" id="price" placeholder="Enter product price" value={this.state.price} onChange={this.handleChange('price')} />
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">quantity</label>
                  <input type="number" className="form-control" id="quantity" placeholder="Enter product quantity" value={this.state.quantity} onChange={this.handleChange('quantity')} />
                </div>

                <div className="form-group d-flex flex-column">
                  <label htmlFor="description">description</label>
                  <textarea className="review__form--text" id="description" rows="6" cols="80" spellCheck="false" onChange={this.handleChange('description')} value={this.state.description} />
                </div>

                
                <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
              </form>
                
            </div>
            
          </div>
        </div>

      </>
    );
  }
}

export default LenderProductEdit;
