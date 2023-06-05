import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './itemCard.css'
import { FaHeart, FaStar} from "react-icons/fa";
import { cartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';
import { wishListContext } from '../../Contexts/WishListContext';

export default function ItemCard({item}){
    
    const [isAddToWishList,setIsAddToWishList] = useState(false);
    const [color,setColor] = useState('grey');

    const {state,addToCart} = useContext(cartContext);
    const {addToWishList,deleteFromWishList} = useContext(wishListContext);

    const IsPresentInCart = (item) =>{
        const findItem = state?.initialCart?.find(({_id}) => _id === item._id)
        return findItem ? true : false;
    }

    const callWishList =() =>{

        setIsAddToWishList(!isAddToWishList)
        console.log(isAddToWishList,color)
        if (isAddToWishList){
            console.log('RED')
            setColor('red')
            addToWishList(item) 
        }
        if (!isAddToWishList){
            console.log('GREY')
            deleteFromWishList(item._id)
            setIsAddToWishList(!isAddToWishList);
            setColor('grey')
        }
    }

    // useEffect(()=>{
    //     setIsAddToWishList(!isAddToWishList)
    // },[])
    //console.log(isAddToWishList,color)
    return (

        <div className='item'>
            <span onClick={()=>callWishList()} className='addToFav'><FaHeart style={{color:color}}/> </span>
            <NavLink  className='img' to={`/individualPage/${item._id}`} > <img src={item.image} alt=''/> </NavLink>  
            <span className='rating'>{item.rating} <FaStar style={{color:' rgb(255, 251, 0)'}}/></span>
            <p className='brandName'>{item.brand}</p>
            <p className='productName'>{item.name} </p>
            <p className='productPrice'> <span>&#x20B9;</span> {item.price}</p>
            {/* <button onClick={()=>addToCart(item)}>Add to Cart</button> */}
            
            {IsPresentInCart(item)? <button> <Link to='/cart'>Go to Cart</Link></button>  :  <button onClick={()=>addToCart(item)}>Add to Cart</button>}
        </div>

    )
}