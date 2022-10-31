import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                {props.children}
            </Routes>
        </BrowserRouter>

    );
};

export default Router;