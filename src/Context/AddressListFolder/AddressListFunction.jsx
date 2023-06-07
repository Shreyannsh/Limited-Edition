import './AddressListFunction.css';
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
            {addressList.map((address) =><li key={address._id} className="addressComponent">

            <label>
            <div>
               <input type='radio' name='address' value={address._id} onChange={(e) => setSelectedAddress_Id(e.target.value)}  />
            </div>
           
            <p className='userName'>{address.name}</p>
            <p className='addressInfo'>{address.houseNumber}</p>
            <p className='addressInfo'>{address.city}, {address.state}</p>
            <p className='addressInfo'>{address.country} - {address.pincode}</p>
            <p className='addressInfo'>{address.contactNumber}</p>
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
