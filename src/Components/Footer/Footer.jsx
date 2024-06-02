import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whataspp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
            
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Product</li>
                    <li>Office</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icon-container">
                        <img src={instagram_icon} alt="" />
                    </div>
                    <div className="footer-icon-container">
                        <img src={pintrest_icon} alt="" />
                    </div>
                    <div className="footer-icon-container">
                        <img src={whataspp_icon} alt="" />
                    </div>
                </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All right reserved</p>
            </div>

        </div>
    
  )
}