import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/erropage';
import HomePageUser from '../pages/homeUser';
import Profile from '../pages/profile';

const UserRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePageUser />} />
        <Route path="/perfile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoutes;