import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {data} from './footer';

export const Footer = () => {
  return (
    <>
        <div
            className='footer'
        >
            <div
                className='footer-section-1'
            >
                {
                    data.map( logo => (
                    <a 
                        key={logo.name}
                        href={logo.href}
                        target='blank'
                    >
                        <img src={logo.img} alt={logo.alt} />
                    </a>
                    ))
                }
                
            </div>
            <div
                className='footer-section-2'
            >
                <div>
                    <LocationOnIcon className='icon'/>
                    <h3>Rosario, Santa Fe, Argentina</h3>
                </div>
                <div>
                    <LocalPhoneIcon className='icon'/>
                    <h3>+54 9 341 349-3683</h3>
                </div>
            </div>
        </div>
        <div className='back-footer'>
            <p>Diseñado y desarrollado por Alesandro Lalli. Última actualización 9/4/2023.</p>
        </div>
    </>
  )
}
