import './Filters.css';

export default function Filters(){
    return(
        <div className='filters'>
            <h3>Filters</h3> 

            <div className="filters-price">
            <p>Price</p>
            <input type='range' min='0' max='600000'  />
            </div>

            <div  className="filters-category">
           <p>Category</p>
           <label><input type='checkbox' name='category' />Laptop</label> 
           <label><input type='checkbox' name='category' />Phone</label> 
           <label><input type='checkbox' name='category' />Watches</label> 
           <label><input type='checkbox' name='category' />Earbuds</label> 
           <label><input type='checkbox' name='category' />Gadgets</label> 
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