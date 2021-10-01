import React, { useEffect, useState } from 'react';
import { AboutMeScreen } from './portafolio-index/AboutMeScreen';
import { ContactScreen } from './portafolio-index/ContactScreen';
import { FooterScreen } from './portafolio-index/FooterScreen';
import { HomeScreen } from './portafolio-index/HomeScreen';
import { ProyectsScreen } from './portafolio-index/ProyectsScreen';
import { SkillsScreen } from './portafolio-index/SkillsScreen';

export const PortafolioScreen = () => {
    return (
        <div className="portafolio-screen">
            <HomeScreen />
            <AboutMeScreen />
            <SkillsScreen />
            <ProyectsScreen />
            <ContactScreen /> 
            <FooterScreen /> 
        </div>
    )
}
