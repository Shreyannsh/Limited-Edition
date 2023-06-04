import { useContext } from 'react';
import './Filters.css';
import { filterContext } from '../../Contexts/FilterContext';
import { categories } from '../../backend/db/categories';

export default function Filters(){

    const {filterByPrice,dispatch,ratingFilter,sortFilter} = useContext(filterContext);
    // ////// (categories)
    // //////// (categoriesName)
    return(
        <div className='filters'>
            <h3>Filters</h3> 

            <div className="filters-price">
            <p>Price range</p>
            <input onChange={(e)=>filterByPrice(e)} type='range' min='500' max='200000' list='values' id='price'/>
            <datalist id='values'>
                <option value='500' label='500'></option>
                <option value='1500' ></option>
                <option value='5000' ></option>
                <option value='20000' ></option>
                <option value='50000' ></option>
                <option value='100000'></option>
                <option value='150000'></option>
                <option value='200000' label='200000'></option>

            </datalist>

            </div>

            <div  className="filters-category">
           {/* <p>Category</p> */}
           
        {/* {categoriesName.map(item => <label><input onChange={filterByCategory} type = "checkbox" value ={item._id}/>{item.categoryName}</label>)} */}

           <label ><input onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})}  value='laptop' type='checkbox' name='category' />Laptop</label> 
           <label><input onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})} value='phones' type='checkbox' name='category' />Phone</label> 
           <label ><input onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})} value='watches'  type='checkbox' name='category' />Watches</label> 
           <label ><input  onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})} value='earbuds' type='checkbox' name='category' />Earbuds</label> 
           <label ><input onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})} value='gadgets' type='checkbox' name='category' />Gadgets</label> 
           </div>

           <div  className="filters-rating"> 
           <p>Rating</p>
           <label><input onChange={(e)=>ratingFilter(e)} type='radio' name='rating' value='4' /> 4 star & above</label> 
           <label><input onChange={(e)=>ratingFilter(e)} type='radio' name='rating' value='3' /> 3 star & above</label> 
           <label><input onChange={(e)=>ratingFilter(e)} type='radio' name='rating' value='2' /> 2 star & above</label> 
           <label><input onChange={(e)=>ratingFilter(e)} type='radio' name='rating' value='1' /> 1 star & above</label> 
           </div>

           <div  className="filters-sort">
           <p>Sort by</p>
           <label><input type='radio' name='sort' value ='highToLow' onChange={(e)=>sortFilter(e)} /> High to Low</label> 
           <label><input type='radio' name='sort' value ='lowToHigh' onChange={(e)=>sortFilter(e)} /> Low to High</label> 
           </div>

        </div>
    )
}