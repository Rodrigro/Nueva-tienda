import React from 'react'
import "./Cart.css"
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';


function Cart() {

  const { prueba } = useContext(CartContext);

  return (
    <div className='estilo'>
        <h1 className='h1'>gracias por tu compra</h1>

        <button onClick={prueba}>Click</button>
    </div>
  )
}
export default Cart;