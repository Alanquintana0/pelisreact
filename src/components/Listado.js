import React, { useEffect } from 'react'
export const Listado = () => {

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        
        console.log(peliculas)
    }

    useEffect(() =>{
        conseguirPeliculas()
    }, []);

    return(
        <>
        {/*Contenido principal*/}
        
            {/*Aqui van las pelis*/}
            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Alanqu Web</p>
                <button className="edit">Editar</button>
                <button className="delete">Eliminar</button>
            </article>
        </>
    )
}