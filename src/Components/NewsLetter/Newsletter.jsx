import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to out newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email ID' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
