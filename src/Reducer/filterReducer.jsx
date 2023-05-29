
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
    }
}