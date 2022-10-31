import React from 'react';
import Footer from '../Components/Footer/Footer';
import Gallery from '../Components/Gallery/Gallery';
import Header from '../Components/Header/Header';
import Section1 from '../Sous_Components/Section1';
import "../Styles/accueil/accueil.css";
import "../Styles/accueil/accueilMobile.css";
import "../Styles/accueil/accueilTablette.css";


const Accueil = () => {
    return (
        <div className='accueil'>
            <Header />
            <div className='body'>
                <Section1 className="section1" />
                <Gallery className="Gallery" />
            </div>
            <Footer />
        </div>
    );
};

export default Accueil;