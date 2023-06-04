import { createContext,useReducer, useState,useContext, useEffect} from "react";

import { filterReducer } from "../Reducer/filterReducer";
import { categories } from "../backend/db/categories";
import { mainContext } from "./MainContext";
import ProductList from "../Pages/Product List/ProductList";

export const filterContext = createContext();

export default function FilterProvider({children}){

    const {allProductList} = useContext(mainContext)

    const initializer = {
        productList : [],
        checkBoxValues:[]
    }

    const [state,dispatch] = useReducer(filterReducer,initializer);

    const[items,setItems] = useState([])

    const [price,setPrice] = useState('');

    const [searchedText,setSearchedText] = useState('');

    const [rating, setRating] = useState('');

    const [sort,setSort] = useState('');

    // const [category,setCategory] = useState([]);
    // const[categoriesName,setCategoriesName] = useState([]);
    // const [filteredProducts,setFilteredProducts] = useState([]);

    // const getCategories = async() =>{
    //     try{
    //         const response = await fetch('/api/categories',{
    //             method:'GET'
    //         })
    //         // //////// (await response.json());
    //         const {categories} =  await response.json();
    //          //////// (categories);
            
    //         setCategoriesName(categories);
    //     }catch(error){
    //         console.error(error)
    //     }
    // }

    // const categoryData = async(categoryId) =>{
    //     try{
    //         //////// (categoryId)
    //         const response = await fetch(`/api/categories/${categoryId}`,{
    //             method:'GET'
    //         })
    //          ////////// (await response.json());
    //         const {category: {productList}} = await response.json();
    //         // //////// (category)
    //          //////// (productList);
    //          setFilteredProducts([...filteredProducts,...productList])
             
    //     }catch(error){
    //         console.error(error)
    //     }
    // }

    // const filterByCategory =(event)=>{
    //     const  checked = event.target.checked;
    //     // ////// (checked);
    //     const  value = event.target.value;
        
    //     if(checked){
    //         setCategory([...category,value]);
    //         category.map((catId) => categoryData(catId));
    //         dispatch({type:'addCategory', payload: filteredProducts});
    //     }else{
    //        setFilteredProducts([]);
    //        const filtered =  category.filter((cat) => cat !== value);
    //        setCategory(filtered);
    //        ////// (filtered,'filtered array');
    //        ////// (filteredProducts);
    //        filtered.map((catId) => categoryData(catId));
    //        dispatch({type:'addCategory', payload: filteredProducts});
    //     }
    //     // ////// (category,'array of ids');
    //     // ////// (categoriesName);
    //     //////// (filteredProducts)
    // }

    // useEffect(() =>{
    //     getCategories();
    // },[])

   const productSearch =(e) =>{
        const searchedText=e.target.value;
        setSearchedText(searchedText);
    }

    const filterByPrice =(e) =>{
        const value = e.target.value;
        setPrice(Number(value));
    }

    const ratingFilter =(e) =>{
        const value = e.target.value
        setRating(value);
    }

    const sortFilter =(e) =>{

        const value = e.target.value;
        setSort(value);
    }

    const displayProducts = () =>{
        
        let products = [...allProductList];
       
        if(state.checkBoxValues.length>0){
        products=[];
        const items = state.checkBoxValues.map((cbValue) => 
        allProductList.filter((item) => item.categoryName === cbValue));
         ////// (items)
        items.map((array) =>{
        products = [...products,...array]
       })
     }

     if(rating.length>0){
        ////// ('124')
        products = products.filter((item) => Number(item.rating) >= Number(rating));
      }

     if(searchedText.length>0){
        products = products.filter((item) => item.name.toLowerCase().includes(searchedText) ||  item.brand.toLowerCase().includes(searchedText));
     }

     if(price>500){
      ////// (price)
      products = products.filter((item) => Number(item.price) >= Number(price));
      ////// (products)
     }

     if(sort.length>0){
        if(sort === 'highToLow'){
           products = products.sort((a,b) => b.price - a.price);
        }
        if(sort === 'lowToHigh'){
            products = products.sort((a,b) => a.price - b.price);
        }
     }


     return products;
    
        // if (state.checkBoxValues.length>1){
        //     state.checkBoxValues.map((cbValue) => {
        //         products = products.filter((item) => item.categoryName === cbValue)
        //       })
        // }
    }

    // ////// (state.checkBoxValues);
    ////// (rating)
     

    return(
        <div>
            <filterContext.Provider value={{state,dispatch, displayProducts,filterByPrice, productSearch,searchedText,ratingFilter,sortFilter}}>
            {children}
            </filterContext.Provider>
            
        </div>
    )
}
//,filterByCategory,categoriesName