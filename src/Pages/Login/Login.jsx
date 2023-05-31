import './Login.css';
import {Link} from 'react-router-dom';
import { useContext } from "react";

import { authContext } from "../../Contexts/AuthContext";

export default function Login(){

    const {login,signUp} = useContext(authContext)
    return(
        <div className='parentDiv' style={{}}>
        <div className= 'loginPage' >
            <h1>Login</h1>
            <p className='headingEmailAddress'>Email address</p>
            <input className='inputBoxEmailAddress' placeholder='shreyanshtiwari@gmail.com' type='text' />
            <p className='headingPassword' >Password</p>
            <input className='inputBoxPassword' placeholder='**************' type='password' /><br/>
          
            <p className='elements'>  <label>  <input className='rememberMe' type='checkbox' /> Remember me</label> <span> Forgot your Password? </span></p>
            <button className='buttonLogin' >Login</button>
            <Link className='createNewAccount' to='/signup'> Create New Account </Link> 
        </div>
        </div>
      
    )
}
// style={{marginTop:'5rem',display:'flex' ,alignItems:'center'
            // }}


 {/* <button onClick={login}>LogIn</button>
          <button onClick={signUp}>SignUp</button>  */}

        //   style={{marginTop:'10rem', marginLeft:'45rem',marginRight:'50rem',marginBottom:'13.5rem'}}