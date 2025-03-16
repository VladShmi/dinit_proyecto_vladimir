import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, completarTarea }) {
  if(tareas.length === 0){
    return <p className="sin-tareas">No hay tareas para mostrar.</p>;
  }

  return (
    <ul className="lista-tareas">
      {tareas.map(tarea => (
        <Tarea 
          key={tarea.id} 
          tarea={tarea} 
          eliminarTarea={eliminarTarea} 
          editarTarea={editarTarea} 
          completarTarea={completarTarea} 
        />
      ))}
    </ul>
  );
}

export default ListaTareas;