import './Signup.css';
import {Link} from 'react-router-dom'
import { useContext } from "react";

 import { authContext } from '../../../Contexts/AuthContext'; 

export default function Signup(){

     const {dispatch,signUpDetails} = useContext(authContext);
    return(
        <div className='parentDiv' style={{}}>
        <div className= 'signupPage' >
            <h1>Sign Up</h1>

            <p className='heading' >First Name</p>
            <input onChange={(e) =>dispatch({type:'firstName',payload: e})} className='inputBox' placeholder='Shreyansh' type='text'  />

            <p className='heading'> Last Name</p>
            <input onChange={(e) =>dispatch({type:'lastName',payload: e})} className='inputBox' placeholder='Tiwari' type='text'  />

            <p className='heading'>Email address</p>
            <input onChange={(e) =>dispatch({type:'signupEmail',payload: e})} className='inputBox' placeholder='shreyanshtiwari@gmail.com' type='email' />

            <p className='heading' >Enter Password</p>
            <input onChange={(e) =>dispatch({type:'signupPassword',payload: e})} className='inputBox' placeholder='**************' type='password' />

            <p className='heading' >Re-Enter Password</p>
            <input onChange={(e) =>dispatch({type:'signupRePassword',payload: e})}  className='inputBox' placeholder='**************' type='password' />

            <label  className='TandC' >  <input type='checkbox' /> I accept all terms & conditions   </label>

            <button className='buttonLogin' onClick={signUpDetails}>Create New Account</button>

            <Link className='createNewAccount' to='/login'>Already have an account </Link> 
        </div>
        </div>
      
    )
}