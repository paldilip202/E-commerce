import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />


      {/* ----------------------------------------------------------------------------------------------- */}
      
      {/* {all_product.map((e) =>{
        if(cartItems[e.id] > 0)
        {
             
             return <div>

                 <div className='cartitems-format'>
                 <img src={e.image} alt='' className='carticon-product-icon' />
                 <p>{e.name}</p>
                 <p>Rs{e.new_price}</p>
                 <button className='cartitems-quantiy'>{cartItems[e.id]}</button>
                 <p>{e.new_price*cartItems[e.id]}</p>
                 <img src={remove_icon} onClick = { () => {removeFromCart(e.id)}}  alt='' />
                 </div>
                 <hr />
             </div>
            
        }
      })} */}


       {/* -------------------------------------------------------------------------------------------- */ }

    {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
    return (
      <div key={e.id}>
        <div className='cartitems-format cartitems-format-main'>
          <img src={e.image} alt='' className='carticon-product-icon' />
          <p>{e.name}</p>
          <p>Rs{e.new_price}</p>
          <button className='cartitems-quantiy'>{cartItems[e.id]}</button>
          <p>Rs.{e.new_price * cartItems[e.id]}</p>
          <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt='' />
        </div>
        <hr />
      </div>
    );
  }
  return null; // Return null for items that don't meet the condition
})}

  <div className='cartitems-down'>
    <div className='cartitems-total'>
      <h1>Cart Totals</h1>
      <div>
        <div className='cartitems-total-item'>
          <p>Subtatal</p>
          <p>Rs.{getTotalCartAmount()}</p>
        </div>
        <hr />

        <div className='cartitems-total-item'>
          <p>Shipping FEE</p>
          <p>FREE</p>
        </div>
        <hr />

        <div className='cartitems-total-item'>
          <p>Total</p>
          <p>Rs.{getTotalCartAmount()}</p>
        </div>
        <hr />

      </div>
      <button>PROCEED TO CHECKOUT</button>
    </div>

    <div className='cartitems-promocode'>
      <p>If You have a promo code, Enter it here</p>
      <div className='cartitems-promobox'>
        <input type='text' placeholder='PROMO CODE' />
        <button>Submit</button>
      </div>
    </div>


  </div>

    </div>
  )
}

export default CartItem
