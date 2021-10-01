import React from 'react'

export const ProyectsScreen = () => {

    const handleInputClick = ( e ) => {
        const {name} = e.target;
        window.open(name);
    }


    return (
        <div id="proyects" className="proyects screen">
            <h1>Proyectos</h1>
            <div className="proyects-conteiner">
                <div className="proyects-item conteiner">
                    <a
                    className="first hover"
                    target="_blank"
                    href="https://alela11i.github.io/candyCrush/" 
                    >
                        CandyCrush
                    </a>
                    <h3>Basicamente un CandyCrush hecho en JavaScript que posee 5 niveles de dificultad. Uno de mis primeros proyectos 
                    en JS por lo que el codigo es bastante dificil de entender. 
                    </h3>
                    <a
                    className="last hover"
                    target="_blank"
                    href="" 
                    >
                        Codigo
                    </a>
                </div>

                <div className="proyects-item conteiner">
                    <a
                    className="first hover"
                    target="_blank"
                    href="https://alela11i.github.io/gifapp/" 
                    >
                        GifApp
                    </a>
                    <h3> Uno de mis primeros proyectos en React, lo diseñe en el curso de Fernando Herrera, de Udemy.
                        Es basicamente un buscador de Gifs donde por cada busqueda devuelve los 10 primeros Gifs encontrados. 
                        Utilice una API muy famosa para Gifs (utilizada por WhatsApp entre otras aplicaciones).  </h3>
                    <a
                    className="last hover"
                    target="_blank"
                    href="" 
                    >
                        Codigo
                    </a>
                </div>

                <div className="proyects-item conteiner">
                    <a
                    className="first hover"
                    target="_blank"
                    href="https://alela11i.github.io/TODOapp/" 
                    >
                        TODOapp
                    </a>
                    <h3>Otro de mis proyectos diseñado en el curso de React. TODOapp es basicamente una app que sirve para agregar tareas que debo realizar.
                        A medida que se van realizando se pueden clickear sobre ellas para tacharlas y/o borrarlas. No se requirió Backend. 
                        No es un programa complejo en cuanto a lineas de código pero se utilizaron varios Hooks.</h3>
                    <a
                    className="last hover"
                    target="_blank"
                    href="" 
                    >
                        Codigo
                    </a>
                </div>
                
                <div className="proyects-item conteiner">
                    <a
                    className="first hover"
                    target="_blank"
                    href="https://mern-calendar-alelalli.herokuapp.com/" 
                    >
                        CalendarApp
                    </a>
                    <h3>Uno de mis últimos proyectos con React. Utilizando Node JS para el backend y Mongo DB como Base de Datos.
                        El proyecto se basa en un calendario (con login validado por backend) donde permite crear eventos y guardarlos.
                        Puedes compartir los eventos con el resto de las personas que se logean en la app pero solo vos podes modificar
                        tus eventos. Al logearse se genera un token con duracion de 2hs que se renueva, lo que matiene la sesion
                        abierta dentro del navegador hasta que se de logout. App desplegada en heroku.
                    </h3>
                    <a
                    className="last hover"
                    target="_blank"
                    href="" 
                    >
                        Codigo
                    </a>
                </div>
            </div>
        </div>
    )
}
