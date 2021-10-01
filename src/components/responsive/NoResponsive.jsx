import React from 'react'

export const NoResponsive = () => {
    return (
        <div
            style={{
                background:'black',
                height:'100vh',
                width:'100vw',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                padding:'10vw'
            }}
        >
            <h1>
                En estos momentos la pagina no es responsiva, 
                estamos trabajando en las actualizaciones.
            </h1>
            <h1>Gracias</h1>
        </div>
    )
}
