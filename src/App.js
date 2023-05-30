import "./App.css";
import Mockman from 'mockman-js'
import {NavLink,Routes,Route} from 'react-router-dom'
import { FaShoppingCart,FaHeart,} from "react-icons/fa";

import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/Product List/ProductList";
import WishList from "./Pages/WishList/WishList";
import { useContext } from "react";
import { filterContext } from "./Contexts/FilterContext";



function App() {

  const {searchedText,productSearch} = useContext(filterContext);

  return (
    <div className="App">

      <nav className='navBar'>
        <NavLink className='nav-logo' to='/'>LIMITED EDITION</NavLink>
        <input onChange={(e) =>productSearch(e)} className='searchBar' placeholder='Search here' value={searchedText} type='text'/>
        <NavLink to='/productList'className='explore'>Explore</NavLink>
        <NavLink className='cart' to='/cart' ><FaShoppingCart/> <span>Cart</span></NavLink>
        <NavLink className='wishList' to='/wishlist'><FaHeart/> <span>Wishlist</span></NavLink>
        <NavLink className='login' to='/login'>Login</NavLink>
      </nav> 
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/productList' element={<ProductList/>} /> 
        <Route path='/login' element={<Login/>} />
      </Routes>

     <footer>
      <div className='footer-connect'>
      <header><b>Connect</b></header>
      <p>Instagram</p>
      <p>Facebook</p>
      <p>Twitter</p>
      </div>
      <div className='footer-address'>
      <header><b>Adrress</b></header>
      <p>Limited Edition,L143, Okhla- phase III, New Delhi 110046</p>
      </div>
      <div className='footer-contact'>
      <header><b>Contact</b></header>
      <p>011-3333-4444-88</p>
      <p>011-9999-555-111</p>
      <p>limitedEditon@gmail.com</p>
      </div>
     
     </footer>
    
    </div>
  );
}

export default App;
