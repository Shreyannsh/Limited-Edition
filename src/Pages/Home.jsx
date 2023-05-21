
import { useContext } from "react";
import { UniqueContext } from "../Context/MainContext";

export default function Home(){

    const {items} = useContext(UniqueContext);
   
    return(
        <div>
            <h1>This is Home</h1>
            {items.map((product)=><li key={product._id}>
                <p>{product.name}</p>
            </li>)}
        </div>
    )
}