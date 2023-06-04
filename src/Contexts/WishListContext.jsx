import { createContext, useContext, useEffect, useReducer } from "react";

import { WishListReducer } from "../Reducer/wishListReducer";
import { authContext } from "./AuthContext";

export const wishListContext = createContext();

export default function WishListProvider({children}){

    const initializer={
        wishListItems :[]
    }
    const [state,dispatch] = useReducer(WishListReducer, initializer)

    const getWishList = async() =>{
        try{
            const response = await fetch('/api/user/wishlist',{
                method:'GET',
                headers: {authorization:  localStorage.getItem('encodedToken')}
            })
            ////////// (await response.json());
            const {wishlist} = await response.json();
            localStorage.setItem('whishList', wishlist)
            localStorage.getItem('wishList')
            dispatch({type:'get',payload:wishlist})
        }catch(error){

        }
    }

    const addToWishList = async(item) =>{
        try{
            const response = await fetch('/api/user/wishlist',{
                method:'POST',
                headers: {authorization:  localStorage.getItem('encodedToken')},
                body:JSON.stringify({product: item})
            })
            // ////////// (await response.json());
            const {wishlist} = await response.json();
            ////////// (wishlist);
            localStorage.setItem('wishList', wishlist)
            localStorage.getItem('wishList')
            dispatch({type:'add',payload:wishlist})
        }catch(error){

        }
    }

    const deleteFromWishList = async(id) =>{
        
        try{
            ////////// (id);
            const response = await fetch(`/api/user/wishlist/${id}`,{
                method:'DELETE',
                headers: {authorization: localStorage.getItem('encodedToken')},
            })
           
            // ////////// (await response.json());
            const {wishlist} = await response.json();
            localStorage.setItem('whishList', wishlist)
            localStorage.getItem('wishList')
            dispatch({type:'delete',payload:wishlist})
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        getWishList();
    },[]);

    return(
        <div>
            <wishListContext.Provider value={{state,dispatch,addToWishList,deleteFromWishList}}>
                {children}
            </wishListContext.Provider>
           
        </div>
    )
};