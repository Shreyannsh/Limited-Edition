import { createContext, useEffect, useState} from "react";

export  const mainContext = createContext();

export default function UniqueProvider({children}){

    const [allProductList,setAllProductList] = useState([]);

    const fetchData = async() =>{
        try{
            const response = await fetch("/api/products");
            const {products} =  await response.json();
            setAllProductList(products);
        }catch(error){ 
            //console.log(error.message)        
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div>
            <mainContext.Provider value={{allProductList}}>
                {children}
            </mainContext.Provider>
        </div>
    )
};