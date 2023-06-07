import { createContext,useEffect,useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";
export const cartContext = createContext();

export default function CartProvider({children}){

    const cartData = async() =>{
        try{

            const response = await fetch('/api/user/cart',{
                method: 'GET',
                headers: {authorization: localStorage.getItem('encodedToken')}
            })
             const {cart} =  await response.json();
            dispatch({type:'get', payload: cart})
        }catch(error){
        
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
           
            
        }catch(error){

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
        }catch(error){
            console.error(error)
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
            console.error(error)
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
            ////////// (cart)
        }catch(error){
            console.error(error)
        }
    }

    const initializer = {
        initialCart :[]
    }

    const [state,dispatch] = useReducer(cartReducer,initializer);

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
            <cartContext.Provider value={{state,dispatch,addToCart,deleteFromCart, incrementQuantity,decrementQuantity,totalCartCount}}>
            {children}
            </cartContext.Provider>
        </div>
    )
}