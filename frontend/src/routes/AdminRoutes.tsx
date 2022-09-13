import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditarLoja from '../pages/editarLoja';
import { ErrorPage } from '../pages/erro';
import HomePageAdmin from '../pages/homeAdmin';
import Usuario from '../pages/usuarioAdmin';

const AdminRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePageAdmin />} />
                <Route path="/loja-edit/:cnpj" element={<EditarLoja />} />
                <Route path='/perfil' element={<HomePageAdmin />} />
                <Route path='/usuarios' element={<Usuario/>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoutes;