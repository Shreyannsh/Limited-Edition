import { useContext } from 'react';
import './itemCard.css'
import { FaHeart, FaStar} from "react-icons/fa";
import { cartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';
import { wishListContext } from '../../Contexts/WishListContext';



export default function ItemCard({item}){

    const {state,addToCart} = useContext(cartContext);
    const {addToWishList} = useContext(wishListContext)

    // const IsPresentInCart = (item) =>{
    //     const findItem = state.initialCart.find(({_id}) => _id === item._id )
    //     return findItem? true : false;
    // }
    // ////console.log(IsPresentInCart(item))
    //  ////console.log(state.initialCart.includes(item));

    return(
        <div className='item'>
            <span onClick={()=>addToWishList(item)} className='addToFav'><FaHeart style={{color:'grey'}}/> </span>
            <img src={item.image} alt=''/>
            <span className='rating'>{item.rating} <FaStar style={{color:' rgb(255, 251, 0)'}}/></span>
            <p className='brandName'>{item.brand}</p>
            <p className='productName'>{item.name} </p>
            <p className='productPrice'> <span>&#x20B9;</span>{item.price}</p>
            <button onClick={()=>addToCart(item)}>Add to Cart</button>
            {/* {IsPresentInCart(item)?( <Link to='/cart'>Go to Cart</Link>) :('Add to Cart')} */}
        </div>
    )
}