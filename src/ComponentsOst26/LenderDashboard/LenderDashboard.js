import React from 'react';
import ColoredCard from '../ColoredCard/ColoredCard';
import formatNumber from '../functions/formatNumber';
import LenderSideNav from '../LenderSideNav/LenderSideNav';
import { getMyBookings } from '../../Services/bookingService';
import './LenderDashboard.css';

class LenderDashboard extends React.Component {

  state={
    bookings: []
  }

  componentDidMount(){
    getMyBookings().then(response => {
      this.setState({
        bookings: response.data.data
      })
    });
  }

  displayBookings = () => {
    const {bookings}  = this.state;
    if(bookings.length !== 0){
      return bookings.map(booking => {
        return(
          <tr>
            <th scope="row">{booking._id}</th>
            <td>{booking.product.name}</td>
            <td>${formatNumber(booking.price)}</td>
            <td>{booking.createdAt}</td>
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

          <LenderSideNav
            history={this.props.history}
          />

          <div className="container">
            <div id="stats">
            <div className="card-group">
              <ColoredCard 
                main='H'
                sub='Users'
                className='bg-primary'
              />

              <ColoredCard 
                main='E'
                sub='Users'
                className='bg-warning'
              />
              
              <ColoredCard 
                main='L'
                sub='Users'
                className='bg-success'
              />

              <ColoredCard 
                main='L'
                sub='Users'
                className='bg-danger'
              />
              
              <ColoredCard 
                main='O'
                sub='Users'
                className='bg-warning'
              />
              
              </div>
            </div>

            <div className="card">
              <h1>My Bookings</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Created At</th>
                </tr>
              </thead>
              <tbody>
                
                {this.displayBookings()}
              </tbody>
            </table>
            </div>
        
          </div>
          
        </div>

      </>
    );
  }
}

export default LenderDashboard;
