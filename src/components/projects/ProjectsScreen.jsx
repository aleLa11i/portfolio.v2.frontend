import React from 'react';
import notebook from '../../assets/projects/notebook.png';
import { data } from './projects';

export const ProjectsScreen = () => {
  return (
    <section className='projects' id='projects'>
        <h1 className='projects-title' >Proyectos</h1>
          {
            data?.map( project => (
              <div
                className='project'
                key={project.name}
              >
                <img className='project-background' src={project.image} alt="project-background" />
                <div className={`project-info ${project.side}`}>
                  <div
                    className='description-div'
                  >
                    <h1>{project.title}</h1>
                    <p>{project.desc}</p>
                    {
                      project?.version && ( <h3>{`Version: ${project.version}`}</h3> )
                    }
                    
                    <div
                      className='description-buttons'
                    >
                      {
                        project?.buttons?.map( btn =>(
                            <a key={btn.name} className='btn-custom' href={btn.href} target='blank'>
                              <span>{btn.name}</span>
                              <i></i>
                            </a>
                          ))
                      }
                    </div>
                  </div>
                  <div
                    className='notebook-div notebook-div-right'
                  >
                    <img className='notebook-img notebook-img-right' src={notebook} alt="notebook" />
                    <img className='project-image project-image-right' src={project.image} alt="project-image" />
                  </div>
                </div>
              </div>
            ))
          }

    </section>
  )
}