import { useContext,useState } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { AddAddress } from "../../Context/AddAddress/AddAdress";
import { addressContext } from "../../Contexts/AddressContext";
import { useNavigate } from "react-router-dom";

export default function Profile(){

    const navigate = useNavigate();
    const {setIsLoggedIn} = useContext(authContext);

    const [show, setShow] = useState(false);
    const [mode,setMode] = useState('');
    const [previousAddress,setPreviousAddress] = useState({});
    const {state} = useContext(authContext);
    const{dispatch,addressList, removeAddress} = useContext(addressContext);

    const update_btn =(address) =>{
        //console.log(address);
        setShow(true);
        setMode('update');
        dispatch({type:'addAddress', payload:address});
        // setPreviousAddress(address)
    }

    const add_btn =() =>{
        ////console.log('hey');
        setShow(true);
        setMode('add');
        ////console.log('yo')
    }

    const logout = () =>{
        //////console.log('logout')
        navigate('/');
        setIsLoggedIn(false);
    }


    //console.log(previousAddress);

    ////console.log(show);
    //console.log('this',addressList);
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

                {addressList.map((address) =><li  className="addressComponent">
                    
                    <p>{address.name}</p>
                    <p>{address.houseNumber}</p>
                    <p>{address.city}</p>
                    <p>{address.state}</p>
                    <p>{address.country}</p>
                    <p>{address.pincode}</p>
                    <p>{address.contactNumber}</p>
                    <button onClick={()=>update_btn(address)}>Update</button>
                    <button onClick={()=>removeAddress(address)}>Remove</button>
                    
                </li>)}
                    <button onClick={()=>add_btn()}> + Add New Address</button>
                    <AddAddress onClose={()=>setShow(false)} show={show} previousAddress={previousAddress} mode={mode} /> 
            </div>
     
        </div>
    )
}