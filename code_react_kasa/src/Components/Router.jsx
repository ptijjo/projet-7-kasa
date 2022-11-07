import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import About from '../Pages/About';
import NotFoundPage from '../Pages/NotFoundPage';
import FicheLogement from '../Pages/FicheLogement';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/about" element={<About />} />
                <Route path="/fichelogement/:id" element={<FicheLogement />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>

    );
};

export default Router;