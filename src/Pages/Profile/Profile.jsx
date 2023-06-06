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
    const [showProfile,setShowProfile] = useState(true);
    // const {dispatch} = useContext(wishListContext);

    const logout = () =>{
        dispatch({type:'clearWishList'})
        navigate('/login');
        setIsLoggedIn(false);
        localStorage.removeItem('encodedToken');
    }


    const showAddresses = () =>{
        setShowProfile(false);
        setShowAddress(true);
       
    }

    const showProfileDetails =() =>{
        setShowAddress(false);
        setShowProfile(true);
    }

    return(
        <div className="profilePage">

                <div className='headings'>
                    <h1 style={{color:showProfile?'rgb(255, 207, 35)':'rgb(253, 253, 253)',padding: showProfile? '12px 95px' : '10px 70px;' }} 
                    className='one' onClick={() =>showProfileDetails()}>Profile</h1>

                    <h1  style={{color:showAddress?'rgb(255, 207, 35)':'rgb(253, 253, 253)',padding: showAddress? '12px 95px' : '10px 70px;' }}  
                    className='two' onClick={()=>showAddresses()}>Address</h1>
                    
                </div>

                <div className='details'>

                    <div className="profileSection" style={{display:showProfile ? 'block': 'none'}}>
                    <div className='profileInfo'>
                    <p> <b> Account Holder -</b> {state?.firstName} {state?.lastName}</p>
                    <p> <b> Email Address -</b> {state?.loginEmail}</p>
                    </div>
                    <button onClick={() => logout()} >Logout</button>
                    </div>
                    
                    <div className='addressList'style={{display:showAddress ? 'block': 'none'}} >
                        <AddressListFunction show={true}/>
                    </div>
                </div>
        </div>
    )
}
//