import { createContext, useState, useEffect, useReducer } from "react";
import { WishListReducer } from "../Reducer/wishListReducer";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const wishListContext = createContext();

export default function WishListProvider({children}){

    const initializer={
        wishListItems :[]
    }
    const [isAddToWishList,setIsAddToWishList] = useState(false);
    const [state,dispatch] = useReducer(WishListReducer, initializer)

    const getWishList = async() =>{
        try{
            const response = await fetch('/api/user/wishlist',{
                method:'GET',
                headers: {authorization:  localStorage.getItem('encodedToken')}
            })
           
            const {wishlist} = await response.json();
            localStorage.setItem('whishList', wishlist)
            localStorage.getItem('wishList')
            dispatch({type:'get',payload:wishlist})
        }catch(error){
            toast.error('Error from Server')
        }
    }

    const addToWishList = async(item) =>{
        try{
            const response = await fetch('/api/user/wishlist',{
                method:'POST',
                headers: {authorization:  localStorage.getItem('encodedToken')},
                body:JSON.stringify({product: item})
            })
           
            const {wishlist} = await response.json();
            
            localStorage.setItem('wishList', wishlist)
            localStorage.getItem('wishList')
            dispatch({type:'add',payload:wishlist})
            toast('Added to Wishlist')
        }catch(error){
            toast.error('Error from Server')
        }
      
    }

    const deleteFromWishList = async(id) =>{
        
        try{
            
            const response = await fetch(`/api/user/wishlist/${id}`,{
                method:'DELETE',
                headers: {authorization: localStorage.getItem('encodedToken')},
            })
           
            const {wishlist} = await response.json();
            localStorage.setItem('whishList', wishlist)
            localStorage.getItem('wishList')
            dispatch({type:'delete',payload:wishlist})
            toast('Removed from Wishlist')
        }catch(error){
            toast.error('Error from Server')
        }
    }

    const clearWishlist = () =>{
        state.wishListItems.map((item) => deleteFromWishList(item._id))
}

    useEffect(()=>{
        getWishList();
    },[]);

     //console.log(state.wishListItems)

    return(
        <div>
            <wishListContext.Provider value={{state,dispatch,addToWishList,deleteFromWishList,isAddToWishList,setIsAddToWishList,clearWishlist}}>
                {children}
            </wishListContext.Provider>
           
        </div>
    )
};