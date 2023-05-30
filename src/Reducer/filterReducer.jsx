
export const filterReducer = (state,action)=>{
    switch(action.type){
        case 'allProducts' :{
            ////console.log('hey')
            return {...state, productList :action.payload}
        }

        case 'addCategory' :{
            //console.log(action,'action')
            return {...state, productList: action.payload}
        }

        case 'checkBoxValue':{
            return {
               ...state, checkBoxValues: action.payload.target.checked ?[...state.checkBoxValues, action.payload.target.value] : state.checkBoxValues.filter((cbv) => cbv !== action.payload.target.value)
            }
        }

        default:
            return state;
    }
}