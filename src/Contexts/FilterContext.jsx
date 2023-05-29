import { createContext,useReducer, useState,useContext, useEffect} from "react";

import { filterReducer } from "../Reducer/filterReducer";
import { categories } from "../backend/db/categories";

export const filterContext = createContext();



export default function FilterProvider({children}){

    const initializer = {
        productList : [] 
    }

    const [state,dispatch] = useReducer(filterReducer,initializer);
    const [category,setCategory] = useState([]);
    const[categoriesName,setCategoriesName] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);

    const getCategories = async() =>{
        try{
            const response = await fetch('/api/categories',{
                method:'GET'
            })
            // //console.log(await response.json());
            const {categories} =  await response.json();
             //console.log(categories);
            
            setCategoriesName(categories);
        }catch(error){
            console.error(error)
        }
    }

    const categoryData = async(categoryId) =>{
        try{
            //console.log(categoryId)
            const response = await fetch(`/api/categories/${categoryId}`,{
                method:'GET'
            })
             ////console.log(await response.json());
            const {category: {productList}} = await response.json();
            // //console.log(category)
             //console.log(productList);
             setFilteredProducts([...filteredProducts,...productList])
             
        }catch(error){
            console.error(error)
        }
    }

    const filterByCategory =(event)=>{
        const  checked = event.target.checked;
        // console.log(checked);
        const  value = event.target.value;
        
        if(checked){
            setCategory([...category,value]);
            category.map((catId) => categoryData(catId));
            dispatch({type:'addCategory', payload: filteredProducts});
        }else{
           setFilteredProducts([]);
           const filtered =  category.filter((cat) => cat !== value);
           setCategory(filtered);
           console.log(filtered,'filtered array');
           console.log(filteredProducts);
           filtered.map((catId) => categoryData(catId));
           dispatch({type:'addCategory', payload: filteredProducts});
        }
        // console.log(category,'array of ids');
        // console.log(categoriesName);
        //console.log(filteredProducts)
    }

    useEffect(() =>{
        getCategories();
    },[])

    

    return(
        <div>
            <filterContext.Provider value={{state,dispatch,filterByCategory,categoriesName}}>
            {children}
            </filterContext.Provider>
            
        </div>
    )
}
//