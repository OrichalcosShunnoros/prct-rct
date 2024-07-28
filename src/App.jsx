import React, { useState } from 'react';
import Header from './Layouts/Header/Header';
import Cart from './Components/Cart/Cart';
import Footer from './Layouts/Footer/Footer'
import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main><Cart searchTerm={searchTerm} /></main>
      <Footer/ >
    </div>
  );
}


