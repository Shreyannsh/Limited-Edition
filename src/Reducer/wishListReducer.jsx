export const WishListReducer = (state,action) =>{
    switch(action.type){
        case 'get':{
            return {...state,wishListItems: action.payload};
        }
        case 'add':{
            return {...state,wishListItems: action.payload};
        }
        case 'delete':{
            return {...state,wishListItems: action.payload};
        }
        default:
            return state;
    }
}