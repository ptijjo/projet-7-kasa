import React from 'react';
import logo from '../Assets/Section2.png';

const Section2 = (props) => {
    return (
        <div className={props.className}>
            <img src={logo} alt="section2" />
        </div>
    );
};

export default Section2;