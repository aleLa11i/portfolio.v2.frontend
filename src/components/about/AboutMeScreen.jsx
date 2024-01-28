import React, { useState } from 'react';
import me from "../../assets/me/me2.png"

export const AboutMeScreen = () => {
    const [showDescription, setShowDescription] = useState(false)

    return (
        <section className='about' id='about'>
            <h2>Un poco sobre mi..</h2>
            <div>
                <img className='me' src={me} alt="me" />
            </div>
            <div>
                {
                    showDescription &&
                    <>
                        <p>
                            Egresado como Técnico Electronico del colegio secundario San José en Rosario Argentina. Desde mi infancia senti pasión por la informática y los avances tecnológicos, fue en la escuela secundaria cuando programe por primera vez a los 15 años en lenguaje C++ y fue cuando me di cuenta que crear aplicaciones era lo que me gustaba. Luego de graduarme, comence la carrera en Ingeniería en Sistemas de la Información la cual actualmente estoy cursando 3er año.
                        </p>
                        <p>
                            La época pandemica me hizo adentrarme más en otros conocimientos como diferentes lenguajes en los cuales están HTML, CSS y JavaScript que son fuertes candidatos hoy en día en el desarrollo de aplicaciones web. Sumado a algunos frameworks como React y Node Js.
                        </p>
                        <p>
                            Actualmente, ademas de los estudios, trabajo en el sector de Soporte IT para la empresa SerTIC de Rosario, lo que me ayudo a ampliar mis conocimientos en el rubro y ganar experiencia en el ámbito laboral, y como freelancer creando páginas web en lo que queda de mi tiempo libre. Dentro de SerTIC estuve involucrado en varios proyectos de desarrollo Web como por ejemplo una landing page o mails con handlebars en la plataforma VTEX.
                        </p>
                    </>
                }
                <div
                    className='description-button'
                >
                    <p>
                        Mi objetivo actualmente es aprender cada día más y siempre estar al tanto de las novedades y nuevas tecnologías que salen día a día.
                    </p>
                    <button
                        className='btn-custom btn-info'
                        onClick={()=> setShowDescription( state => !state )}
                    >
                        <span>Mas info</span>
                        <i></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
