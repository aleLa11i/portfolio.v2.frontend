import React from 'react'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import { PortfolioApp } from '../PortfolioApp';
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
