import { useContext } from "react";
import './wishList.css';
import { FaHeart, FaStar} from "react-icons/fa";
import { wishListContext } from "../../Contexts/WishListContext";
import { cartContext } from "../../Contexts/CartContext";

export default function WishList(){
    const {state,deleteFromWishList} = useContext(wishListContext);
    const {addToCart} = useContext(cartContext);
    return(
        <div style={{ paddingTop: '5rem'}} className="wishListPage">
            <h1>Your WishList</h1>
            {state?.wishListItems.map((item) =>
            <div>
                 <div onClick={()=>deleteFromWishList(item._id)} className='wishListItem' key={item._id} >
                 <span className='wishListAddToFav'><FaHeart style={{color:'red'}}/> </span>
                 <img src={item.image} alt=''/>
                 <span className='wishListRating'>{item.rating} <FaStar style={{color:' rgb(255, 251, 0)'}}/></span>
                 <p className='wishListBrandName'>{item.brand}</p>
                 <p className='wishListProductName'>{item.name} </p>
                 <p className='wishListProductPrice'> <span>&#x20B9;</span>{item.price}</p>
                 <button onClick={()=>addToCart(item)}>Add to Cart</button>
                 {/* {IsPresentInCart(item)?( <Link to='/cart'>Go to Cart</Link>) :('Add to Cart')} */}
             </div>
            </div>
            )}
        </div>
    )
}