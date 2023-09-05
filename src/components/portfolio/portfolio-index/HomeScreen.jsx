import React from 'react';
import icon from '../../../assets/favicon.ico';
import face from '../../../assets/me/me.jpg'

export const HomeScreen = () => {
    return (
        <section id='home' className='home'>
            <div>
                <h2>Hola!</h2>
                <h2>Soy Alesandro Lalli</h2>
                <h3>Full Stack Developer</h3>
            </div>
            <div>
                <img className='face' src={face} alt="face" />
            </div>
            <div>
                <button className='button-cv'>CV</button>
                <img className='icon' src={icon} alt="logo" />
            </div>

        </section>
    )
}
