import React, { useEffect, useState } from 'react';
import { HomeScreen } from './portfolio-index/HomeScreen';
import { AboutMeScreen } from './portfolio-index/AboutMeScreen';
// import { ContactScreen } from './portfolio-index/ContactScreen';
import { ProyectsScreen } from './portfolio-index/ProyectsScreen';
import { SkillsScreen } from './portfolio-index/SkillsScreen';

export const PortfolioScreen = () => {

    const handleCloseNavbar = () => {
        document.getElementById("navbar").classList.remove("show-navbar");
        document.getElementById("navbar-icon").classList.remove("visible");
    }

    return (
        <div className="portafolio-screen" onClick={handleCloseNavbar}>
            <HomeScreen />
            <AboutMeScreen />
            <SkillsScreen />
            <ProyectsScreen />
            {/* <ContactScreen />  */}
        </div>
    )
}
