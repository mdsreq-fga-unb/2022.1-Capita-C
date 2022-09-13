import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditarLoja from '../pages/editarLoja';
import { ErrorPage } from '../pages/erro';
import HomePageUser from '../pages/homeUser';

const UserRoutes: React.FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageUser />} />
                <Route path="/loja-edit/:cnpj" element={<EditarLoja />} />
                <Route path='/perfil' element={<HomePageUser />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
  );
};

export default UserRoutes;