import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li>
          <Link to='/Linkedin' >Linkedin</Link>
        </li>
        <li>
        <Link to='/Github' >Github</Link>
        </li>
        <li>
        <Link to='/Email' >Email</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
