import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>E-commerce is the buying and selling of goods and services over the internet.
        It is conducted over computers, tablets, smartphones, and other smart devices.
        Almost anything can be purchased through e-commerce today, which makes e-commerce highly competitive.
        It can be a substitute for brick-and-mortar stores, though some businesses choose to maintain both.
        </p>
        <p>
        It is conducted over computers, tablets, smartphones, and other smart devices.
        Almost anything can be purchased through e-commerce today, which makes e-commerce highly competitive.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
