import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
  const {all_products,cartitems,removeFromCart}=useContext(ShopContext)
    return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            <div className="classitems-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{e.newprice}</p>
                <button className='Cartitmes-quantity'>{cartitems[e.id]}</button>
                <p>{e.newprice*cartitems[e.id]}</p>
                <img src={removeFromCart} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
            {all_products.map((e)=>{
                if (cartitems[e.id]>0) {
                    return 
                }
            })}
        </div>

    </div>
  )
}
