import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="nav">
        <img src="/src/assets/prfl.avif" alt="perfil" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </div>
  )
}
