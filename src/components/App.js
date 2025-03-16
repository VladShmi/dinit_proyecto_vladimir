import React, { useState } from 'react';
import Header from './Header';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  const agregarTarea = (tarea) => {
    if (!tarea.texto.trim()) return;
    const nuevaTarea = {
      ...tarea,
      id: Date.now(),
      completada: false,
    };
    setTareas(prev => [...prev, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  };

  const editarTarea = (id, nuevoTexto) => {
    if (!nuevoTexto.trim()) return;
    setTareas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, texto: nuevoTexto } : t
      )
    );
  };

  const completarTarea = (id) => {
    setTareas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const tareasFiltradas = tareas.filter(tarea => {
    return mostrarCompletadas ? true : !tarea.completada;
  });

  return (
    <div className="contenedor">
      <Header 
        mostrarCompletadas={mostrarCompletadas} 
        setMostrarCompletadas={setMostrarCompletadas} 
      />
      <FormularioTareas agregarTarea={agregarTarea} />
      <ListaTareas 
        tareas={tareasFiltradas} 
        eliminarTarea={eliminarTarea} 
        editarTarea={editarTarea} 
        completarTarea={completarTarea} 
      />
    </div>
  );
}

export default App;