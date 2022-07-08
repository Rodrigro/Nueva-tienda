import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Context/CartContext";




function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Nuestros Productos"/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Encontradas"/>}/>
          <Route path="/detalle/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

