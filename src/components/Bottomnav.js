import React from 'react'

function Bottomnav() {
  return (
    <div className="bottomnavWrapper">
      <div className="bottomnav">
        <button className='bottomNavStart'>Match Details</button>
        <button>Standings</button>
        <button className='bottomNavEnd'>Live Match</button>
      </div>
    </div>
  );
}

export default Bottomnav