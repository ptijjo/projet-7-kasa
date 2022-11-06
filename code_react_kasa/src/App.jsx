import React from 'react';
import Router from './Components/Router';
import Accueil from './Pages/Accueil';
import About from './Pages/About';
import { Route } from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage';
import FicheLogement from './Pages/FicheLogement';

const App = () => {
  return (
    <Router>
      <Route path="/" element={<Accueil />} />
      <Route path="/about" element={<About />} />
      <Route path="/fichelogement/:id" element={<FicheLogement />} />
      <Route path="*" element={<NotFoundPage />} />
    </Router>

  );
};

export default App;