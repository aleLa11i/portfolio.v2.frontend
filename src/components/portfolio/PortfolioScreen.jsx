import React from 'react';
import { HomeScreen } from '../sections/home/HomeScreen';
import { AboutMeScreen } from '../sections/about/AboutMeScreen';
import { SkillsScreen } from '../sections/skills/SkillsScreen';
import { ProjectsScreen } from '../sections/projects/ProjectsScreen';

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
