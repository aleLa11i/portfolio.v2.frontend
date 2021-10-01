import React from 'react';
import { Provider } from 'react-redux';
import { BackgroundScreen } from './components/background/BackgroundScreen';
import { PortafolioHome } from './components/portafolio/PortafolioHome';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { store } from './Store';
import { NavBar } from './components/ui/NavBar';
export const PortafolioApp = () => {
    return (
        <div>
        <Router>
            <Provider store={store}>
               <BackgroundScreen />
               <PortafolioHome />
            </Provider>
        </Router>
        </div>
    )
}
