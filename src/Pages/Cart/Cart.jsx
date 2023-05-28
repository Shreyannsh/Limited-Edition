import { useContext } from "react"
import { cartContext } from "../../Contexts/CartContext"

import './Cart.css'
import { FaHeart, FaStar} from "react-icons/fa";




export default function Cart(){
    const {state,deleteFromCart,incrementQuantity,decrementQuantity,totalCartCount} = useContext(cartContext);
  
    return(
        <div style={{paddingTop:'5rem'}}  >
        <h1>My Cart ({totalCartCount?.quantity ? totalCartCount?.quantity  : 0})</h1>
            <div className="cartPage">
            <div className="cartItemList">
            { state?.initialCart && state?.initialCart?.map((item) =>
                 <div className='cartItem' key={item._id} >
                 <span className='cartAddToFav'><FaHeart style={{color:'grey'}}/> </span>
                 <img src={item.image} alt=''/>
                 <span className='cartRating'>{item.rating} <FaStar style={{color:' rgb(255, 251, 0)'}}/></span>
                 <p className='cartBrandName'>{item.brand}</p>
                 <p className='cartProductName'>{item.name} </p>
                 <p className='cartProductPrice'> <span>&#x20B9;</span>{item.price}</p>
                 <span className="quantity-heading">Quantity</span>
                <button onClick={()=>decrementQuantity(item._id)} disabled={item.qty<=1} className="cartButtonDecrement">-</button> <span className="quantity"> {item.qty}</span> 
                <button  className="cartButtonIncrement" onClick={()=>incrementQuantity(item._id)}>+</button>
                 <button className="cartButtonRemove" onClick={()=>deleteFromCart(item._id)}> Remove from Cart</button>
                 {/* {IsPresentInCart(item)?( <Link to='/cart'>Go to Cart</Link>) :('Add to Cart')} */}
             </div>
            )}
            </div>
            <div className="priceDetails">
                <h2>PRICE DETAILS</h2>
                <p>Price({totalCartCount.quantity}) </p> <span>&#x20B9; {totalCartCount.totalAmount}</span><span> </span>
                <p>Discount: </p>
                <p>Delivery Charges</p>
                <p>Total Amount</p>
                <button>Checkout</button>
            </div>
            </div>
        </div>
    )
}