import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

function Tarea({ tarea, eliminarTarea, editarTarea, completarTarea }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

  const activarEdicion = () => {
    setModoEdicion(true);
  };

  const actualizarTarea = () => {
    editarTarea(tarea.id, nuevoTexto);
    setModoEdicion(false);
  };

  return (
    <li className={`tarea ${tarea.completada ? 'completada' : ''}`}>
      <div 
        className="checkbox" 
        onClick={() => completarTarea(tarea.id)}
      >
        {tarea.completada && <FontAwesomeIcon icon={faCheck} />}
      </div>

      {modoEdicion ? (
        <input 
          type="text" 
          className="input-editar" 
          value={nuevoTexto} 
          onChange={(e) => setNuevoTexto(e.target.value)} 
        />
      ) : (
        <span className="texto-tarea">{tarea.texto}</span>
      )}

      <div className="acciones">
        {modoEdicion ? (
          <button 
            className="boton-actualizar" 
            onClick={actualizarTarea}
          >
            Actualizar
          </button>
        ) : (
          <button 
            className="boton-accion" 
            onClick={activarEdicion}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}

        <button 
          className="boton-accion" 
          onClick={() => eliminarTarea(tarea.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}

export default Tarea;