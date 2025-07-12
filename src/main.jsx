import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; 

import App from './App.jsx';
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addcoffee" element={<AddCoffee />} />
        <Route path="/updatecoffee" element={<UpdateCoffee />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
