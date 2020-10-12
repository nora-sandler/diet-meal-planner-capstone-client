import React from 'react';
import './App.css';


function Footer() {
  return (
      <ul className="Footer">
        <li>
          <a className="contact-icon" href="mailto:gulnora.touraeva@gmail.com?" title="email">
            <i class="fa fa-envelope clickables"></i>
          </a>
        </li>
        <li>
          <a className="contact-icon" href="https://github.com/nora-sandler?tab=repositories" title="github"
            target="_blank"><i class="fa fa-github clickables"></i>
          </a>
        </li>
        <li>
          <a className="contact-icon" href="https://www.linkedin.com/in/gulnora-sandler-6981936a/" title="linkedin"
            target="_blank"><i class="fa fa-linkedin-square clickables"></i>
          </a>
        </li>
      </ul>

  );
}

export default Footer;
