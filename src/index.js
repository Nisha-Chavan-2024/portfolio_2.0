import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/home/HomePage';
import {BrowserRouter , Routes, Route,Navigate } from 'react-router-dom';
import AchivementPage from './components/achivements/AchivementPage';
import AboutPage from './components/about/AboutPage';
import ResumePage from './components/resume/ResumePage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path='/home' element={<HomePage />} />
    <Route path='/resume' element={<ResumePage />} />
    <Route path='/achive' element={<AchivementPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  
);

