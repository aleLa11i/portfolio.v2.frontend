import React, { useEffect, useState } from 'react';
import { PortafolioScreen } from './PortafolioScreen';
import { NavBar } from '../ui/NavBar';

export const PortafolioHome = () => {
    return (
        <div className="portafolio-home">
            <NavBar />
            <PortafolioScreen />
        </div>
    )
}
