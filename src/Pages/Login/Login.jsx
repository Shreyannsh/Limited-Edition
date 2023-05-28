import { useContext } from "react"
import { authContext } from "../../Contexts/AuthContext"

export default function Login(){

    const {login,signUp} = useContext(authContext)
    return(
        <div style={{padding:'15rem', height: '100%'}}>
              <button onClick={login}>LogIn</button>
          <button onClick={signUp}>SignUp</button> 
        </div>
    )
}