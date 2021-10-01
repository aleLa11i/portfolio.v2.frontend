import React from 'react';
import { BackgroundScreen } from './components/background/BackgroundScreen';
import { NavBar } from './components/navbar/NavBar';
import { PortfolioScreen } from './components/portfolio/PortfolioScreen';

export const PortfolioApp = () => {
    return (
        <div>
            <BackgroundScreen />
            <NavBar />
            <div className="portfolio">
                <PortfolioScreen />
            </div>
        </div>
    )
}
