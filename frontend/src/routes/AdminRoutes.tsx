import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/erropage';
import HomePageAdmin from '../pages/homeAdmin';
import Profile from '../pages/profile';

const AdminRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePageAdmin />} />
                <Route path="/perfile" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoutes;