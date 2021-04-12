import React from 'react';
import {Link} from 'react-router-dom';
import ColoredCard from '../ColoredCard/ColoredCard';
import formatNumber from '../functions/formatNumber';
import { getMyBookings } from '../../Services/bookingService';

import './RenterDashboard.css';


class RenterDashboard extends React.Component {

  state={
    bookings: []
  }

  componentDidMount(){
    getMyBookings().then(response => {
      this.setState({
        bookings: response.data.data
      })
    })
  }

  displayBookings = () => {
    const {bookings}  = this.state;
    if(bookings.length !== 0){
      return bookings.map(booking => {
        return(
          <tr>
            <th scope="row">{booking.id}</th>
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

          <div className="bg-dark border-right" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
              <Link to="#" className="list-group-item list-group-item-action bg-dark">Dashboard</Link>
            </div>
          </div>

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

export default RenterDashboard;
