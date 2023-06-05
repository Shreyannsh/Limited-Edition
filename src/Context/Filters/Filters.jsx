import { useContext, useState } from 'react';
import './Filters.css';
import { filterContext } from '../../Contexts/FilterContext';
import { categories } from '../../backend/db/categories';

export default function Filters(){

    const {state,dispatch} = useContext(filterContext);

    return(

        <div className='filters'>

            <h3 className='filtersHeading'>Filters</h3> 

            <span className='clear-btn' onClick={()=>dispatch({type:'clearFilter'})} > Clear</span>

            <div className="filters-price">
            <p>Price range</p>
        <input onChange={(e)=>dispatch({type:'filterByPrice',payload:e.target.value})} type='range' min='500' max='200000' list='values' id='price' value={state.price} />
            <datalist id='values'>
                <option value='500' label='500'></option>
                <option value='200000' label='200000'></option>
            </datalist>

            </div>

            <div  className="filters-category">
           
            {/* {categoriesName.map(item => <label><input onChange={filterByCategory} type = "checkbox" value ={item._id}/>{item.categoryName}</label>)} */}

           <label ><input onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})}  value='laptop' type='checkbox' name='category' checked={state.checkBoxValues.includes('laptop')} />Laptop</label> 
           <label><input onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})} value='phones' type='checkbox' name='category' checked={state.checkBoxValues.includes('phones')} />Phone</label> 
           <label ><input onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})} value='watches'  type='checkbox' name='category' checked={state.checkBoxValues.includes('watches')} />Watches</label> 
           <label ><input  onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})} value='earbuds' type='checkbox' name='category' checked={state.checkBoxValues.includes('earbuds')} />Earbuds</label> 
           <label ><input onClick={(e)=>dispatch({type:'checkBoxValue',payload:(e)})} value='gadgets' type='checkbox' name='category' checked={state.checkBoxValues.includes('gadgets')} />Gadgets</label> 
           </div>

           <div  className="filters-rating"> 
           <p>Rating</p>
           <label><input onChange={(e)=>dispatch({type:'filterByRating',payload:e.target.value})} type='radio' name='rating' value='4' checked={state.rating ==='4'? true : false} /> 4 star & above</label> 
           <label><input onChange={(e)=>dispatch({type:'filterByRating',payload:e.target.value})} type='radio' name='rating' value='3' checked={state.rating ==='3'? true : false}/> 3 star & above</label> 
           <label><input onChange={(e)=>dispatch({type:'filterByRating',payload:e.target.value})} type='radio' name='rating' value='2'checked={state.rating ==='2'? true : false} /> 2 star & above</label> 
           <label><input onChange={(e)=>dispatch({type:'filterByRating',payload:e.target.value})} type='radio' name='rating' value='1'checked={state.rating ==='1'? true : false}  /> 1 star & above</label> 
           </div>

           <div  className="filters-sort">
           <p>Sort by</p>
           <label><input type='radio' name='sort' value ='highToLow' onChange={(e)=>dispatch({type:'filterBySort',payload:e.target.value})} checked={state.sort ==='highToLow'? true : false} /> High to Low</label> 
           <label><input type='radio' name='sort' value ='lowToHigh' onChange={(e)=>dispatch({type:'filterBySort',payload:e.target.value})} checked={state.sort ==='lowToHigh'? true : false} /> Low to High</label> 
           </div>

        </div>
    )
}