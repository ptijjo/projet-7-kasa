import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import "../Styles/notfound/notfound.css"
import "../Styles/notfound/notfoundMobile.css"

const NotFoundPage = () => {
    return (
        <div className='notfound'>
            <Header />
            <p className='num-erreur'>404</p>
            <p className='message'>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='lien'>
                Retourner sur la page d'accueil
            </Link>
            <Footer />
        </div>
    );
};

export default NotFoundPage;