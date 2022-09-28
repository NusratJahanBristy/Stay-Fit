import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='header-container'>
            <div className='align-icon'>
            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
            <h1>Stay-Fit</h1>
            </div>
           
        </div>
    );
};

export default Header;