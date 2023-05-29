import { useContext } from 'react';
import './Filters.css';
import { filterContext } from '../../Contexts/FilterContext';
import { categories } from '../../backend/db/categories';

export default function Filters(){

    const {filterByCategory,categoriesName} = useContext(filterContext);
    // console.log(categories)
    // //console.log(categoriesName)
    return(
        <div className='filters'>
            <h3>Filters</h3> 

            <div className="filters-price">
            <p>Price</p>
            <input type='range' min='0' max='600000'  />
            </div>

            <div  className="filters-category">
           {/* <p>Category</p> */}
           
        {categoriesName.map(item => <label><input onChange={filterByCategory} type = "checkbox" value ={item._id}/>{item.categoryName}</label>)}

           {/* <label ><input  value='laptops' type='checkbox' name='category' />Laptop</label> 
           <label><input onClick={(e)=>filterByCategory(e)} value='phones' type='checkbox' name='category' />Phone</label> 
           <label ><input onClick={(e)=>filterByCategory(e)} value='watches'  type='checkbox' name='category' />Watches</label> 
           <label ><input  onClick={(e)=>filterByCategory(e)} value='earbuds' type='checkbox' name='category' />Earbuds</label> 
           <label ><input onClick={(e)=>filterByCategory(e)} value='gadgets' type='checkbox' name='category' />Gadgets</label>  */}
           </div>

           <div  className="filters-rating"> 
           <p>Rating</p>
           <label><input type='radio' name='rating' /> 4 star & above</label> 
           <label><input type='radio' name='rating' /> 3 star & above</label> 
           <label><input type='radio' name='rating' /> 2 star & above</label> 
           <label><input type='radio' name='rating' /> 1 star & above</label> 
           </div>

           <div  className="filters-sort">
           <p>Sort by</p>
           <label><input type='radio' name='sort' /> High to Low</label> 
           <label><input type='radio' name='sort' /> Low to High</label> 
           </div>

        </div>
    )
}