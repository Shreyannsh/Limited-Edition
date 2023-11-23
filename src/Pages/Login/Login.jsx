import "./Login.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

import { authContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";

export default function Login() {
  const { state, dispatch, login, logInError } = useContext(authContext);

  const [showPassword, setShowPassword] = useState(false);

  const loginDetails = () => {
    if (!state.loginEmail) {
      toast.error("Enter Email Id");
    }
    if (!state.loginPassword) {
      toast.error("Enter Password!");
    }
    if (state.loginEmail && state.loginPassword) {
      login();
    }
  };

  return (
    <div className="parentDiv">
      <div className="loginPage">
        <h1>Login</h1>{" "}
        <span
          onClick={() => dispatch({ type: "guestLogin" })}
          className="guest"
        >
          Guest Login
        </span>
        <p className="headingEmailAddress">Email address</p>
        <input
          onChange={(e) => dispatch({ type: "loginEmail", payload: e })}
          className="inputBoxEmailAddress"
          placeholder="shreyanshtiwari@gmail.com"
          type="email"
          value={state?.loginEmail ?? ""}
        />
        <p className="headingPassword">Password</p>
        <div className="passwordSection">
          <input
            onChange={(e) => dispatch({ type: "loginPassword", payload: e })}
            className="inputBoxPassword"
            placeholder="**************"
            type={showPassword ? "text" : "password"}
            value={state?.loginPassword}
          />
          {showPassword ? (
            <IoMdEye
              onClick={() => setShowPassword(false)}
              className="showEye"
            />
          ) : (
            <IoIosEyeOff
              onClick={() => setShowPassword(true)}
              className="showEye"
            />
          )}
        </div>
        <br />
        <p className="elements">
          {" "}
          <label>
            {" "}
            <input className="rememberMe" type="checkbox" /> Remember me
          </label>{" "}
          <span> Forgot your Password? </span>
        </p>
        <span className="loginError">{logInError}</span>
        <button className="buttonLogin" onClick={loginDetails}>
          Login
        </button>
        <Link className="createNewAccount" to="/signup">
          {" "}
          Create New Account{" "}
        </Link>
      </div>
    </div>
  );
}
