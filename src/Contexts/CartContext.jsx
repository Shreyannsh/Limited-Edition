import { createContext, useContext, useState,useEffect,useReducer } from "react";
import axios from 'axios'
import { authContext } from "./AuthContext";
import { cartReducer } from "../Reducer/cartReducer";
export const cartContext = createContext();

export default function CartProvider({children}){

    const [cart, setCart] = useState([]);
    const{login} = useContext(authContext);

    const cartData = async() =>{
        try{
            // const response = await axios.get('/api/user/cart',{ 'headers': { 'Authorization': login } })
            const response = await fetch('/api/user/cart',{
                method: 'GET',
                headers: {authorization: localStorage.getItem('encodedToken')}
            })

            // //////////console.log(await response.json())
             const {cart} =  await response.json();
            // localStorage.setItem('cart',cart)
            // localStorage.getItem('cart')
            //////////console.log(cart)
            dispatch({type:'get', payload: cart})
            // //////////console.log(cart,'hey')
            // setCart(cart)
            // setCart(response)
            // //////////console.log(cart)
            // //////////console.log(response,'cart')
        }catch(error){
            //////////console.log(error)
        }
    }

    const addToCart =async(item) =>{
      
        try{
            const response = await fetch('/api/user/cart',{
                method: 'POST',
                 headers: {authorization: localStorage.getItem('encodedToken')},
                 body: JSON.stringify({product:item})

            })
            // //////////console.log(await response.json())
            const {cart} = await response.json();
            localStorage.setItem('cart',cart)
            localStorage.getItem(cart)
           
             dispatch({type:'add', payload: cart})
           
            
        }catch(error){

        }
    }

    const deleteFromCart = async(id) =>{
        try{
            //////////console.log(id);
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
            //////////console.log(cart.qty)
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
            //////////console.log(cart)
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
        //////////console.log({acc,crr})
        acc.quantity = acc.quantity + crr.qty;
       
        acc.totalAmount = acc.totalAmount + (Number(crr.price)* crr.qty);
        return acc;
    },
    {quantity:0,totalAmount:0}
    )
    //////////console.log(state?.initialCart)
     //////////console.log(totalCartCount)
    // //////////console.log(state)
    return(
        <div>
            <cartContext.Provider value={{state,dispatch,addToCart,deleteFromCart, incrementQuantity,decrementQuantity,totalCartCount}}>
            {children}
            </cartContext.Provider>
        </div>
    )
}