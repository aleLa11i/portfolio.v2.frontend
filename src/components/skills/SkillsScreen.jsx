import React, { useState } from 'react';
import {data} from "./skills";
import Grid from '@mui/material/Grid';
import { useWindowSize } from '../../hooks/useWindowSize';

export const SkillsScreen = () => {
    const [skillProgress, setSkillProgress] = useState(0);
    const [skillInterval, setSkillInterval] = useState(null);
    const [ width ] = useWindowSize();

    const onMouseEnterSkill = (index,percentage) => {
        const progressBar = document.getElementById(`progress-bar-skill-${index}`)

        setSkillInterval(setInterval(() => {
            const computedStyle = getComputedStyle(progressBar);
            const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0 ;
            progressBar.style.setProperty('--width', width + .7)
            if( Math.ceil(width + .5) <= percentage){
                setSkillProgress(Math.ceil(width + .5));
            }
        }, 5));
    }

    const onMouseLeaveSkill = (index) => {
        const progressBar = document.getElementById(`progress-bar-skill-${index}`);
        progressBar.style.setProperty('--width', 2);
        setSkillProgress(0);
        clearInterval(skillInterval);
    }

    const onClickSkill = (href) =>{
        const newTab = window.open(href, '_blank');
        newTab.focus();
    }

    return (
        <section className='skills' id='skills'>
                <h2>Habilidades</h2>
                <Grid style={{marginTop:"20px"}} container spacing={2}>
                {
                    data?.map( (skill, index) => (
                        <Grid 
                            key={`skill-${index}`} 
                            item 
                            xs={ width > 1070 ? 2 : 3 }
                        >
                            <div 
                                className='skill-item' 
                                onMouseEnter={ () => onMouseEnterSkill(index, skill.percentage)}
                                onMouseLeave={ () => onMouseLeaveSkill(index)}
                                onClick={ () => onClickSkill( skill?.href ) }
                            >
                                <img
                                    className='skill-img'
                                    src={skill.image}
                                    alt={`skill-${index}`} 
                                />
                                <h3>{skill.name}</h3>
                                <div 
                                    className='skill-progress'
                                >
                                    <h4>{skillProgress}%</h4>
                                </div>
                                <div className='progress-bar' id={`progress-bar-skill-${index}`} style={{"--width": 2,"--max-width": skill.percentage}}></div>
                                <i></i>
                            </div>
                        </Grid>
                    ))
                }
                </Grid>
        </section>
    )
}
