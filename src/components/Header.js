import React from 'react';

function Header({ mostrarCompletadas, setMostrarCompletadas }) {
  const toggleCompletadas = () => {
    setMostrarCompletadas(!mostrarCompletadas);
  };

  return (
    <header className="encabezado">
      <h1 className="titulo">Lista de Tareas</h1>
      <button 
        className="boton-toggle" 
        onClick={toggleCompletadas}
      >
        {mostrarCompletadas ? 'No mostrar completadas' : 'Mostrar completadas'}
      </button>
    </header>
  );
}

export default Header;