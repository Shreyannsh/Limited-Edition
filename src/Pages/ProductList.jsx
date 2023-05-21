import { useContext } from "react";

import { UniqueContext } from "../Context/MainContext";

export default function ProductList(){

    const {items} = useContext(UniqueContext);

    return(
        <div>
            <h1>This is Product List</h1>
            {items.map((product)=><li key={product._id}>
                <p>{product.title}</p>
            </li>)}
        </div>
    )
}