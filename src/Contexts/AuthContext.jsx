import { createContext, useState, useReducer } from "react";
import axios from 'axios';
import { authReducer } from "../Reducer/authReducer";
import { useNavigate,useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [state,dispatch] = useReducer(authReducer,initializer);

    const navigate = useNavigate();
    const location = useLocation();

    const [logInError,setLogInError] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);

  
    const login = async() =>{
        try{
            const credintials = {
                email: state.loginEmail,
                password: state.loginPassword
               
            }
            const response = await axios.post('/api/auth/login',credintials);

            const encodedToken = response.data.encodedToken;
            toast('Logged In!')
            localStorage.setItem('encodedToken',encodedToken);
            setLogInError('');
            setIsLoggedIn(true);
            let from = location.state?.from?.pathname || '/';
            navigate(from);
        }catch(error){
            toast.error('Invaild Credentials')
        }
    }

    // const guestLogin = async() =>{
    //     try{
    //         const credintials = {
    //             email:"adarshbalika@gmail.com",
    //             password: "adarshbalika" 
    //         };

    //         const response = await axios.post('/api/auth/login',credintials);

    //         const encodedToken = response.data.encodedToken;

    //         localStorage.setItem('encodedToken',encodedToken);
    //         setLogInError('');
    //         setIsLoggedIn(true);
    //         let from = location.state?.from?.pathname || '/';
    //         navigate(from);
    //     }catch(error){
    //         ////// (error);
    //         setLogInError(error.message);
    //     }
    // }

    const guestLogin = () =>{
        dispatch({type:'guestLogin'})
        login();
    }

    const signUp = async() =>{
      const cred =  {
            email: state.signupEmail,
            password: state.signupPassword,
            firstName: state.firstName,
            lastName: state.lastName
        }
        try{
            const response = await axios.post('/api/auth/signup',cred);
            const encodedToken = response.data.encodedToken;
            localStorage.setItem('encodedToken',encodedToken);

            toast('Great! Time to log In')
           
            navigate('/login')
    
        }catch(error){
            toast.error('Error from Server')
            }
    }

    const signUpDetails = () =>{
        
        if(!state.firstName || !state.lastName || !state.signupEmail || !state.signupPassword || !state.signupRePassword ){
            return   toast.error('filling all fields are mandatory')
        
        }

        if (state.signupPassword !== state.signupRePassword ){
           return   toast.error('Passwords do not match')
        }

        if(state.signupRePassword.length<8){
           return   toast.error('Password must be minimum 8 characters long')
        }

        signUp()
    }
    console.log(state);
    return(
        <div >
          <authContext.Provider value={{login,signUpDetails,dispatch,logInError,guestLogin,isLoggedIn,state,setIsLoggedIn}}>
          {children}
          </authContext.Provider>
        </div>
    )
}