import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLee from './components/pages/Lee/Main/Main';
import MainLim from './components/pages/Lim/Main/Main';
import MainMun from './components/pages/Mun/Main/Main';
import MainChoi from './components/pages/Choi/Main/Main';
import LoginMun from './components/pages/Mun/Login/Login';
import LoginLim from './components/pages/Lim/Login/Login';
import LoginLee from './components/pages/Lee/Login/Login';
import LoginChoi from './components/pages/Choi/Login/Login';

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
