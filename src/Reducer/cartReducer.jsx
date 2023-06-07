export const cartReducer =(state,action) =>{
    
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
        case 'clearCart':
            {
                return {...state, initialCart: []};
             }
        default:
         return state;
    }
}