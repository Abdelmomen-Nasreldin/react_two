import "./App.css";
import Header from "./components/Users/Header";
import FormComponent from "./components/Users/FormComponent";
import Welcome from "./components/Users/Welcome";
import React, {  useContext } from "react";
// import FormComponentUseReducer from "./components/Users/FormComponentUseReducer";
import { isLoggedInContext } from './components/store/login-context';

function App() {
  const isLoggedIn = useContext(isLoggedInContext);

  return (
    <>
      <Header />
      <div className="container">
        {isLoggedIn && <Welcome />}
        {/* {!isLoggedIn && <FormComponentUseReducer  setIsLoggedIn={setIsLoggedIn}/>} */}
        {!isLoggedIn && <FormComponent />}
      </div>
    </>
    
  );
}

export default App;
