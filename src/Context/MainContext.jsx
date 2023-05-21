import { createContext, useEffect, useState } from "react";

export  const UniqueContext = createContext();

export default function UniqueProvider({children}){

    const [items,setItems] = useState([]);

    const fetchData = async() =>{
        
        try{
            const response = await fetch("/api/products")
            // console.log(await response.json())
            const {products} =  await response.json()
           
            localStorage.setItem('products', products)
           localStorage.getItem('products')
           setItems(products)
        }catch(error){ 
            console.log(error.message)        
        }
    };

    useEffect(()=>{
        fetchData(); 
    },[]);
  
    console.log(items);
    return(
        <div>
            <UniqueContext.Provider value={{items}}>
                {children}
            </UniqueContext.Provider>
            
        </div>
    )
};