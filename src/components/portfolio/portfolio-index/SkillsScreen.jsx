import React, { useState } from 'react';
import {data} from "./skills";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const SkillsScreen = () => {
    const [skillProgress, setSkillProgress] = useState(0);
    const [skillInterval, setSkillInterval] = useState(null)

    const onMouseEnterSkill = (index,percentage) => {
        const progressBar = document.getElementById(`progress-bar-skill-${index}`)

        setSkillInterval(setInterval(() => {
            const computedStyle = getComputedStyle(progressBar);
            const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0 ;
            progressBar.style.setProperty('--width', width + .7)
            if( Math.ceil(width + .5) < percentage){
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

    return (
        <section className='skills' id='skills'>
                <h2>Habilidades</h2>
                <Grid container spacing={2}>
                {
                    data?.map( (skill, index) => (
                        <Grid item xs={2}>
                            <Item 
                                className='skill-item' 
                                onMouseEnter={ () => onMouseEnterSkill(index, skill.percentage)}
                                onMouseLeave={ () => onMouseLeaveSkill(index)}
                            >
                                <img
                                    className='skill-img'
                                    src={skill.image}
                                    alt={`skill-${index}`} 
                                />
                                <h3>{skill.name}</h3>
                                <h4 className='skill-progress'>{skillProgress}%</h4>
                                <div className='progress-bar' id={`progress-bar-skill-${index}`} style={{"--width": 2,"--max-width": skill.percentage}}></div>
                            </Item>
                        </Grid>
                    ))
                }
                </Grid>
        </section>
    )
}
