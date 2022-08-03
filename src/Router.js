import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLee from './pages/Lee/Main/Main';
import MainLim from './pages/Lim/Main/Main';
import MainMun from './pages/Mun/Main/Main';
import MainChoi from './pages/Choi/Main/Main';
import LoginMun from './pages/Mun/Login/Login';
import LoginLim from './pages/Lim/Login/Login';
import LoginLee from './pages/Lee/Login/Login';
import LoginChoi from './pages/Choi/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-choi" element={<LoginChoi />} />
        <Route path="/login-lee" element={<LoginLee />} />
        <Route path="/login-lim" element={<LoginLim />} />
        <Route path="/login-mun" element={<LoginMun />} />

        <Route path="/main-choi" element={<MainChoi />} />
        <Route path="/main-lee" element={<MainLee />} />
        <Route path="/main-lim" element={<MainLim />} />
        <Route path="/main-mun" element={<MainMun />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
