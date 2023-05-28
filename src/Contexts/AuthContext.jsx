import { createContext, useState } from "react";
import axios from 'axios';

export const authContext = createContext();
 
export default function AuthProvider({children}){

    const login = async() =>{
        try{
            const credintials = {
                email: 'shreyanshtiwari@gmail.com',
            password: 'shreyansh'
               
            }
            const response = await axios.post('/api/auth/login',credintials)

            // //console.log(response)
            const encodedToken = response.data.encodedToken

            //console.log(encodedToken)

            localStorage.setItem('encodedToken',encodedToken)

            

        }catch(error){
            //console.log(error)
        }
    }
   

    const signUp = async() =>{
      const cred =  {
            email: 'shreyanshtiwari@gmail.com',
            password: 'shreyansh',
            firstName:'Shreyansh',
            lastName:'Tiwari'
        }
            try{

            const response = await axios.post('/api/auth/signup',cred)    
            //console.log(response)
            //console.log(response.data.encodedToken)
          
    
            }catch(error){
                //console.log(error.message)
            }
    }
    
    return(
        <div >
          <authContext.Provider value={{login,signUp}}>
          {children}
          </authContext.Provider>
        </div>
    )
}