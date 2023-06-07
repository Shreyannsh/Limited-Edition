import './Checkout.css'
import { useContext,useState} from "react";

import { addressContext, } from "../../../Contexts/AddressContext";

import  {AddressListFunction}  from "../../../Context/AddressListFolder/AddressListFunction";
import { cartContext } from '../../../Contexts/CartContext';
import { toast } from 'react-toastify'; 

export default function Checkout(){

   const {addressList,selectedAddress_Id} = useContext(addressContext);
   const {state,totalCartCount} = useContext(cartContext);
   const [show,setShow] = useState(false);

    const showAddresList =() =>{
        setShow(!show);
    }
    // const selectedAddress = addressList?.map((address) => //console.log( address._id));

   const selectedAddress = addressList?.find((address) => address._id === selectedAddress_Id);

    const placeOrder =() =>{
      toast('Feature will be added very soon!')
    }

    return(
        <div className='checkoutPage'>
            <div className='addressesSection'>
              <div className='addresses'>
                  <div>
                   <h3>Delivery Address</h3>
                  { selectedAddress ? <p>{selectedAddress.name},{selectedAddress.houseNumber},{selectedAddress.city},{selectedAddress.state},{selectedAddress.country},{selectedAddress.pincode},{selectedAddress.contactNumber}</p> : 'Select Address for shipping!'}
                   </div>
                   <div className='change-btn'>
                   <button onClick={()=>showAddresList()}>{show ? 'Close' :'Select'}</button>
                   </div>
                  </div>
                  <div className='addressList'style={{zIndex:'2'}}>
                      <AddressListFunction onClose={()=>setShow(false)} show={show} />
                       </div>
                 </div>
              <div className='orderDetails'>
                  <h2>ORDER DETAILS</h2>
                  <p  className='subHeading'> <span>Item </span> <span>Quantity</span> </p>
                  {state.initialCart.map((order) =><li className='itemName' key={order._id}>
                    <p className='orderName'> <span>{order.name}</span> <span>{order.qty} qty</span></p>
                  </li>)}
                  <h2>Price Details</h2>
                    <p className='priceDetail'>Cart Price <span>&#x20B9;{totalCartCount.totalAmount}</span> </p>
                    <p className='priceDetail'>Discount <span>&#x20B9;00</span></p>
                    <p className='priceDetail'>Delivery Charges <span>&#x20B9;250</span></p>
                    <p className='priceDetail'>Total Amount <span>&#x20B9;{totalCartCount.totalAmount + 250}</span></p>
                    <h2>DELIVER TO</h2>
                     { selectedAddress ? <p className='deliveryAddress'>{selectedAddress.name},{selectedAddress.houseNumber},{selectedAddress.city},{selectedAddress.state},{selectedAddress.country},{selectedAddress.pincode},{selectedAddress.contactNumber}</p> : <p> 'No shipping address added!' </p>}

                    <button onClick={()=>placeOrder()}>Place Order</button>
              </div>
        </div>
    )
}