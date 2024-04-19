import React from 'react'
import './Newletter.css'

const Newletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subcribe to our newletter and stay updated</p>
      <div>
        <input type='email' placeholder='YOUR EMAIL ID' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newletter
