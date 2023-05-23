import { useState } from "react"

export default function Login(){

    const getToken = async() =>{
        try{
            const credintials = {
                email: "adarshbalika@gmail.com",
                password: "adarshbalika"
               
            }

            const response = await fetch('/api/auth/login',{
                method: 'POST',
                body: JSON.stringify(credintials)
            })
             console.log(await response.json())
            const {encodedToken} = await response.json()
            console.log(encodedToken)

        }catch(error){
            console.log(error.message)
        }
    }
   

    const signUp = async() =>{
      const cred =  {
            email: 'shreyanshtiwari1997@gmail.com',
            password: 'shreyansh'
        }
            try{
            const response = await fetch('/api/auth/signup',{
                method: 'POST',
                body: JSON.stringify(cred)
            })
    
            console.log( response.json())
    
            }catch(error){
                console.log(error.message)
            }
    }
    
    return(
        <div style={{padding:'5rem'}}>
          <button onClick={getToken}>Get Token</button>
          <button onClick={signUp}>SignUp</button>
          
        </div>
    )
}