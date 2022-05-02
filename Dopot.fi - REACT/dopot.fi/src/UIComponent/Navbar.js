import React, { useState } from "react";
import {Link} from 'react-router-dom'

import '../Styles/Navbar.css'

import logo from '../Images/Logo_SfondoBiancov2.jpg'




export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [active, setActive] = useState('home');

  return (
      <div>
      <div className="navbar">
            <div className="logo">
              <img src={logo}/>
            </div>
            <div className="menu">

              <div className="toggle-menu"
                   onClick={() => setOpenNavbar(!openNavbar)}>
                <div className="bar left"></div>
                <div className="bar middle"></div>
                <div className="bar right"></div>
              </div>

              <div className={`menu-content ${openNavbar ? 'open': ''} `}>
                <div className="item"
                    onClick=''>
                    <Link to=''>Cos'è Dopot</Link>
                </div>
                <div className="item"
                    onClick=''>
                    <Link to=''>Takenomics</Link>
                </div>
                <div className="item"
                    onClick=''>
                    <Link to=''>Area Developer</Link>
                </div>
                <div className="item"
                    onClick=''>
                    <Link to=''>Social</Link>
                </div>
              </div>

            </div>
        </div>
      </div>
    
  );
}