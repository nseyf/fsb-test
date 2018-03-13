import React from 'react';

const Counter = (props) => {
  const { itemsClicked } = props;
  
  // Counter component receives data from 
  // the parent App component and is
  // re-rendered to reflect changes.
  
  return (
    <div className="bet-slip-display">
    <div className="bet-slip-number">
        {`${itemsClicked.length}/4`}
    </div>
    <div className="bet-slip-heading">
    <p>BET SLIP</p>
    </div>
    </div>
  )
}


export default Counter;