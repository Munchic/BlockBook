import React, { Component } from 'react';
import UserCard from './UserCard/UserCard'
import InfoCard from './InfoCard/InfoCard'

import './Transfer.css'

class Transfer extends Component {
  state = {
    
  
    users: [
      {name: 'yunfan_yang', address: "6d20d182-cb9c-4b74-b0d9-bd841eb9bf93", status: 'validated', credibility: 3.5, history: ["Sent 0.077 BTC to  Abi", "Sent 0.031 BTC to ahmed", "Sent 0.075 BTC to Kevin", "Received 0.007 BTC from ahmed", "Sent 0.1 BTC to sanny", "Received 0.023 BTC from khoi", "Sent 0.046 BTC to rodrig", "Received 0.085 BTC from kevin"]},
      {name: 'yunfan_yang127', address: "7a20d182-c39c-4b74-b0d9-bd841eb9bf87", status: 'validated', credibility: 2.0, history: ["Sent 0.077 BTC to  Abi", "Sent 0.031 BTC to ahmed", "Sent 0.075 BTC to Kevin", "Received 0.007 BTC from ahmed", "Sent 0.1 BTC to sanny", "Received 0.023 BTC from khoi", "Sent 0.046 BTC to rodrig", "Received 0.085 BTC from kevin"]},
      {name: 'yunfan_yang_kao', address: "5620e182-c397-4b74-30d9-bd841eb9bf63", status: 'new', credibility: 1.0},
      {name: 'yunfan_yang127', address: "4620e182-cf97-4b74-30d9-bd841eb9bf63",status: 'validated', credibility: 4.5},
      {name: 'yunfan_yang_kao', address: "4620e1d2-c397-4b74-30d9-bd841eb9bf63",status: 'new', credibility: 0.0, history: ["Sent 0.077 BTC to  Abi", "Received 0.077 BTC from Ahmed"]},
      {name: 'yunfan_yang', address: "9620er82-w397-4b74-30dr-bd841eb9bf63",status: 'validated'},
      {name: 'yunfan_yang168', address: "872ee182-c397-4b74-30d9-bdng1eb94f63",status: 'suspicious', credibility: -1.0, history: ["Sent 0.158 BTC to  Abi", "Received 0.077 BTC from Ahmed", "Received 0.097 BTC from Ahmed", "Received 0.057 BTC from Ahmed"]},
      {name: 'yunfan_yang_kao', address: "4620e182-c397-4b74-30d9-bd8r1eb9bf75",status: 'new'},
      {name: 'yunfan_yang', address: "9220e182-c397-4b74-30d9-bd841eb9bf68",status: 'validated'},
      {name: 'yunfan_yang_kao', address: "4e2r2182-t397-4674-30d9-bd841eb9bf66",status: 'suspicious', credibility: -3.5, history: ["Sent 0.158 BTC to  Abi", "Received 0.177 BTC from Sanny", "Received 0.077 BTC from Khoi", "Received 0.077 BTC from Ahmed", "Received 0.067 BTC from Ahmed", "Received 0.077 BTC from Ahmed", "Received 0.097 BTC from Ahmed", "Received 0.057 BTC from Ahmed"]},
      {name: 'yunfan_yang_kao', address: "4650ey82-c397-4b74-30d9-bd841eb9bf63",status: 'new'},
      {name: 'yunfan_yang', address: "e640e182-t3237-4b74-30d9-bd841eb9bf63",status: 'validated'}],
    
    info: null,
    sendConfirm: null
  }

  renderInfoHandler = (info) => {
    this.setState({
      info: info
    })
  }

  closeInfoHandler = () => {
    this.setState({
      info: null,
      sendConfirm: null
    })
  }

  sendConfirmHandler = () => {
    this.setState({
      sendConfirm: 'Hellu'
    })
  }

  render() {
    return (
      <div className="Transfer">
        <input className="SearchField" placeholder="Enter username or wallet address" value="yunfan_yang" />
        <h1>Here are some search results:</h1>
        <div className="Users">
          {this.state.users.map(user =>
            <UserCard username={user.name} status={user.status} address={user.address} viewInfo={() => this.renderInfoHandler(user)} send={() => this.sendConfirmHandler()} />
          )}
        </div>

        {this.state.info == null ? null :
          <div className="InfoPopup">
            <div className="Backdrop" onClick={this.closeInfoHandler} />
            <InfoCard info={this.state.info} />
          </div>
        }

        {this.state.sendConfirm == null ? null :
          <div className="InfoPopup">
            <div className="Backdrop" onClick={this.closeInfoHandler} />
            <div className="ConfirmForm">
              <p>You are sending 0.077 BTC to yunfan_yang (credibility score: 3.5)</p>
              <button onClick={this.closeInfoHandler} className="btn">Confirm</button>
              <button onClick={this.closeInfoHandler} className="btn">Decline</button>
            </div>
          </div>
        }
      </div>
    )
  } 
}

export default Transfer