import { useContext } from "react";
import './wishList.css';
import { FaHeart, FaStar} from "react-icons/fa";
import { wishListContext } from "../../Contexts/WishListContext";
import { cartContext } from "../../Contexts/CartContext";
import { mainContext } from "../../Contexts/MainContext";

export default function WishList(){
    const {state,deleteFromWishList} = useContext(wishListContext);
    const {allProductList,setAllProductList} = useContext(mainContext)
    const {addToCart} = useContext(cartContext);

    const deleteItemFromWishList = (item) =>{

       const updatedList =  allProductList.map((product) =>{
        if(product._id === item._id) {
           return {...product, isAddToWishList:!product.isAddToWishList}
        }  else{
            return{...product}
        }
        })

        setAllProductList(updatedList);
        deleteFromWishList(item._id);
    }

    

    console.log(allProductList);

    return(
        <div style={{ paddingTop: '5rem'}} className="wishListPage">
            <h1>My WishList ({state.wishListItems.length})</h1>
            <div className="wishListComponent">
         {  state?.wishListItems.length>0 ? state?.wishListItems.map((item) =>
            <div >
                 <div onClick={()=>deleteItemFromWishList(item)} className='wishListItem' key={item._id} >
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
            ) : <h1 className="emptyWishList">WishList is Empty!</h1>}
             </div>
        </div>
    )
}