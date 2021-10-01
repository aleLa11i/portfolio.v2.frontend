import * as React from "react";
import icon from '../../assets/favicon.ico';
import data from "./navbar.json"

export const NavBar = () => {
  return (
    <div className="navbar">
      <img className='icon-navbar' src={icon} alt="logo" />
      {
        data?.map( link =>(
          <a
            key={link.label}
            href={link.href}
          >
            <span>
              {link.label}
            </span>
            <i></i>
          </a>
        ))
      }
    </div>
  );
};
