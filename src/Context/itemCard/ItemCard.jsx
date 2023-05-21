export default function ItemCard({item}){
    return(
        <div>
            <img src='' alt=''/>
            <p>{item.name}</p>
            <p>Brand: {item.brand}</p>
            <p>Price: {item.price}</p>
        </div>
    )
}