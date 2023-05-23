import { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({children}){

    const [cart, setCart] = useState([]);

    const cartData = async() =>{
        try{
            const response = await fetch('/api/user/cart',{
                method: 'GET',
                authorization: 'encodedToken'
            })
            const {cart} =  await response.json()
            localStorage.setItem('cart',cart)
            localStorage.getItem(cart)
            console.log(cart,'hey')
            setCart(cart)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <cartContext.Provider value={{}}>
            {children}
            </cartContext.Provider>
        </div>
    )
}