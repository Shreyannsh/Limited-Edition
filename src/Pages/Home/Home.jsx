import './Home.css'

import { useContext } from "react";
import {Link, Route, Routes} from 'react-router-dom'

import { mainContext } from '../../Contexts/MainContext';
import ProductList from '../Product List/ProductList';

export default function Home(){

    const {items} = useContext(mainContext);


    return(
        <div className='home'>
            <div className="about" >
                <div className="para-1">
                    <p>If you are unique</p>
                    <p>Why to buy oddinary</p>
                    <p>Presenting <i>LIMITED EDITION</i></p>
                    <p>Exclusively for you</p>
                </div>
                <div>
                    <p className='para-2'>Make your own Collection</p>
                </div>
                <div>
                    <p className="para-3">Handpicked best of the best unforgetable priceless unique products selected and arranged for your fantesies</p>
                </div>
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