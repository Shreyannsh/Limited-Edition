import './Login.css';
import {Link} from 'react-router-dom';
import { useContext } from "react";

import { authContext } from "../../Contexts/AuthContext";

export default function Login(){

    const {state,dispatch,login,logInError} = useContext(authContext)

    return(
        <div className='parentDiv' style={{}}>
        <div className= 'loginPage' >
            <h1>Login</h1> <span onClick ={() =>dispatch({type:'guestLogin'})}className='guest'>Guest Login</span>
            <p className='headingEmailAddress'>Email address</p>
            <input onChange={(e) =>dispatch({type:'loginEmail',payload: e})}className='inputBoxEmailAddress' placeholder='shreyanshtiwari@gmail.com' type='email' value={state?.loginEmail ?? ''} />
            <p className='headingPassword' >Password</p>
            <input onChange={(e) =>dispatch({type:'loginPassword',payload: e})} className='inputBoxPassword' placeholder='**************' type='password' value={state?.loginPassword ?? ''}  /><br/>
          
            <p className='elements'>  <label>  <input className='rememberMe' type='checkbox' /> Remember me</label> <span> Forgot your Password? </span></p>
            <span className='loginError'>{logInError}</span>
            <button className='buttonLogin' onClick={login} >Login</button>
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