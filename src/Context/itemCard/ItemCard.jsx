import { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './itemCard.css'
import { FaHeart, FaStar} from "react-icons/fa";
import { cartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';
import { wishListContext } from '../../Contexts/WishListContext';
import { authContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';

export default function ItemCard({item}){

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

    return (

        <div className='item'>
            <span onClick={state.firstName?()=>callWishList(): ()=>nothing()} className='addToFav'>{ item.isAddToWishList ? <FaHeart style={{color:'red'}}/> :<FaHeart style={{color:'grey'}}/> }</span>
            <NavLink  className='img' to={`/individualPage/${item._id}`} > <img src={item.image} alt=''/> </NavLink>  
            <span className='rating'>{item.rating} <FaStar style={{color:' rgb(255, 251, 0)'}}/></span>
            <p className='brandName'>{item.brand}</p>
            <p className='productName'>{item.name} </p>
            <p className='productPrice'> <span>&#x20B9;</span> {item.price}</p>
            {/* <button onClick={()=>addToCart(item)}>Add to Cart</button> */}
            
            {IsPresentInCart(item)? <Link to='/cart' className='cartLink'>Go to Cart</Link> :  <button onClick={state.firstName?()=>addToCart(item): ()=>nothing()} >Add to Cart</button>}
           
        </div>

    )
}