import sertic from '../../../assets/projects/sertic.png';
import todoapp from '../../../assets/projects/todoapp.png';
import went2app from '../../../assets/projects/went2app.png';
import calendar from '../../../assets/projects/calendar.png';
import mareoenvios from '../../../assets/projects/mareoenvios.png';

export const data = [
    {
        name: 'todoapp',
        title:'Todo App',
        desc: 'Uno de mis primeros proyectos en React. TODOapp es basicamente una app que sirve para agregar tareas que debo realizar. A medida que se van realizando se pueden clickear sobre ellas para tacharlas y/o borrarlas. No se requirió Backend. No es un programa complejo pero se utilizaron varios Hooks.',
        buttons: [
            {
                name:'todoapp',
                href:'https://alela11i.github.io/TODOapp/'
            },
            {
                name:'repositorio',
                href:'https://github.com/aleLa11i/TODOapp.git'
            }
        ],
        image: todoapp,
        side: 'right'
    },
    {
        name: 'serticweb',
        title:'SerTIC Web',
        desc: 'Desarrollo de landing page de empresa SerTIC - Soluciones Informáticas. El trabajo fue junto a personal de diseño gráfico. Las tecnologías utilizadas para frontend son React y mucho CSS para poder adaptar correctamente la maqueta diseñada. Luego se implemento un backend con Node.JS y junto con personal de infraestructura se pudo desplegar correctamente en ambiente de testing para hacer pruebas y luego hacer deploy a produccion.',
        version: 3,
        buttons: [
            {
                name:'sertic web',
                href:'https://www.sertic.com.ar/'
            },
            {
                name:'frontend',
                href:'https://github.com/sertic/landing-page-sertic-v3'
            },
            {
                name:'backend',
                href:'https://github.com/sertic/landing-page-v3-backend'
            }
        ],
        image: sertic,
        side: 'left'
    },
    {
        name: 'went2app',
        title:'Went2 App',
        desc: 'Este fue mi proyecto que presente en la academia de React que hice para softtek en colaboracion con UTN. Le di el nombre de Went2App y la aplicación una red social donde te podes loguear y subir posts y compartirlos con el resto de la red social. Los posts se basan en albumes de fotos de diferentes temas y tienen un título, un descripción, una galería de imagenes y una imagen principal. Tiene 3 secciones, el profile o perfil, el home y una seccion "New Post" para subir un post. Un nav que permite navegar por estas 3 secciones y un botón de deslogueo. El login lo trabaje con backend y devuelve un token que tiene una duración de 2 horas. Actualmente no esta desplegada.',
        buttons: [
            {
                name:'frontend',
                href:'https://github.com/aleLa11i/proyect-react-softtek-utn'
            },
            {
                name:'backend',
                href:'https://github.com/aleLa11i/backend--proyect-react-softtek-utn'
            }
        ],
        image: went2app,
        side: 'right'
    },
    {
        name: 'calendar',
        title:'Calendar App',
        desc: 'Uno de mis primeros proyectos con React complementado con Backend. Utilizando Node JS para el backend y Mongo DB como Base de Datos. El proyecto se basa en un calendario (con login validado por backend) donde permite crear eventos y guardarlos. Puedes compartir los eventos con el resto de las personas que se logean en la app pero solo vos podes modificar tus eventos. Al logearse se genera un token con duracion de 2hs que se renueva, lo que matiene la sesion abierta dentro del navegador hasta que se de logout. La aplicacion no se encuentra desplegada.',
        buttons: [
            {
                name:'frontend',
                href:'https://github.com/aleLa11i/mern-calendar-frontend'
            },
            {
                name:'backend',
                href:'https://github.com/aleLa11i/mern-calendar-backend'
            }
        ],
        image: calendar,
        side: 'left'
    },
    {
        name: 'mereo-envios',
        title:'Mareo Envios App',
        desc: 'Proyecto presentado para un examen tecnico. El examen consta de una aplicacion Spring Boot que maneja el uso de hilos a partir de algunos requerimientos, se deja en adjunto las consignas para mas informacion. Tambien se deja el repositorio en github. Es una aplicacion unicamente backend con una pequeña base de datos.',
        buttons: [
            {
                name:'repositorio',
                href:'https://github.com/aleLa11i/mareoenvios'
            },
            {
                name:'consigna',
                href:'https://drive.google.com/drive/folders/1msVEFLoHY5czQE01qtfr2IahXJl3bSoG'
            }
        ],
        image: mareoenvios,
        side: 'right'
    }
]