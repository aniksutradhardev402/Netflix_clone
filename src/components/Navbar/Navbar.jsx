import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import dropdown_icon from '../../assets/caret_icon.svg'
import { useRef,useEffect } from 'react'
import {logout} from '../../Firebase'
const Navbar = () => {


  const navref = useRef();

  useEffect(() => {
      window.addEventListener('scroll', () => { 
        if (window.scrollY >= 80) {
          navref.current.classList.add('nav-dark')
        } else {
          navref.current.classList.remove('nav-dark')
        }
      })}, [])

  return (
    <div className='navbar' ref={navref}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
            <li>Home</li>
            <li>TV SHOWS</li>
            <li>Movies</li>
            <li>New & Populer</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>

        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="Search Icon" className='icons'/>
            <p>Children</p>
            <img src={bell_icon} alt="Bell Icon" className='icons'/>
            <div className="navbar-profile">
            <img src={profile_icon} alt="Profile Icon" className='icons'/>
            <img src={dropdown_icon} alt="Dropdown Icon" className='icons'/>
            <div className="dropdown">
              <p onClick={() => {logout()}}>Sign out of Profile</p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
