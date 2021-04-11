import React from 'react';
import { Link } from 'react-router-dom';
// import './LenderDashboard.css';

class LenderSideNav extends React.Component {

  Onlogout = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  }

  render(){
    return (
        <div className="bg-dark border-right" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
            <Link to="/lender/dashboard" className="list-group-item list-group-item-action bg-dark">Dashboard</Link>
            <Link to="/lender/dashboard/products" className="list-group-item list-group-item-action bg-dark">Products</Link>
            <Link to="/lender/dashboard/withdrawal" className="list-group-item list-group-item-action bg-dark">Withdrawal</Link>
            <Link to="#" onClick={this.Onlogout} className="list-group-item list-group-item-action bg-dark">Log out</Link>
        </div>
        </div>
    );
  }
}

export default LenderSideNav;
