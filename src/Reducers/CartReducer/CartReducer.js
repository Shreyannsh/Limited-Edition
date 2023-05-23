import { useReducer } from "react"

export default function CartReducer(){

    const reducerFunction = (state,action) =>{
        switch(type){
            case 'add':{
                return {...state.cart}
            }
        }
    }
    const intializer = {
        cart :[]
    }
    const [state,dispatch] = useReducer(reducerFunction,intializer)

    return(
        <div>

        </div>
    )
}