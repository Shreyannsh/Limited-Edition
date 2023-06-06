export const authReducer = (state,action) => {
    switch(action.type){
        case 'loginEmail':{
            return {...state,loginEmail:action.payload.target.value}
        }
        case 'loginPassword':{
            return {...state,loginPassword:action.payload.target.value}
        }
        case 'firstName':{
            return {...state,firstName:action.payload.target.value}
        }
        case 'lastName':{
            return {...state,lastName:action.payload.target.value}
        }
        case 'signupEmail':{
            return {...state,signupEmail:action.payload.target.value}
        }
        case 'signupPassword':{
            return {...state,signupPassword:action.payload.target.value}
        }
        case 'signupRePassword':{
            return {...state,signupRePassword:action.payload.target.value}
        }

        case 'guestLogin':{
            ////// ('hey')
            return {...state,loginEmail:"adarshbalika@gmail.com", loginPassword:"adarshbalika", firstName:'Adarsh',
            lastName:'Balika',}
        }
    }
} 