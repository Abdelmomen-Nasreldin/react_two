import React, { useEffect, useRef, useState, useContext } from "react";
import { setLoginContext } from "../store/login-context";
import classes from "./FormComponent.module.css"
// import { isLoggedInContext } from './../../App';



const FormComponent = () => {
  const setIsLoggedIn = useContext(setLoginContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitRef = useRef();
  let isEmailValid = email.includes('@')  ? true : false;
  let isPasswordValid = password.length < 5 ? false : true;


  useEffect(() => {
    const inputTimer = setTimeout(() => {
      if (!isEmailValid || !isPasswordValid) {
        submitRef.current.disabled = true;
      } else {
        submitRef.current.disabled = false;
      }
      console.log("useEffect3")

    }, 600);

    return () => {
      console.log("clear");
      clearTimeout(inputTimer);
    };
  }, [isEmailValid, isPasswordValid]);
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  return (
    <div className="">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`${isEmailValid? classes.valid : classes.inValid} form-control`}
            // className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`${isPasswordValid? classes.valid : classes.inValid} form-control`}
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          ref={submitRef}
          onClick={formSubmitHandler}
        />
      </form>
    </div>
  );
};

export default FormComponent;
