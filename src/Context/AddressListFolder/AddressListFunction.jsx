// import './AddressListFunction.css';
import { useContext,useState } from "react";
import { AddAddress } from "../../Context/AddAddressModal/AddAdress";
import { addressContext } from "../../Contexts/AddressContext";

export const AddressListFunction = (propps) => {

    const [show, setShow] = useState(false);
    const [previousAddress,setPreviousAddress] = useState('')
    const [mode,setMode] = useState('');
    const{dispatch,addressList, removeAddress,setSelectedAddress_Id} = useContext(addressContext);

    if(!propps.show){
        return null;
    }

    const update_btn =(address) =>{
        setShow(true);
        setMode('update');
        setPreviousAddress(address);
        dispatch({type:'addAddress', payload:address});
    }

    const add_btn =() =>{
        setShow(true);
        setMode('add');
    }

    return(
        <div className="modalParent" >
        <div className="modalChild">
            {addressList.map((address) =><li  className="addressComponent">

            <label>
            <input type='radio' name='address' value={address._id} onChange={(e) => setSelectedAddress_Id(e.target.value)}  />
            <p>{address.name}</p>
            <p>{address.houseNumber}</p>
            <p>{address.city}</p>
            <p>{address.state}</p>
            <p>{address.country}</p>
            <p>{address.pincode}</p>
            <p>{address.contactNumber}</p>
            <button onClick={()=>update_btn(address)}>Update</button>
            <button onClick={()=>removeAddress(address)}>Remove</button>
            </label>
            </li>)}
            <button onClick={()=>add_btn()}> + Add New Address</button>
            <AddAddress onClose={()=>setShow(false)} show={show} previousAddress={previousAddress} mode={mode} /> 
        </div>
        </div>
    )
}