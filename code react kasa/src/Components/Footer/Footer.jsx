import React from 'react';
import Logo from '../../Assets/LogoFooter.png';
import '../Footer/Footer.css';
import "../Footer/FooterMobile.css"

const Footer = () => {
    return (
        <div className='Footer'>
            <img src={Logo} alt='logo kasa' />
            <p> © 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;