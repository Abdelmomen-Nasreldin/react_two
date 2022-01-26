import React, { useState } from 'react';
 const loginContext = React.createContext()

export const Login = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <loginContext.Provider value={setIsLoggedIn}>
            {props.children}
        </loginContext.Provider>
    )
}

 export default loginContext