import "./App.css";
import Header from "./components/Users/Header";
import FormComponent from "./components/Users/FormComponent";
import Welcome from "./components/Users/Welcome";
import React, { useEffect, useState } from "react";
import FormComponentUseReducer from "./components/Users/FormComponentUseReducer";

export const isLoggedInContext = React.createContext();
function App() {
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
    <isLoggedInContext.Provider value={setIsLoggedIn}>
      <Header />
      <div className="container">
        {isLoggedIn && <Welcome />}
        {/* {!isLoggedIn && <FormComponentUseReducer  setIsLoggedIn={setIsLoggedIn}/>} */}
        {!isLoggedIn && <FormComponent />}
      </div>
    </isLoggedInContext.Provider>
  );
}

export default App;
