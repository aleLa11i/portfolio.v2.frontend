import React from 'react';
import { BackgroundScreen } from './components/background/BackgroundScreen.jsx';
import { NavBar } from './components/navbar/NavBar.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { AppRouter } from './routes/AppRouter.jsx';

export const PortfolioApp = () => {
    return (
        <div>
            <BackgroundScreen />
            <NavBar />
            <AppRouter />
            <Footer />
        </div>
    )
}
