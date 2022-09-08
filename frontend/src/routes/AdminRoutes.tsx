import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/erro/index';


import HomePageAdmin from '../pages/homeAdmin';

const AdminRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePageAdmin />} />
                <Route path="/erro" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoutes;