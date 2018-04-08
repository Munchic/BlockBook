import React from 'react'
import './UserCard.css'

const userCard = (props) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  return (
    <div className="UserCard">
      

      <img src={require(`../../../../assets/trustworthiness/${props.status}.png`)} className="Status" />
      <p>{props.username}</p>
      <p id="subtext">{props.address}</p>

      
      <input className="Amount" placeholder="Enter amount" type="number" min="0.0001" step="0.0001" max="50" />

      <p id="subtext">Bitcoins (BTC)</p>

      <div className="Options">
        <div className="Button" onClick={props.viewInfo}>
          <p>View info</p>
        </div>
        <div className="Button" onClick={props.send}>
          <p>Send</p>
        </div>
      </div>
    </div>
  )
}

export default userCard