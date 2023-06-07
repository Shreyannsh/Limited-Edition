import { createContext,useEffect,useReducer,useState} from "react";
import { cartReducer } from "../Reducer/cartReducer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const cartContext = createContext();

export default function CartProvider({children}){

    const [isLoading,setIsLoading] = useState();

    const cartData = async() =>{
        try{
            setIsLoading(true);
            const response = await fetch('/api/user/cart',{
                method: 'GET',
                headers: {authorization: localStorage.getItem('encodedToken')}
            });
             const {cart} =  await response.json();
            dispatch({type:'get', payload: cart})
            setIsLoading(false);
        }catch(error){
            toast.error('Error from Server')
        }
    }

    const addToCart =async(item) =>{
        try{
            const response = await fetch('/api/user/cart',{
                method: 'POST',
                 headers: {authorization: localStorage.getItem('encodedToken')},
                 body: JSON.stringify({product:item})
            })
            const {cart} = await response.json();
            localStorage.setItem('cart',cart)
            localStorage.getItem(cart)
           
             dispatch({type:'add', payload: cart})
             toast('added to cart')
            
        }catch(error){
            toast.error('Error from Server')
        }
    }

    const deleteFromCart = async(id) =>{
        try{
            
            const response = await fetch(`/api/user/cart/${id}`,{
                method:'DELETE',
                headers: {authorization: localStorage.getItem('encodedToken')},
            })
            
            const {cart} = await response.json();
           
            localStorage.setItem('cart',cart)
            localStorage.getItem(cart)
             dispatch({type:'delete', payload: cart});
             toast('Removed from Cart')
        }catch(error){
            toast.error('Error from Server')
        }
    }

    const incrementQuantity = async(id) =>{
        try{
            const response = await fetch(`/api/user/cart/${id}`,{
                method:'POST',
                headers: {authorization: localStorage.getItem('encodedToken')},
                body: JSON.stringify({action:{
                    type:'increment'
                }})
            })
            const {cart} = await response.json();
            dispatch({type:'increment', payload: cart});
        }catch(error){
            toast.error('Error from Server')
        }
    }

    const decrementQuantity = async(id) =>{
        try{
            const response = await fetch(`/api/user/cart/${id}`,{
                method:'POST',
                headers: {authorization: localStorage.getItem('encodedToken')},
                body: JSON.stringify({action:{
                    type:'decrement'
                }})
            })
            const {cart} = await response.json();
            dispatch({type:'decrement', payload: cart});
        }catch(error){
            toast.error('Error from Server')
        }
    }

    const initializer = {
        initialCart :[]
    }

    const [state,dispatch] = useReducer(cartReducer,initializer);

    const IsPresentInCart = (item) =>{
        const findItem = state?.initialCart?.find(({_id}) => _id === item._id)
        return findItem ? true : false;
    }

    const clearCart = () =>{
            state.initialCart.map((item) => deleteFromCart(item._id))
    }

    useEffect(()=>{
        cartData(); 
    },[]);

   

    const totalCartCount = state?.initialCart?.reduce((acc,crr)=>{
        acc.quantity = acc.quantity + crr.qty;
        acc.totalAmount = acc.totalAmount + (Number(crr.price)* crr.qty);
        return acc;
    },
    {quantity:0,totalAmount:0}
    )
    
    return(
        <div>
            <cartContext.Provider value={{state,dispatch,addToCart,deleteFromCart, incrementQuantity,decrementQuantity,totalCartCount,clearCart,IsPresentInCart,isLoading}}>
            {children}
            </cartContext.Provider>
        </div>
    )
}