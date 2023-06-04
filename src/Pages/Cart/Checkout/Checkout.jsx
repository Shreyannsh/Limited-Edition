import './Checkout.css'
import { useContext,useState} from "react";

import { addressContext, } from "../../../Contexts/AddressContext";

import  {AddressListFunction}  from "../../../Context/AddressListFolder/AddressListFunction";
import { cartContext } from '../../../Contexts/CartContext';
export default function Checkout(){

   const {addressList,selectedAddress_Id} = useContext(addressContext);
   const {state,totalCartCount} = useContext(cartContext);
    //console.log(selectedAddress_Id);
    const [show,setShow] = useState(false);

    const showAddresList =() =>{
        setShow(!show);
    }

   const selectedAddress = addressList?.find((address) => address._id === selectedAddress_Id);

    //console.log(selectedAddress);

    return(
        <div className='checkoutPage'>
            <div className='addressesSection'>
              <div className='addresses'>
                  <div>
                   <h3>Delivery Address</h3>
                   <p>{selectedAddress.name},{selectedAddress.houseNumber},{selectedAddress.city},{selectedAddress.state},{selectedAddress.country},{selectedAddress.pincode},{selectedAddress.contactNumber}</p>
                   </div>

                  <div className='change-btn'>
                  <button onClick={()=>showAddresList()}>{show ? 'Close' :'Change'}</button>
                    </div>
                  </div>
                  <div className='addressList'style={{zIndex:'2'}}>
                      <AddressListFunction onClose={()=>setShow(false)} show={show} />
                       </div>
                 </div>
              <div className='orderDetails'>
                  <h2>ORDER DETAILS</h2>
                  {state.initialCart.map((order) =><li>
                    <p>{order.name} {order.qty }</p>
                  </li>)}
                  <h2>Price DETAILS</h2>
                    <p>Cart Price {totalCartCount.totalAmount}</p>
                    <p>Discount 00</p>
                    <p>Delivery Charges 250</p>
                    <p>Total Amount {totalCartCount.totalAmount + 250}</p>
                    <h2>DELIVER TO</h2>
                    <p>{selectedAddress.name},{selectedAddress.houseNumber},{selectedAddress.city},{selectedAddress.state},{selectedAddress.country},{selectedAddress.pincode},{selectedAddress.contactNumber}</p>

                    <button>Place Order</button>
              </div>
        </div>
    )
}