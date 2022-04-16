import React, { useState } from "react";
import {Link} from 'react-router-dom'

import '../Styles/Navbar.css'

import logo from '../Images/DopotLogoPNG.png'




export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [active, setActive] = useState('home');

  return (
      
    <div className="navbar">
        Navbar
    </div>
  );
}