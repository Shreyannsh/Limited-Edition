import './Profile.css'

import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

import { authContext } from "../../Contexts/AuthContext";
// import  {AddressListFunction}  from "../../Context/AddressListFolder/AddressListFunction";
import { wishListContext } from "../../Contexts/WishListContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartContext } from '../../Contexts/CartContext';

export default function Profile(){

    const navigate = useNavigate();
    const {clearCart} = useContext(cartContext);
    const {setIsLoggedIn} = useContext(authContext);
    const {state} = useContext(authContext);
    const {clearWishlist} = useContext(wishListContext);
    const [showAddress, setShowAddress] = useState(false);
    const [showProfile,setShowProfile] = useState(true);
    const {dispatch} = useContext(authContext);
    // const [show,setShow] = useState();

    const logout = () =>{
        clearCart();
        clearWishlist();
        dispatch({type:'logout'})
        navigate('/login');
        setIsLoggedIn(false);
        localStorage.removeItem('encodedToken');
        toast('Logged Out!')
    }


    const showAddresses = () =>{
        setShowProfile(false);
        setShowAddress(true);
        // setShow(true)
       
    }

    const showProfileDetails =() =>{
        setShowAddress(false);
        setShowProfile(true);
        // setShow(false)
    }
  
    return(
        <div className="profilePage">

                <div className='headings'>
                    <h1 style={{color:showProfile?'rgb(255, 207, 35)':'rgb(253, 253, 253)',padding: showProfile? '12px 95px' : '10px 70px' }} 
                    className='one' onClick={() =>showProfileDetails()}>Profile</h1>

                    <h1  style={{color:showAddress?'rgb(255, 207, 35)':'rgb(253, 253, 253)',padding: showAddress? '12px 95px' : '10px 70px' }}  
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
                        {/* <AddressListFunction show={show}/> */}
                    </div>
                </div>
        </div>
    )
}
//