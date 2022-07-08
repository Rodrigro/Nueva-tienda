import React from 'react'
import "./detalle.css"
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext} from "react";


function ItemDetail({item}) {
  const [añadirAlCarrito, setAñadirAlCarrito] = useState(false);
  const [cant, setCant] = useState(0)
  const { addToCart } = useContext(CartContext);
  


  
    function handleOnAdd(cantidad){
        setCant(cantidad)
        setAñadirAlCarrito(true);
        addToCart(item, cantidad);
      }
  
  
  return (
    <div className='detalle-producto'>
        <img src={item.thumbnailUrl} alt="Logo" className='portada-producto'/>        
        <section>
        <h1>{item.product}</h1>
        <h2>{item.resumen}</h2>
        <h3 class="boton-agregar1">${item.price}</h3>
        <div class="boton-agregar1">
        {
          añadirAlCarrito === false ? <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd}/> : <Link to="/Cart"><button className='boton-agregar'>Terminar mi compra</button></Link>
        }
        </div>
        </section>
    </div>
  )
}


export default ItemDetail;


