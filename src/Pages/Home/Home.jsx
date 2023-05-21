import './Home.css'

import { useContext } from "react";
import {Link, Route, Routes} from 'react-router-dom'

import { UniqueContext } from "../../Components/MainContext";
import ProductList from '../Product List/ProductList';

export default function Home(){

    const {items} = useContext(UniqueContext);


    return(
        <div className='home'>
            <div className="about">
                <p>If you are unique</p>
                <p>Why to buy oddinary</p>
                <p>Presenting LIMITED EDITION</p>
                <p>Exclusively for you</p>
            </div>
            <div className="category">
                <Link className="category-phones">Phones</Link>
                <Link className="category-laptops">Laptops</Link>
                <Link className="category-gadgets ">Gadgets</Link>
                <Link className="category-earbuds">Earbuds</Link>
                <Link className="category-watches">Watches</Link>
                <Link to='productList'className="category-all"> All Products</Link>
            </div>
            
            {/* {items.map((product)=><li key={product._id}>
                <p>{product.name}</p>
            </li>)} */}
        </div>
    )
}