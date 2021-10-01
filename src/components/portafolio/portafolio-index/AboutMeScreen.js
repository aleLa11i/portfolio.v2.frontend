import React from 'react';
import { aboutmetext } from '../../../helpers/aboutmetext';

export const AboutMeScreen = () => {
    return (
        <div id="aboutme" className="aboutme screen">        
            <div className="aboutme-conteiner center conteiner">
                <div>
                    <h1>Un poco sobre mi..</h1>
                    <div className="image-face ">
                        <img
                            src="https://lh3.googleusercontent.com/pqcDkOnKZDQt1-qZDvEbWCbYzBMFsAM9rx9qpmVbG17hI9kqswOiG7DZ3O25lZWURnSyptVtRmhfO-Vk95gfUsF11GOUAEBkIeC8OmWk-4nZp4dvj-hBnO7RwDepmkcStUzH1x98JMaZWTLhfVnYV1H3x8aTrRy86m6tSo0UzxHsQ9R48CdvFvUDE6jVx3on9-GWdKFAUh_SOKrYffhTwE1iN0OPK0mPhFIHKbyZ-ZJOu-V3ijiIGn7VDtqck2_puBWyS3jLfSP__7KAV_lR1k5vnzWG10r0x0LoUTCbRTflYXdekH6oXn2viT4PMYpXQKpRaGLgGAen_xVocnGsSenl83rzttt0cYuG9F6eSjWA7UuANVjBNR88V5xs8RiBYXu-ZiRAL_N_Nia0h4wNM83MAjvL2Ny2kuabLIRJ6i5DowCV4sS7nesyVvwtkET92eOCjl6WzJCuYdJViSMG8zH53tM_3paq6cKEqiF8zmF59dYUYppx0JUwx0-hrX7IV1TioiGNokoE1XagS3e79Ce6fCHi_Rm1P-vAtm8X41nU3rTHetuFYpWLlD5OoXpzorw_YFJqqnAGNd6RMIED_YtuX74UEQrJl9sbkB555H06JN2BgVDGow0kUv73kd4hORAatSiwzxwniSwBHZSIMfBSNZ1m_2AuWMBKM5Htn9GxgWMlkGpoCvzfKn9xwX22zhZrRrIegjuO_Rh8c_mLQFSD=w1406-h937-no?authuser=0"
                            alt="image-face-2" 
                        />
                    </div>
                </div>
                    { aboutmetext() }  
            </div>
        </div>
    )
}
