import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PortfolioScreen } from '../components/portfolio/PortfolioScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PortfolioScreen />} />
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
        </BrowserRouter>
    )
}
