import React from 'react';
import { Link } from 'gatsby';
// import {
//     StyledImg,
//     CTAImage,
//     CTAImageTextWrapper,
//     CTAImageText,
// } from './styles/CTAImagesStyles';

const CTA = ({ image, link, text }) => (
        <Link to={link}>
            <img src={image} alt={text} />
            <p>{text}</p>>
        </Link>
);

export default CTA;