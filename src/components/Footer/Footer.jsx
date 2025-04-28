import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" className='' />
        <img src={facebook_icon} alt="" className='' />
        <img src={instagram_icon} alt="" className='' />
        <img src={twitter_icon} alt="" className='' />
      </div>
      <ul className='footer-links'>
        <li>Audio</li>
        <li>Help Center</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>

      </ul>
      <p className='copyright-text'>© 1997 - 2025 netflix.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
