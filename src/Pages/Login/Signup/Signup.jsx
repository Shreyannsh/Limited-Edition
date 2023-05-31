import './Signup.css';
import {Link} from 'react-router-dom'
import { useContext } from "react";

// import { authContext } from "../../Contexts/AuthContext";

export default function Signup(){

    // const {login,signUp} = useContext(authContext);
        console.log('hey')
    return(
        <div className='parentDiv' style={{}}>
        <div className= 'signupPage' >
            <h1>Sign Up</h1>

            <p className='heading' >First Name</p>
            <input className='inputBox' placeholder='Shreyansh' type='text'  />

            <p className='heading'> Last Name</p>
            <input className='inputBox' placeholder='Tiwari' type='text'  />

            <p className='heading'>Email address</p>
            <input className='inputBox' placeholder='shreyanshtiwari@gmail.com' type='text' />

            <p className='heading' >Enter Password</p>
            <input className='inputBox' placeholder='**************' type='password' />

            <p className='heading' >Re-Enter Password</p>
            <input className='inputBox' placeholder='**************' type='password' />

            <label  className='TandC' >  <input type='checkbox' /> I accept all terms & conditions   </label>

            <button className='buttonLogin' >Create New Account</button>

            <Link className='createNewAccount' to='/login'>Already have an account </Link> 
        </div>
        </div>
      
    )
}