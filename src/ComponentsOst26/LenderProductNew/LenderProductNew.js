import React from 'react';
import LenderSideNav from '../LenderSideNav/LenderSideNav';
import { createMyProduct } from '../../Services/productService';

class LenderDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      images: [],
      name: '',
      price: '',
      quantity: '',
      description: ''
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      images: this.state.images.concat(picture),
    });
  }

   onSubmit = async(e) => {
    e.preventDefault();

    createMyProduct(this.state).then(response => {
      this.props.setAlert(true, 'success', [`Successfully created product`]);
      this.props.history.push('/lender/dashboard/products');
    }).catch (() => {
      this.props.setAlert(true, 'fail', ["could not create product, please try again"]);
    });

  }

  handleChange = input => event => this.setState({ [input] : event.target.value });


  render(){

    return (
      <>
        <div className="d-flex" id="wrapper">

          <LenderSideNav/>

          <div className="container">
            <div className="card">
              <div className="card-header">Add Product</div>
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
                <textarea className="review__form--text" id="description" value={this.state.description} rows="6" cols="80" spellCheck="false" onChange={this.handleChange('description')}></textarea>
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

export default LenderDashboard;
