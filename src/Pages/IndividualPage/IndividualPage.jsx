import './IndividualPage.css'
import { toast } from 'react-toastify';
import { useParams, Link  } from "react-router-dom";
import { mainContext } from "../../Contexts/MainContext";
import { FaHeart, FaStar} from "react-icons/fa";
import { cartContext } from '../../Contexts/CartContext';
import { wishListContext } from '../../Contexts/WishListContext';

import { useContext } from "react";
import { authContext } from '../../Contexts/AuthContext';
export default function IndividualPage(){

    const {productId} = useParams();

    const {allProductList} = useContext(mainContext);
    const {addToCart,IsPresentInCart} = useContext(cartContext);
    const {addToWishList,deleteFromWishList} = useContext(wishListContext);
    const {state} = useContext(authContext);

    const callWishList =() =>{

        if (!item.isAddToWishList){
            item.isAddToWishList = !item.isAddToWishList;
            addToWishList(item);
        } else{
            item.isAddToWishList = !item.isAddToWishList;
            deleteFromWishList(item._id);
        }
    };

    const nothing =() =>{
        toast('LOGIN IS REQUIRED')
    }


    const item = allProductList.find(({_id})=> _id === productId);
   
    return(
            <div className='parectBlock'>
            <div className='individualProduct'>
                <div className='imageBlock'>
                <img src={item.image} alt=''/>
                <p className='productName'>{item.name} </p>
           {/* <p className='brandName'>{item.brand}</p> */}
           <p className='productPrice'> <span>&#x20B9;</span> {item.price}</p>
                </div>
           <div className='allOtherBlock'>
            
            <div onClick={state.firstName?()=>callWishList(): ()=>nothing()} className='wishlist-btn'>
            <span > Add to Wishlist  </span>
            <span className='addToFavHeart'>{ item.isAddToWishList ? <FaHeart style={{color:'red'}}/> :<FaHeart style={{color:'grey'}}/> }</span>
            </div>
         
           <span className='rating'>Rating {item.rating} <FaStar style={{color:' rgb(255, 251, 0)'}}/></span>
          
            <h3>Description</h3>
           <p>{item.description}</p>
           {/* <button onClick={()=>addToCart(item)}>Add to Cart</button> */}
           
           {IsPresentInCart(item)? <Link to='/cart' className='cartLink'>Go to Cart</Link> :  <button onClick={state.firstName?()=>addToCart(item): ()=>nothing()} >Add to Cart</button>}
           </div>
           
        </div>
        </div>


    )
}