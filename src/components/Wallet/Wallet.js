import React, { Component } from 'react';
import NavBar from './NavBar/NavBar'
import Dashboard from './Dashboard/Dashboard'
import Transfer from './Transfer/Transfer'
import './Wallet.css'

class Wallet extends Component {
  state = {
    screen: 'dashboard'
  }

  screens = [
    'dashboard',
    'tranfer',
    'history',
    'settings'
  ]

  dashboardTriggerHandler = () => {
    this.setState({
      screen: 'dashboard'
    })
  }

  transferTriggerHandler = () => {
    this.setState({
      screen: 'transfer'
    })
  }

  clientAuthorization = () => {
    var Client = require('coinbase').Client;
    var client = new Client({
      'apiKey': 'inumYyqyVAtIfQcc',
      'apiSecret': '9aqR7h88uyPZRvTJRuGlEVQomCKYLCfi',
      'version':'2018-04-08'
    });

    client.getAccounts({}, function(err, accounts) {
      accounts.forEach(function(acct) {
        console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
        acct.getTransactions(null, function(err, txns) {
          txns.forEach(function(txn) {
            console.log('txn: ' + txn.id);
          });
        });
      });
    });
  }

  render() {
    return (
      <div className="Wallet">
        <NavBar screens={this.screens} dashboard={this.dashboardTriggerHandler} transfer={this.transferTriggerHandler} />
        { this.state.screen == 'dashboard' ? <Dashboard /> : null}
        { this.state.screen == 'transfer' ? <Transfer /> : null}
      </div>
    );
  }
}

export default Wallet