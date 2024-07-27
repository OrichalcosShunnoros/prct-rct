import React from 'react';
import './Header.css';
import Navbar from '../../Components/Navbar/Navbar';

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="cont-sup">
      <Navbar />
      <div className="msj">
        <p>Free shipping nationwide for purchases over $150,000.00 COP</p>
      </div>
      <input
        className="srch"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
