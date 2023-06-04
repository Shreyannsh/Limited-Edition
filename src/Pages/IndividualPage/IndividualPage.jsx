import './IndividualPage.css'

import { useParams, Link  } from "react-router-dom";
import { mainContext } from "../../Contexts/MainContext";
import { FaHeart, FaStar} from "react-icons/fa";
import { cartContext } from '../../Contexts/CartContext';
import { wishListContext } from '../../Contexts/WishListContext';

import { useContext } from "react";
export default function IndividualPage(){

    const {productId} = useParams();

    const {allProductList} = useContext(mainContext);
    const {state,addToCart} = useContext(cartContext);
    const {addToWishList} = useContext(wishListContext);

    const IsPresentInCart = (item) =>{
        const findItem = state?.initialCart?.find(({_id}) => _id === item._id)
        return findItem ? true : false;
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
            <div className='wishlistr-btn'>
            <span onClick={()=>addToWishList(item)} className='addToFav'> Add to Wishlist  </span>
           <span className='addToFavHeart' ><FaHeart style={{color:'grey'}}/></span>
            </div>
         
           <span className='rating'>Rating {item.rating} <FaStar style={{color:' rgb(255, 251, 0)'}}/></span>
          
            <h3>Description</h3>
           <p>{item.description}</p>
           {/* <button onClick={()=>addToCart(item)}>Add to Cart</button> */}
           
           {IsPresentInCart(item)? <button> <Link to='/cart'>Go to Cart</Link></button>  :  <button onClick={()=>addToCart(item)}>Add to Cart</button>}
           </div>
           
        </div>
        </div>


    )
}