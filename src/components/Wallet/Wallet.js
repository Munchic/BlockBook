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