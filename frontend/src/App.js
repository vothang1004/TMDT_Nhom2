import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { adminRoutes, webRoutes } from './routes';

function App() {
  return (
    <>
    <Routes>
      {
        webRoutes.map(route => (
          <Route key={route.id} element={route.page} path={route.path}></Route>
        ))
      }
      {
        adminRoutes.map(route => (
          <Route key={route.id} element={route.page} path={route.path}></Route>
        ))
      }
    </Routes>
    </>
  )
}

export default App;
