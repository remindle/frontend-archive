import { History } from 'history';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import CustomRouter from './components/CustomRouter';
import Login from './components/Login';
import Register from './components/Register';

type Types = {
  history: History;
  onLogin: () => void;
};

export default ({ history, onLogin }: Types) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="login" element={<Login onLogin={onLogin} />} />
          <Route path="register" element={<Register />} />
          {/* always reroute to login if we dont hit the full/correct path */}
          <Route index element={<Navigate to="login" />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Route>
        <Route path="*" element={<Navigate to="auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
