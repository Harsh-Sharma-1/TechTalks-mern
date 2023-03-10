import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/shared/Navigation/Navigation';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
