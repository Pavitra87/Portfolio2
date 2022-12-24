import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaBars,FaTimes } from "react-icons/fa";

const Navbar = () => {
    const[click,setClick]=useState(false);

    window.addEventListener("scroll",function(){
      const header=document.querySelector(".header")
      header.classList.toggle("active", window.scrollY >200)
    })
  return (
    <div>
      <div className="header">
        <Link to="/">
            <h1>Port<span>Folio</span></h1>
        </Link>

        <ul className={click ? "mobile-nav " : "nav-links "} onClick={() => setClick(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="toggle" onClick={()=> setClick(!click)}>
            {click ? <FaTimes/> : <FaBars/>}
        </button>

      </div>
    </div>
  )
}

export default Navbar
