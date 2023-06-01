import { createContext, useState, useReducer } from "react";
import axios from 'axios';
import { authReducer } from "../Reducer/authReducer";
export const authContext = createContext();
 
export default function AuthProvider({children}){

    const initializer = {
        loginEmail:'',
        loginPassword:'',
        firstName:'',
        lastName:'',
        signupEmail:'',
        signupPassword:'',
        signupRePassword:''
    }

    const [state,dispatch] = useReducer(authReducer,initializer)

    const [logInError,setLogInError] = useState('')
    const [signupError,setSignupError] = useState('')

  
    const login = async() =>{
        try{
            const credintials = {
                email: state.loginEmail,
                password: state.loginPassword
               
            }
            const response = await axios.post('/api/auth/login',credintials)

            const encodedToken = response.data.encodedToken;

            localStorage.setItem('encodedToken',encodedToken)
            setLogInError('')
        }catch(error){
            console.log(error)
            setLogInError(error.message)
        }
    }

    const guestLogin = async() =>{
        try{
            const credintials = {
                email:"adarshbalika@gmail.com",
                password: "adarshbalika" 
            }

            const response = await axios.post('/api/auth/login',credintials)

            const encodedToken = response.data.encodedToken;

            localStorage.setItem('encodedToken',encodedToken)
            setLogInError('')
        }catch(error){
            console.log(error)
            setLogInError(error.message)
        }
    }

    const signUp = async() =>{
      const cred =  {
            email: state.signupEmail,
            password: state.signupPassword,
            firstName: state.firstName,
            lastName: state.lastName
        }
        try{
            const response = await axios.post('/api/auth/signup',cred)    
    
        }catch(error){
                console.log(error.message)
            }
    }

    const signUpDetails = () =>{
        
        if(!state.firstName || !state.lastName || !state.signupEmail || !state.signupPassword || !state.signupRePassword ){
            alert('filling all fields are mandatory')
        
        }

        if (state.signupPassword !== state.signupRePassword ){
            alert('Passwords do not match')
        }

        if(state.signupRePassword.length<8){
            alert('Password must be minimum 8 character long')
        }

        signUp()
    }

    console.log( signupError);



    return(
        <div >
          <authContext.Provider value={{login,signUpDetails,dispatch,logInError,guestLogin, signupError}}>
          {children}
          </authContext.Provider>
        </div>
    )
}