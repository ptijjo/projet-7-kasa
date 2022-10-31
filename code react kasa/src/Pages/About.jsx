import React from 'react';
import Header from '../Components/Header/Header';
import "../Styles/about/about.css";
import "../Styles/about/aboutMobile.css";
import "../Styles/about/aboutTablette.css";
import Section2 from '../Sous_Components/Section2';
import Collapse from '../Components/Collapse/Collapse';
import Footer from "../Components/Footer/Footer";

const About = () => {
    return (
        <div className='About'>
            <Header />
            <Section2 className="section2" />
            <Collapse nom="Fiabilité" className="collapse" >
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </Collapse>

            <Collapse nom="Respect" className="collapse">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </Collapse>

            <Collapse nom="Service" className="collapse">
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </Collapse>

            <Collapse nom="Responsabilité" className="collapse">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </Collapse>

            <Footer />
        </div>
    );
};

export default About;