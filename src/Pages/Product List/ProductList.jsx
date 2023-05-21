import './ProductList.css'

import { useContext } from "react";

import { UniqueContext } from "../../Components/MainContext";
import Filters from "../../Context/Filters/Filters";
import ItemCard from '../../Context/itemCard/ItemCard';

export default function ProductList(){

    const {items} = useContext(UniqueContext);

    return(
        <div className='ProductListPage'>
            <div className='filters'>
            <Filters />
            </div>
        <div>
        <h1>Showing all products</h1>
        <div className='allProducts'>
            {items.map((product)=>(
                <ItemCard item={product} />
            ))}
        </div>
            </div>
        </div>
    )
}