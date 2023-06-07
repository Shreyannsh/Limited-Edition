import './ProductList.css'

import { useContext } from "react";
import { filterContext } from '../../Contexts/FilterContext';
import Filters from "../../Context/Filters/Filters";
import ItemCard from '../../Context/itemCard/ItemCard';
import { mainContext } from '../../Contexts/MainContext';

export default function ProductList(){
          
    const { displayProducts} = useContext(filterContext);
    const {isLoading} = useContext(mainContext);
     
    const products =displayProducts();

    return(
        <div className='ProductListPage'>
            <div className='filters'>
            <Filters/>
            </div>
        <div>
 
        <h1>Showing all products</h1>
        {isLoading &&  <div className='loadingImage'><img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif' alt='loading' /> </div>}
        <div className='allProducts'>
            {products.map((item) =><li key={item._id} className='oneByOne'>
             <ItemCard item={item} />
            </li> )}
        </div>
            </div>
        </div>
    )
}