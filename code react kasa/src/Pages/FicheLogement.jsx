import React from 'react';
import { useParams } from 'react-router-dom';
import Carroussel from '../Components/Caroussel/Carroussel';
import Header from '../Components/Header/Header';
import "../Styles/ficheLogement/ficheLogement.css";
import "../Styles/ficheLogement/ficheLogementMobile.css";
import "../Styles/ficheLogement/ficheLogementTablette.css";
import { data } from "../Sous_Components/Data";
import Collapse from "../Components/Collapse/Collapse";
import Footer from "../Components/Footer/Footer"
import Rating from '../Components/Rate/Rating';
import NotFoundPage from './NotFoundPage';



const FicheLogement = () => {

    const id = useParams();
    const Id = id.id;

    const index = data.findIndex(i => i.id === Id);


    if (index === -1) {
        return (<NotFoundPage />)
    }

    return (
        <div className='ficheLogement'>
            <Header />
            <div className='body'>
                <Carroussel photo={data[index].pictures} className="caroussel" />
                <div className='information'>
                    <div className='adress-tag'>
                        <span className='titre-adresse'>
                            <p className='titre'> {data[index].title}</p>
                            <p className='adresse'> {data[index].location}</p>
                        </span>
                        <span className='tag'>
                            {data[index].tags.map((tag, index) => (
                                <p key={index}> {tag}</p>
                            ))}
                        </span>

                    </div>
                    <div className='agent-note'>
                        <span className='agent'>
                            <p>{data[index].host.name}</p>
                            <img src={data[index].host.picture} alt={data[index].host.name} />
                        </span>
                        <span className='note'>
                            <Rating rate={data[index].rating} className="rate" />
                        </span>
                    </div>
                </div>
                <div className='description-equippement'>
                    <Collapse className="description" nom="Description">
                        {data[index].description}
                    </Collapse>
                    <Collapse className="equipement" nom="Equipements">
                        {data[index].equipments.map((equip, index) => (
                            <p key={index}>{equip}</p>
                        ))}
                    </Collapse>
                </div>
            </div>
            <Footer />
        </div>
    );

};

export default FicheLogement;