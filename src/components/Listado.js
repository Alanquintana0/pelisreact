import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";
export const Listado = ({listadoState, setListadoState}) => {
  //const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0)

  useEffect(() => {
    console.log("Componentes del listado de peliculas cargado!!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();

    //Filtrar para que elimine del arreglo la peli que ya no quiero
    let nuevoArrayPelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))

    //Actualizar los datos en el localStorage
    setListadoState(nuevoArrayPelis);

    //Actualizar estado del listado
    localStorage.setItem('pelis', JSON.stringify(nuevoArrayPelis));
    alert("Elemento eliminado")
  }

  return (
    <>
      {/*Contenido principal*/}

      {/*Aqui van las pelis*/}
      {listadoState != null ? 
      listadoState.map((peli) => {
        return (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button className="edit" onClick={ () => {
                setEditar(peli.id)
            }}>Editar</button>
            <button className="delete" onClick={ () => borrarPeli(peli.id) }>Eliminar</button>

            {/*Aparece formulario de editar*/}
            {editar === peli.id && (
                <Editar peli = {peli}
                conseguirPeliculas={conseguirPeliculas}
                setEditar={setEditar}
                setListadoState={setListadoState}
                />
            )}
          </article>
        );
      })

      : <h2>No hay peliculas para mostrar</h2>
      }
    </>
  );
};
