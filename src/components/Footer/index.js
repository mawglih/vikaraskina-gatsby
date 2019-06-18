import React from 'react';
import FB from '../../images/facebook.png';
import YT from '../../images/youtube.png';
import IG from '../../images/instagram.png';

import { FooterWrapper } from '../styles/FooterStyles';

const Footer = () => (
    <FooterWrapper>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="whiteText">CONTACT</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="facebook.com"><p>On Facebook</p>
                    <img src={FB} alt="facebook icon"/> </a>
                </div>
                <div className="col-md-4">
                    <a href="instagram.com"><p>On Instagram</p>
                    <img src={IG} alt="facebook icon"/> </a>
                </div>
                <div className="col-md-4">
                    <a href="youtube.com"><p>On Youtube</p>
                    <img src={YT} alt="facebook icon"/> </a>
                </div>
            </div>
        </div>
    </FooterWrapper>
);

export default Footer;
