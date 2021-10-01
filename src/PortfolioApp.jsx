import React, { useEffect, useState } from 'react';
import { BackgroundScreen } from './components/background/BackgroundScreen.jsx';
import { NavBar } from './components/navbar/NavBar.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { AppRouter } from './routes/AppRouter.jsx';
import { NoResponsive } from './components/responsive/NoResponsive.jsx';

export const PortfolioApp = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
        return () => {
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
        };
    }, [window])

    console.log( width );
    const responsiveRender = () =>{
        if( width > 1000 ){
            return (
                <div>
                    <BackgroundScreen />
                    <NavBar />
                    <div className="portfolio">
                        <AppRouter />
                    </div>
                    <Footer />
                </div>
            )
        }else{
            return <NoResponsive />
        }
    }

    return responsiveRender();
}
