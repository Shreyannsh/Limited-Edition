import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

import { authContext } from "../../Contexts/AuthContext";
import  {AddressListFunction}  from "../../Context/AddressListFolder/AddressListFunction";


export default function Profile(){

    const navigate = useNavigate();
    const {setIsLoggedIn} = useContext(authContext);
    const {state} = useContext(authContext);

    const logout = () =>{

        navigate('/');
        setIsLoggedIn(false);
        localStorage.removeItem('encodedToken')
    }

    return(
        <div style={{paddingTop:'5rem',heigth:'100vh'}}>

            <div className="profile">
            <h1>Profile</h1>
            <p>Account Holder - {state?.firstName} {state?.lastName}</p>
            <p>Email Address - {state?.loginEmail}</p>
            <button onClick={() => logout()} >Logout</button>
            </div>  

            <div>
                <h1>Address</h1>
              <AddressListFunction show={true}/>
            </div>
     
        </div>
    )
}