import React from 'react';
import LenderSideNav from '../LenderSideNav/LenderSideNav';
import { 
  FaWallet
} from "react-icons/fa";
import withdraw from '../../Services/withdrawService';

class LenderWithdraw extends React.Component {

  state = { 
    amount: '',
    disabled: false
  };

  componentDidMount(){
    if(this.props.currentUser && this.props.currentUser.wallet === 0){
      this.setState({
        disabled: true
      })
    }
  }

   onSubmit = async(e) => {
    e.preventDefault();

    if(this.props.currentUser.wallet <= 0){
      this.props.setAlert(true, 'fail', [`Sorry balance is 0`]);
      return;
    }

    else if(this.state.amount < 50 ){
      this.props.setAlert(true, 'fail', [`Sorry the minimum amount you can withdraw is $50`]);
      return;
    }

    else if(this.state.amount > this.props.currentUser.wallet){
      this.props.setAlert(true, 'fail', [`Sorry can not withdraw an amount greater than your balance`]);
      return;
    }

    const data = {amount: this.state.amount};

    withdraw(data).then(response => {
      this.props.setAlert(true, 'success', [`Withdrawal was placed successfully, you will receive your funds shortly.`]);
      this.props.getUser(response.data)
    })

    }

    handleChange = event => this.setState({ amount : event.target.value });


  render(){
    if(this.props.currentUser){
      return (
        <>
          <div className="d-flex" id="wrapper">
  
            <LenderSideNav/>
            <div className="container">
              <div className="card">  
                <div className='card-header'>
                <FaWallet/> Wallet: ${this.props.currentUser.wallet}
              </div>
  
                <form className="form-vertical mt-4">
                  <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control mb-4" id="amount" placeholder="Enter amount" name="amount" value={this.state.amount} onChange={this.handleChange} max={this.props.currentUser.wallet} />
                  </div>
                  <button type="submit" onClick={this.onSubmit} className="btn btn-primary" disabled={this.state.disabled} >Withdraw</button>
                </form>
              
              </div>
            </div>
          </div>
  
        </>
      );
    }
    return <></>
  }
}

export default LenderWithdraw;
