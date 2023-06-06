import "./App.css";
import Mockman from 'mockman-js'
import {NavLink,Routes,Route} from 'react-router-dom'
import { FaShoppingCart,FaHeart,} from "react-icons/fa";

import Signup from "./Pages/Login/Signup/Signup";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/Product List/ProductList";
import WishList from "./Pages/WishList/WishList";
import { useContext } from "react";
import { filterContext } from "./Contexts/FilterContext";
import { authContext } from "./Contexts/AuthContext";
import Profile from "./Pages/Profile/Profile";
import RequiresAuth from "./Context/RequiresAuth/RequiresAuth";
import Checkout from "./Pages/Cart/Checkout/Checkout";
import IndividualPage from "./Pages/IndividualPage/IndividualPage";



function App() {

  const {searchedText,productSearch,dispatch,state} = useContext(filterContext);
  const {isLoggedIn} = useContext(authContext);

  return (
    <div className="App">

      <nav className='navBar'>
        <NavLink className='nav-logo' to='/'>LIMITED EDITION</NavLink>
        <input onChange={(e) =>dispatch({type:'productSearch', payload:e.target.value})} className='searchBar' placeholder='Search here' value={state.searchedText} type='text'/>
        <NavLink to='/productList'className='explore'>Explore</NavLink>
        <NavLink className='cart' to='/cart' ><FaShoppingCart/> <span>Cart</span></NavLink>
        <NavLink className='wishList' to='/wishlist'><FaHeart/> <span>Wishlist</span></NavLink>
        <NavLink className='login' to={isLoggedIn ? '/profile' :'/login'}>{isLoggedIn?'Profile':'Login'}</NavLink>
      </nav> 
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<RequiresAuth><Cart/></RequiresAuth>} />
        <Route path='/wishlist' element={<RequiresAuth><WishList/></RequiresAuth>} />
        <Route path='/productList' element={<ProductList/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/checkout' element ={<Checkout />} />
        <Route path='/individualPage/:productId' element={<IndividualPage/>} />
      </Routes>

     <footer>
      <div className='footer-connect'>
      <header><b>Connect</b></header>
      <p className="connect">Instagram</p>
      <p className="connect">Facebook</p>
      <p className="connect">Twitter</p>
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
