export const cartReducer =(state,action) =>{
    ////////// (action.type,action.payload)
    switch(action.type){

        case 'get':{
            return {...state, initialCart: action.payload};
        }
        case 'add':
        {
            return {...state, initialCart: action.payload};
        }

        case 'delete':
         {
           ////////// (action)
            return {...state, initialCart: action.payload};
         }
         
        case 'increment':
            {
               return {...state, initialCart: action.payload};
            }

        case 'decrement':
            {
                return {...state, initialCart: action.payload};
             }

        default:
         return state;
    }
}