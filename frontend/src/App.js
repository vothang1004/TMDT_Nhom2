import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { webRoutes } from './routes';

function App() {
  return (
    <>
    <Routes>
      {
        webRoutes.map(route => (
          <Route key={route.id} element={route.page} path={route.path}></Route>
        ))
      }
    </Routes>
    </>
  )
}

export default App;
