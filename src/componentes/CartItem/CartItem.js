import React from 'react'
import './CartItem.css'

const CartItem = ({ id, name, img, price, quantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{name}</h3>
       
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <div className="cart-item-actions">
        <button>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem