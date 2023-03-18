import React from 'react'
import '../style/alert.css'

const Alert = (props) => {
    const {alert} = props;
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div>
      {alert && <div id="alertBox">
          <strong>{capitalize(alert.heading)} : </strong>
          <p>{capitalize(alert.msg)}</p>
      </div>}
    </div>
  )
}

export default Alert

