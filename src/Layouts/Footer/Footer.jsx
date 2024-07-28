import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="content">
            <ul className='iconList'>
                <li><a href="#"><img src="/src/assets/facebook.png" alt="Facebook" /></a></li>
                <li><a href="#"><img src="/src/assets/whatsapp.png" alt="Whatsapp" /></a></li>
                <li><a href="#"><img src="/src/assets/instagram.png" alt="Instagram" /></a></li>
            </ul>
        </div>
            <p>Ramarac &#169;</p>
    </div>
  )
}
