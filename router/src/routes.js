import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home/index';
import Contact from './pages/contact/index';
import Users from './pages/users/index';

export default function Rota() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}