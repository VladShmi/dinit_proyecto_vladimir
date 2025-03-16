import React, { useState } from 'react';

function FormularioTareas({ agregarTarea }) {
  const [texto, setTexto] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      agregarTarea({ texto });
      setTexto('');
    }
  };

  return (
    <form className="formulario-tareas" onSubmit={manejarSubmit}>
      <input 
        type="text" 
        className="input-tarea"
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Nueva tarea" 
        required 
      />
      <button type="submit" className="boton-agregar">
        Agregar
      </button>
    </form>
  );
}

export default FormularioTareas;