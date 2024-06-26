import React from 'react'
import './Breadcrum.css'
import arow_icon from'../Assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {
  const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src={arow_icon} alt="" />SHOP <img src={arow_icon} alt="" />{product.category} <img src={arow_icon} alt="" />{product.name} 
    </div>
  )
}
