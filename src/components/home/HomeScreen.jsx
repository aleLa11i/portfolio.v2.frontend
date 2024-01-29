import React from 'react';
import icon from '../../assets/favicon.ico';
import face from '../../assets/me/me.png'

export const HomeScreen = () => {
    return (
        <section id='home' className='home'>
            <div>
                <h2>Hola! Soy Alesandro Lalli</h2>
                <h3>Full Stack Developer</h3>
            </div>
            <div
                className='face-div'
            >
                <img className='face' src={face} alt="face" />
            </div>
            <div
                className='button-icon'
            >
                <a 
                    href='https://drive.google.com/file/d/19Xa3BESBnUQ2Y5FfzBOtKtUzPEsMXpWQ/view?usp=drive_link'
                    target='blank'
                    className='button-cv btn-custom'
                ><span>CV</span><i></i></a>
                <img className='icon' src={icon} alt="logo" />
            </div>

        </section>
    )
}
