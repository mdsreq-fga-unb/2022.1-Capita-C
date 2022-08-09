import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/erropage';

import Login from '../pages/login';

const SignRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default SignRoutes;