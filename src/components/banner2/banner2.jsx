import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import src from '../../assets/images/logos/logo.png';

const HeaderBanner2 = () => {
    return (
        <div className="static-slider-head banner2">
            <img src={src} alt="banner"/>
        </div>
    );
}

export default HeaderBanner2;
