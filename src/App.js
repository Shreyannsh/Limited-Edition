import "./App.css";
import Mockman from 'mockman-js'
import {NavLink,Routes,Route} from 'react-router-dom'

import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import WishList from "./Pages/WishList";

function App() {
  return (
    <div className="App">
      <nav className='navBar'>
        <NavLink className='nav-logo' to='/'>Limited Edition</NavLink>
        <input className='searchBar' placeholder='Search here' type='text'/>
        <NavLink className='cart' to='/cart' >Cart</NavLink>
        <NavLink className='wishList' to='/wishList'>WishList</NavLink>
        <NavLink className='login' to='login'>Login</NavLink>
      </nav>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<WishList/>} />
        {/* <Route path='/productList' element={<ProductList/>} /> */} 
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/' element={<h1>Hey folks!</h1>}/>
        <Route path='/Mockman' element={ <Mockman />} /> */}
      </Routes>
      {/* <Mockman /> */}
    </div>
  );
}

export default App;
