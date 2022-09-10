import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditarLoja from '../pages/editarLoja';
import { ErrorPage } from '../pages/erropage';
import HomePageUser from '../pages/homeUser';

const UserRoutes: React.FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageUser />} />
                <Route path="/edit/:id" element={<EditarLoja />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
  );
};

export default UserRoutes;