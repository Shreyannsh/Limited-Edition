import './ProductList.css'

import { useContext } from "react";
import { mainContext } from '../../Contexts/MainContext';
import { filterContext } from '../../Contexts/FilterContext';
import Filters from "../../Context/Filters/Filters";
import ItemCard from '../../Context/itemCard/ItemCard';
import { useParams } from 'react-router-dom';


// import { FaRegHeart} from "react-icons/fa";
// import { cartContext } from '../../Contexts/CartContext';
// import { Link } from 'react-router-dom';

export default function ProductList(){
    // const {state,dispatch} = useContext(cartContext);       
     const {state, displayProducts} = useContext(filterContext);
     const {allProductList} = useContext(mainContext)
     
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
            {/* {(state?.productList?.length>0 ? state?.productList : allProductList)?.map((item)=>(
                <ItemCard item={item} />
            //     <div className='item'>
            //     <span><FaRegHeart/> </span>
            //     <img src={item.image} alt=''/>
            //     <p>{item.name} </p>
            //     <p>Brand: {item.brand}</p>
            //     <p>Price: {item.price}</p>
            //     <button onClick={()=>dispatch({type:'add',product: {item}})}>{state.initialCart.includes(item)?( <Link to='/cart'>Go to Cart</Link>) :('Add to Cart')}</button>
            // </div>
            ))} */}
        </div>
            </div>
        </div>
    )
}