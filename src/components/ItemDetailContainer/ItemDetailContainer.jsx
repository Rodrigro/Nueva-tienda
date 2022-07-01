import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import productos from "../Productos/data.json";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const { itemId } = useParams();

    useEffect(() =>{
        // llamar a la API
        const traerProductos= new Promise ((res, rej) =>{
            setTimeout(() =>{
                let itemNumber = parseInt(itemId)
            res(productos[itemNumber]);
            }, 900);
        })

        traerProductos
        .then((res)=>{
            setProducto(res);
        })

        .catch((error) => {
            console.log(error);
        });
    }, [itemId]);

    return (
        <div>
            <Link to="/"><button>Volver al catalogo</button></Link>
            <Link to="/category/Televisores"><button>Televisores</button></Link>
            <Link to="/category/Computadoras"><button>Computadoras</button></Link>
            <Link to="/category/aventura"><button>Aventura</button></Link>
            <Link to="/category/veridica"><button>Veridicas</button></Link>
            <div>
                <ItemDetail item={producto}/>
            </div>
        </div>
        )
}
