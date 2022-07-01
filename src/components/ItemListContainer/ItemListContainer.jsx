import ItemList from "../ItemList/ItemList"
import React, {useState, useEffect } from "react";
import  productos  from "../Productos/data.json";
import { useParams } from "react-router-dom";


function ItemListContainer(props){
    const [producto, setProducto] = useState([]);
    const{ categoryId} = useParams();

    useEffect(() =>{
        // llamar a la API
        const traerProductos= new Promise ((res, rej) =>{
            setTimeout(() =>{
                if(categoryId === undefined){
                    res(productos)
                }else{
                    const itemsFound = productos.filter( detalle =>{
                        return detalle.category === categoryId;
                    })
                    res(itemsFound);
                }
            }, 800);
        })
        traerProductos
        .then((res)=>{
            setProducto(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [categoryId]);

    return(
        <div class="Item-Lista">
            <h1>{props.greeting}</h1>
            <ItemList items={producto}/>
        </div>
    )
}

export default ItemListContainer; 