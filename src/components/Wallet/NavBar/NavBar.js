import React from 'react'
import './NavBar.css'

const navBar = (props) => {
  return (
    <div className="NavBar">
      <img src={require(`../../../assets/logo/logo.png`)} className="Logo" />
      <div className="Menu">
        <h3 onClick={props.dashboard}>Dashboard</h3>
        <h3 onClick={props.transfer}>Send/Request</h3>
        <h3 onClick={props.history}>History</h3>
        <h3 onClick={props.settings}>Settings</h3>
      </div>
     
    </div>
  )
}

export default navBar