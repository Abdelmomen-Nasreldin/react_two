import React, { useEffect, useState } from "react";
export const setLoginContext = React.createContext();
export const isLoggedInContext = React.createContext();

const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
    console.log("useEffect1");
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("isLoggedIn");
    }
    console.log("useEffect2");
  }, [isLoggedIn]);

  return (
    <setLoginContext.Provider value={setIsLoggedIn}>
      <isLoggedInContext.Provider value={isLoggedIn}>
        {props.children}
      </isLoggedInContext.Provider>
    </setLoginContext.Provider>
  );
};

export default LoginProvider;
