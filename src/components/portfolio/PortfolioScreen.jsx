import React from 'react';
import { HomeScreen } from '../home/HomeScreen';
import { AboutMeScreen } from '../about/AboutMeScreen';
import { SkillsScreen } from '../skills/SkillsScreen';
import { ProjectsScreen } from '../projects/ProjectsScreen';

export const PortfolioScreen = () => {
    return (
        <div className="portfolio">
            <HomeScreen />
            <AboutMeScreen />
            <SkillsScreen />
            <ProjectsScreen />
            {/* <ContactScreen />  */}
        </div>
    )
}
