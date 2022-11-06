import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavHeader = (props) => {

    const Home = useNavigate();
    const About = useNavigate();


    const HandleAccueil = () => {
        Home("/");
    }


    const HandleAbout = () => {
        About("/about")
    }




    return (
        <ul className={props.className}>
            <li onClick={HandleAccueil} className="home">
                Accueil
            </li>

            <li onClick={HandleAbout} className='about'>
                A Propos
            </li>
        </ul>
    );
};

export default NavHeader;