import React from 'react';
import background from "./background.png"

export const BackgroundScreen = () => {
    return (
            <img 
                src={background}
                alt="background-img"
                className="background"
            ></img>
    )
}
