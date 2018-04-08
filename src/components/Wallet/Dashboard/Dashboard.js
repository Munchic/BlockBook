import React from 'react'
import './Dashboard.css'

const dashboard = (props) => {
  return (
    <div className="Dashboard">
      <h1>Welcome back, Khoi! Here's the summary for today.</h1>
      <img src={require('../../../assets/dashboard/balance.png')} className="Balance" />
      <img src={require('../../../assets/dashboard/dashboard.png')} className="Dynamics" />
    </div>
  )
}

export default dashboard