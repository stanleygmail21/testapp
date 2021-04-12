import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './ComponentsOst26/functions/history';
import './App.css';

import Header from './ComponentsOst26/Header/Header';
import Alert from './ComponentsOst26/Alert/Alert';

import Home from './ComponentsOst26/Home/Home';
import Login from './ComponentsOst26/Login/Login';
import Register from './ComponentsOst26/Register/Register';
import ProductShow from './ComponentsOst26/ProductShow/ProductShow';
import RenterDashboard from './ComponentsOst26/RenterDashboard/RenterDashboard';
import LenderProductList from './ComponentsOst26/LenderProductList/LenderProductList';
import LenderProductNew from './ComponentsOst26/LenderProductNew/LenderProductNew';
import LenderProductEdit from './ComponentsOst26/LenderProductEdit/LenderProductEdit';
import LenderWithdraw from './ComponentsOst26/LenderWithdraw/LenderWithdraw';

class App extends React.Component {

  state={
    products: [], 
    alert: {status: false, type: '', message:[]},
    page: 1,
    linkSkip: 1,
    currentUser: null,
    token: sessionStorage.getItem('auth')
  }

  setAlert = (status, type='', message='') => {
    this.setState({
        alert:{ status, type, message }
    });
  }

  getUser = async (user) => {
    this.setState({
      currentUser: user
    })
  }

  render(){
    return (
      <React.Fragment>
        <Router history={history}>
          <div>
          <Header 
            currentUser={this.state.currentUser} 
            getUser={this.getUser} 
            logout = {this.logout}
          />
            <Switch>
              <Route path="/" exact component={props => <Home 
                  onAddToCart={this.onAddToCart}
                  wishlist={JSON.parse(sessionStorage.getItem('wishList'))}
                  {...props}
                />}
              />

              <Route path="/login" exact component={props => <Login 
                  setAlert={this.setAlert}
                  token={this.state.token}
                  {...props}
                />}
              />

              <Route path="/register" exact component={props => <Register 
                  setAlert={this.setAlert}
                  {...props}
                />}
              />

              <Route path="/renter/dashboard" exact component={props => <RenterDashboard 
                  setAlert={this.setAlert}
                  {...props}
                />}
              />

              <Route path="/lender/dashboard" exact component={props => <LenderProductList 
                  setAlert={this.setAlert}
                  {...props}
                />}
              />

              <Route path="/lender/dashboard/withdrawal" exact component={props => <LenderWithdraw 
                  setAlert={this.setAlert}
                  getUser={this.getUser} 
                  currentUser={this.state.currentUser} 
                  {...props}
                />}
              />

              <Route path="/lender/dashboard/products" exact component={props => <LenderProductList 
                  setAlert={this.setAlert}
                  {...props}
                />}
              />

                <Route path="/lender/dashboard/products/add" exact component={props => <LenderProductNew 
                    setAlert={this.setAlert}
                    {...props}
                  />}
                />

                <Route path="/lender/dashboard/products/edit/:id" exact component={props => <LenderProductEdit 
                  setAlert={this.setAlert}
                    {...props}
                  />}
                />

              <Route path="/shop/:id" exact component={props => <ProductShow 
                setAlert={this.setAlert}
                currentUser={this.state.currentUser} 
                {...props}
                />}
              />
              
              {/* <Route path="*" exact component={NotFound} /> */}
            </Switch>
            <Alert
              alert={this.state.alert}
              setAlert={this.setAlert}
            /> 
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
