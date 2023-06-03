import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import {Navigate, useLocation} from 'react-router-dom';

export default function RequiresAuth({children}){

    const {isLoggedIn} = useContext(authContext);
    const location = useLocation();

    return(
        <div>
          {isLoggedIn? (children) : <Navigate to="/login" state={{ from: location }} />}
        </div>
    )
}