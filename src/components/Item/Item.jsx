import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./item.css"
import { Link } from 'react-router-dom';


export const Item = ({item, stock}) => {
    const urlDetalle= `/detalle/${item.id}`
    return (
        <div class="cards">
            <img src={item.imgurl} alt="Logo" />
            <h3>{item.product}</h3>
            <h4>${item.price}</h4>
            <Link to={urlDetalle} class="ver-detalle">Ver Detalle</Link>
            <ItemCount stock={item.stock} initial={0} />
        </div>
    )
} 

export default Item;