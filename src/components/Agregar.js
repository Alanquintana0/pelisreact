import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/guardarEnStorage';

export const Agregar = ({setListadoState}) => {

  const tituloComponente = "Anadir pelicula"
  const [ peliState, setPeliState ] = useState({
    titulo: '',
    descripcion: ''
  });

  const { titulo, descripcion } = peliState;

  const getFormData = e => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target
    let titulo = target.titulo.value
    let descripcion = target.descripcion.value


    let pelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    //Guardar estado
    setPeliState(pelicula)

    //Actualizar el estado del listado principal
    setListadoState(elementos => {
      return [...elementos, pelicula];
    })

    //Guardar en almacenamiento local
    guardarEnStorage("pelis", pelicula)
    
  }

  return (
    <>
      <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>{(titulo && descripcion) && "Has creado la pelicula: " + titulo}</strong>
        <form onSubmit={getFormData}>
          <input type="text" 
                      id='titulo'
                      name='titulo'
                      placeholder="titulo" />
          <textarea id='descripcion'
                      name='descripcion'
                      placeholder="Descripcion"></textarea>
          <input type="submit" 
                      id='save'
                      value="Guardar" />
        </form>
      </div>
    </>
  );
}
