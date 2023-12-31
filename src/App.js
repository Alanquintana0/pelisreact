import { useState } from "react";
import { Agregar } from "./components/Agregar";
import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";

function App() {

    const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Peliculas</h1>
        </header>

        {/* Barra de navegacion*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        <section id="content" className="content">
            {/*Lista de peliculas */}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            {/*Buscar pelicula*/}
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            {/*Anadir pelicula*/}
            <Agregar setListadoState={setListadoState}/>
        </aside>

        {/*Footer de la pagina*/}
        <footer className="footer">
            &copy; Curso React JS <a href="https://www.linkedin.com/in/miguel-alan-quintana-montano-063321279/">linkedin</a>
        </footer>
    </div>
  );
}

export default App;
