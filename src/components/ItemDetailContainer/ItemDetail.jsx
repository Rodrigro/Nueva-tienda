import React from 'react'
import "./detalle.css"
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({item}) {
  return (
    <div className='detalle-producto'>
        <img src={item.imgurl} alt="Logo" className='portada-producto'/>        
        <section><h1>{item.product}</h1>
        <h2>{item.resumen}</h2>
        <h3 class="boton-agregar1">${item.price}</h3>
        <div class="boton-agregar1">
        <ItemCount stock={item.stock} initial={0}/>
        </div>
        </section>
    </div>
  )
}

export default ItemDetail;