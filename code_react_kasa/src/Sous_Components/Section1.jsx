import React from 'react';
import logo from '../Assets/Section1.png';

const Section1 = (props) => {
    return (
        <div className={props.className}>
            <img src={logo} alt=" montagne" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    );
};

export default Section1;