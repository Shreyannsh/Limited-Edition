import './Profile.css'

import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

import { authContext } from "../../Contexts/AuthContext";
import  {AddressListFunction}  from "../../Context/AddressListFolder/AddressListFunction";
import { cartContext} from "../../Contexts/CartContext";
import { wishListContext } from "../../Contexts/WishListContext";


export default function Profile(){

    const navigate = useNavigate();
    const {setIsLoggedIn} = useContext(authContext);
    const {state} = useContext(authContext);
    const {dispatch} = useContext(wishListContext);
    const [showAddress, setShowAddress] = useState(false);
    // const {dispatch} = useContext(wishListContext);

    const logout = () =>{
        dispatch({type:'clearWishList'})
        navigate('/');
        setIsLoggedIn(false);
        localStorage.removeItem('encodedToken');
    }


    const showAddresses = () =>{
        setShowAddress(true);
    }

    return(
        <div className="profilePage">

            <div className="profileSection">
            <h1>Profile</h1>
            <p>Account Holder - {state?.firstName} {state?.lastName}</p>
            <p>Email Address - {state?.loginEmail}</p>
            <button onClick={() => logout()} >Logout</button>
            </div>  

            <div className="addresSection">
                <h1 onClick={()=>showAddresses()}>Address</h1>
                <div style={{display:{showAddress ? 'block': 'hidden'}}}>
              <AddressListFunction show={true}/>
              </div>
            </div>
     
        </div>
    )
}