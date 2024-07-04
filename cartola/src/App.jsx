import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Clubs from './components/Clubs.jsx';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Clubs searchTerm={searchTerm} />
    </div>
  );
};

export default App;
