import React from 'react'
import './InfoCard.css'

const infoCard = (props) => {
  const user = props.info

  return (
    <div className="InfoCard">
      <div className="PersonalInfo">
        <img src={require(`../../../../assets/users/${user.name}.jpg`)} className="ProfilePic" />
        <h3>{user.name}</h3>
        <p>User since 05/04/18</p>
      </div>

      <div className="Credibility">
        <h1>Credibility</h1>
        <div className="CredibilityScale">
          <h3>Score: {user.credibility}</h3>
          <img src={require(`../../../../assets/credibilityScale/credibilityScale.png`)} className="Scale" />
          <img src={require(`../../../../assets/credibilityScale/pointer.png`)} className="Pointer" style={{ marginLeft: `${(user.credibility)*1.075+5.6}cm` }} />
        </div>

        <h1>＿</h1>
        <h1>Transactions history</h1>
        <div className="Transactions">
          { user.history.map(transaction =>
            <p>{transaction}</p>
          )}
        </div>

      </div>
    </div>
  )
}

export default infoCard