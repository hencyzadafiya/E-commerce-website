import React from 'react'
import { Link } from 'react-router-dom'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
  



<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand logo fs-1" to={"#"}>CK</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item dropdown px-3 ">
          <Link className="nav-link dropdown-toggle" to={"/shopcategory"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop by category
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"/accessories"}>Accessories</Link></li>
            <li><Link className="dropdown-item" to={"/bottoms"}>Bottoms</Link></li>
            <li><Link className="dropdown-item" to={"/dresses"}>Dresses</Link></li>
            <li><Link className="dropdown-item" to={"/footwear"}>Footwear</Link></li>
            <li><Link className="dropdown-item" to={"/tops"}>Tops</Link></li>
          </ul>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to={"/newarrivals"}>New arrivals</Link>
        </li>
        <li className="nav-item px-3 ">
          <Link className="nav-link active" to={"/collection"}>Collections</Link>
        </li>

      </ul>
  
      <div className='icn fs-5'>
        <span><RiInstagramFill/></span>
        <span><FaFacebookSquare /></span>
        <span><FaTwitterSquare /></span>
        <span><FaLinkedin/></span>
      </div>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
