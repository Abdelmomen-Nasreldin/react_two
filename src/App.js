import "./App.css";
import Header from "./components/Users/Header";
import FormComponent from "./components/Users/FormComponent";
import Welcome from "./components/Users/Welcome";
import { useEffect, useState } from "react";
import FormComponentUseReducer from "./components/Users/FormComponentUseReducer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);   
    }
    console.log("useEffect1")

  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true")
    }else{
      localStorage.removeItem("isLoggedIn")
    }  
    console.log("useEffect2")
},[isLoggedIn])

  return (
    <div className="App">
      <Header setIsLoggedIn={setIsLoggedIn} />
      <div className="container"> 
        {isLoggedIn && <Welcome/>}
        {/* {!isLoggedIn && <FormComponentUseReducer  setIsLoggedIn={setIsLoggedIn}/>} */}
        {!isLoggedIn && <FormComponent setIsLoggedIn={setIsLoggedIn}/>}
      </div>
    </div>
  );
}

export default App;
