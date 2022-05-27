import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({click}) {

const dispatch =  useDispatch();


  return (
    
    <div className="navbar">
      {/* logo */}

      <div className="logo"><h3><Link to="/">Fake Kart</Link></h3></div>
      {/* links */}
      <div className="linksdiv">
        <ul className="links">
          <li className="cart__link">
              <Link to="/cart">
                 <span>
                Cart Items
                </span> 
              </Link>
          </li>
          
         
           
          
         
    
        </ul>
      </div> 
      <div className="hamburgermenu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* hamburger menu */}
    </div>
  )
}

export default Navbar
