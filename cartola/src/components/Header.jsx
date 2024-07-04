import React from 'react';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="app-header">
      <h1>Lista de Clubes</h1>
      <input
        type="text"
        placeholder="Buscar clubes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
};

export default Header;