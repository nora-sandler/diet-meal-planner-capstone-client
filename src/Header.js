import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function Header(props) {
  return (
    <header>
      <nav>
      {/* <ul>
      <li>
      <Link to='/signup' >Sign Up</Link>
      </li>
      <li>
      <Link to='/login' >Login</Link>
      </li>
      
      </ul> */}
        {/* <ul>
          <li> */}
            <a href="/signup"> Sign Up </a>
          {/* </li>
          <li> */}
            <a href="/user/login"> Login </a>
          {/* </li>
        </ul> */}
      </nav>


    </header>
  );
}

export default Header;
