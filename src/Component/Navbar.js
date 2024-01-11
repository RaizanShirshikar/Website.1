import React from "react";
import "./Navbar.css";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function Navbar() {

  return (
    <>
      <nav> 
        <div className="logo">
          <img
            src="https://png.pngtree.com/template/20200227/ourmid/pngtree-real-estate-logo-design-template-image_353484.jpg"
            alt=""/>

            <Link className="heading" to="/">YourCompany</Link>
        </div>
          
        <div class=" sidebar">
        <i onClick={Hide} class="fa-solid fa-xmark"></i>
          <Link onClick={Hide}  className="menu1" to="/">HOME</Link>
          <Link onClick={Hide} className="menu1" to="/about">ABOUT</Link>
          <Link onClick={Hide}  className="menu1"to="/contact"> CONTACT</Link>
          
         
          {/* <a className="menubar" id="menubar" href=""><i class="fa-solid fa-bars"></i></a> */}
        </div>
          
        <div class="Nav-items">
          <Link  onClick={Hide} className="menu" to="/">HOME</Link>
          <Link onClick={Hide} className="menu" to="/about">ABOUT</Link>
          <Link  onClick={Hide} className="menu" to="/contact"> CONTACT</Link>
     <i onClick={Show}  class="fa-solid fa-bars"></i>
        </div>
      </nav>
     


    </>
  ); 

  function Show() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
  }
  function Hide() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
  }
}

export default Navbar;
