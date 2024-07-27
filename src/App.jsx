
// import Header from './Layouts/Header/Header'
// import Main from './Layouts/Main/Main'
// import './App.css'

// function App() {

//   return (
//     <>
//       <Header />
//       <Main />
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import Header from './Layouts/Header/Header';
import Cart from './Components/Cart/Cart';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <Cart searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;
