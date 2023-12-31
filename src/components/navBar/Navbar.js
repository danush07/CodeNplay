import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logoImg">
          <div className="logo">
            <img src={require("./codeNplay.png")} alt="logo" />
          </div>
        </Link>
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/about" className="about">
            <li>About</li>
          </Link>
          <Link to="/services" className="services">
            <li>Services</li>
          </Link>
          <Link to="/contact" className="home">
            <li>contact</li>
          </Link>
        </ul>
        <div className="Social">
          <Link to="" className="LinkedIn">
            <FaLinkedinIn size={30} alt="linkedin" />
          </Link>
          <Link to="" className="Youtube">
            <FaYoutube size={30} alt="youtube" />
          </Link>
          <Link to="" className="Instagram">
            <FaInstagram size={30} alt="insta" />
          </Link>
        </div>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross color="white" /> : <FaBars color="white" />}
        </button>
      </nav>
    </>
  );
}
export default Navbar
