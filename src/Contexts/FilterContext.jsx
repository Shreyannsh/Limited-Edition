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
    const[categoriesName,setCategoriesName] = useState([])

    const getCategories = async() =>{
        try{
            const response = await fetch('/api/categories',{
                method:'GET'
            })
            // console.log(await response.json());
            const {categories} =  await response.json();
             console.log(categories);
            setCategoriesName(categories);
        }catch(error){
            console.error(error)
        }
    }

    const categoryData = async(categoryId) =>{
        try{
            console.log(categoryId)
            const response = await fetch(`/api/categories/${categoryId}`,{
                method:'GET'
            })
             //console.log(await response.json());
            const {category: {productList}} = await response.json();
            // console.log(category)
             console.log(productList);
             dispatch({type:'addCategory', payload: productList})
        }catch(error){
            console.error(error)
        }
    }

    const filterByCategory =(e)=>{
        const  isChecked = e.target.checked;

        const  value = e.target.value;

        if(isChecked){
            setCategory([...category,value])
        }else{
            category.filter((category) => category !== value)
        }
        // category.map((catName) => );
        categoryData(value);
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