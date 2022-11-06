import React from 'react';
import NavHeader from '../../Sous_Components/NavHeader';
import LOGO from '../../Assets/LOGO.png';
import '../Header/Header.css';
import "../Header/HeaderMobile.css";

const Header = () => {
    return (
        <div className='Header'>
            <img src={LOGO} alt="Logo Kasa" className='Logo' />
            <NavHeader className="NavHeader" />
        </div>
    );
};

export default Header;