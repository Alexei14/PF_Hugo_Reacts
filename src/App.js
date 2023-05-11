
import './App.css';
import NavBar from './componentes/navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './componentes/itemdetailcontainer/itemdetailcontainer';
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout';
import { CartProvider } from './Cartcontext/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element ={<Checkout/>}/>
        <Route path='*' element={<h1>404 not found</h1>}/>

     </Routes>
     </CartProvider>
     </BrowserRouter>     

    </div>
  );
}

export default App;
