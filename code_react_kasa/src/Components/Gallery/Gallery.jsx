import React from 'react';
import { data } from "../../Sous_Components/Data";
import { useNavigate } from "react-router-dom";

const Gallery = (props) => {
    const lien = useNavigate();

    const HandleId = (i) => {
        lien("/fichelogement/" + i)
    }


    return (
        <ul className={props.className}>

            {data.map((location) => (
                <li key={location.id} onClick={() => HandleId(location.id)}>
                    <img src={location.cover} alt="couverture du bien" />
                    <p>{location.title}</p>
                </li>
            ))}



        </ul>
    );
};

export default Gallery;