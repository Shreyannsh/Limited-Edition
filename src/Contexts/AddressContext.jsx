import { createContext,useState,useReducer, useEffect} from "react";
import { v4 as uuid } from 'uuid';

import { addressReducer } from "../Reducer/addressReducer";

export const addressContext = createContext();

export default function AddressProvider({children}){

    const initializer = {
        _id : '1',
        name:'Shreyannsh Tiwari',
        houseNumber: 'L 143 Leo Homes',
        city:'New Delhi',
        state:'Delhi',
        country:'India',
        pincode:'110067',
        contactNumber:'011-2345123'
    };

    const [addressList,setAddressList] = useState([]);

    const [selectedAddress_Id, setSelectedAddress_Id] = useState('')

    const [addState,dispatch] = useReducer(addressReducer,initializer);

    const removeAddress =(address) =>{
        setAddressList(addressList.filter((add) => add !== address ))
    }

    const addAddress = (addressType) =>{
        if(addressType === "add") {
            setAddressList([...addressList,{...addState,_id:uuid() }]);
            dispatch({type:'reset'});
        } else {
           const id = addState._id;
            const newList = addressList.map(address => {
                if (address._id === id) {
                  return { ...address, ...addState };
                } else {
                  return address;
                }
              });
              setAddressList(newList);
        }
       
    }

    useEffect(()=>{
        ( (addressType) =>{
            if(addressType === "add") {
                setAddressList([...addressList,{...addState,_id:uuid() }]);
                dispatch({type:'reset'});
            } else {
               const id = addState._id;
                const newList = addressList.map(address => {
                    if (address._id === id) {
                      return { ...address, ...addState };
                    } else {
                      return address;
                    }
                  });
                  setAddressList(newList);
            }
           
        }
    )('add');},
    [addState,addressList]);
    
    return(
        <div>
            <addressContext.Provider value={{addState,dispatch,addAddress, removeAddress, addressList,selectedAddress_Id,setSelectedAddress_Id}}>
            {children}
            </addressContext.Provider>
        </div>
    )
}