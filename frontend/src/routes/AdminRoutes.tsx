import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/erropage';
import HomePageAdmin from '../pages/homeAdmin';

const AdminRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageAdmin />} />
                <Route path="/home" element={<HomePageAdmin />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoutes;