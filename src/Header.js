import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="freezer-meals" alt="alt-image" />
     </div>
      <nav>
        <ul>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          {/* <li>
            <a href="#">How it works</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
