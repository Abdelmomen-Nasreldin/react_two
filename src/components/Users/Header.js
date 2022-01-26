import React from 'react';
import NavbarComponent from './NavbarComponent';

const Header = ({setIsLoggedIn}) => {
  return <div>
      <NavbarComponent setIsLoggedIn={setIsLoggedIn}/>
      
  </div>;
};

export default Header;
