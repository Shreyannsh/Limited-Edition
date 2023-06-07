import './ProductList.css'

import { useContext } from "react";
import { mainContext } from '../../Contexts/MainContext';
import { filterContext } from '../../Contexts/FilterContext';
import Filters from "../../Context/Filters/Filters";
import ItemCard from '../../Context/itemCard/ItemCard';

export default function ProductList(){
          
    const { displayProducts} = useContext(filterContext);
     
    const products =displayProducts();

    return(
        <div className='ProductListPage'>
            <div className='filters'>
            <Filters/>
            </div>
        <div>
        <h1>Showing all products</h1>
        <div className='allProducts'>
            {products.map((item) =><li key={item._id} className='oneByOne'>
             <ItemCard item={item} />
            </li> )}
        </div>
            </div>
        </div>
    )
}