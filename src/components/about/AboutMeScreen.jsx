import React from 'react';
import me from "../../assets/me/me2.png"

export const AboutMeScreen = () => {
    return (
        <section className='about' id='about'>
            <h2>Un poco sobre mi..</h2>
            <div>
                <img className='me' src={me} alt="me" />
            </div>
            <div>
                <p>
                    Egresado como Técnico Electronico del colegio secundario San José en Rosario Argentina. Desde mi infancia senti pasión por la informática y los avances tecnológicos, fue en la escuela secundaria cuando programe por primera vez a los 15 años en lenguaje C++ y fue cuando me di cuenta que crear aplicaciones era lo que me gustaba. Luego de graduarme, comence la carrera en Ingeniería en Sistemas de la Información la cual deje de estudiar en 3er año.
                </p>
                <p>
                    La época pandemica me hizo adentrarme más en otros conocimientos como diferentes lenguajes en los cuales están HTML, CSS y JavaScript que son fuertes candidatos hoy en día en el desarrollo de aplicaciones web. Luego tuve que tomar un camino mas especifico, React me llamó mucho la atención asi que me puse manos a la obra. Finalizado los cursos necesarios, creí que lo ideal era aprender algo de backend, así que Node.JS fue mi elección para continuar con la rama de Javascript.
                </p>
                <p>
                    Le dedique horas y estuve trabajando free lance hasta poder tener mi primer trabajo formalmente como desarrollador, fue un arduo trabajo pero valio la pena todo el esfuerzo. Mientras tanto, trabaje como Soporte IT para la empresa SerTIC de Rosario, lo que me ayudo a ampliar mis conocimientos en el rubro y ganar experiencia en el ámbito laboral. Dentro de SerTIC estuve involucrado en proyectos de desarrollo Web como por ejemplo una landing page o desarrollo de mails con handlebars ( que utiliza HTML y CSS ) en la plataforma VTEX. 
                </p>
                <p>
                    Fue asi que en el año 2022 logre entrar en la academia de React en la empresa Softtek y eso me llevo mi primer trabajo como dev. Fue un año dificil pero emocionante ya que me encontre con muchos desafios nuevos, el mas complicado fue aprender backend desde 0 en el lenguaje Java, ya que era una de las exigencias del puesto en la empresa ( por suerte ellos me pudieron capacitar bien ).
                </p>
                <p>
                    Mi objetivo actualmente es aprender cada día más y siempre estar al tanto de las novedades y nuevas tecnologías que salen día a día.
                </p>
            </div>
        </section>
    )
}
